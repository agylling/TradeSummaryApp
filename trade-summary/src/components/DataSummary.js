import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Stock from './Stock'
import {ShareSummary} from './Stock'
import {addSummary, setProfit, setSortFilter} from '../actions'
import {getNewTransactions} from './TransactionList'

export const HandleTransaction = (stock, transaction) => {
  var constObject = Object.assign({}, transaction);
  switch(constObject.transactiontype){
    case 'Köp':
      stock.addBuy(constObject.amount, constObject.price, constObject.brokerage)
      break;
    case 'Sälj':
      stock.sell(constObject.amount, constObject.price, constObject.brokerage);
      break;
    case 'Utdelning':
      stock.addDividents(constObject.amount, constObject.price);
      break;
    default: break;
  }
};

const DataSummary = ({transactions, addSummary, setProfit, setFilter, name, renderData, dispatch}) => {
  if(renderData === false){
    return (null);
  }

  var copyOfTransactions = [...transactions];
  // If we havespecified a particular stock to review summary on, disregard the rest
  if(name !== "" && name !== "all"){
    // Function is exported from TransactionList
    copyOfTransactions = getNewTransactions(copyOfTransactions, name);
  }
  // Tracks the summarized info for each stock
  var stockMap = new Map();
  var entries = [];
  var totalProfit = 0;

  const summarize = (transactions) => {
      // Iterate through all transactions = true
      transactions.map(entry => {
        // If the stock doesn't already exist in the database, create new instance
        if(!stockMap.has(entry.stockname)) {
          stockMap.set(entry.stockname, new Stock(entry.stockname));
        }
        var stock = stockMap.get(entry.stockname)
        if(entry.included){
          HandleTransaction(stock, entry);
        }
        return null;
      });
      return null;
  };

  const renderSummary = (entries) => {
    for(var entry of stockMap.values()){
      entries.push(entry);
    }
    return(
      entries.map(entry => {
          entry.getProfits();
          entry.roundDecimals();
          totalProfit += parseFloat(entry.returnProfit())
          setProfit(totalProfit)
          return <ShareSummary {...entry}/>
      })
    )
  };

  return(
    stockMap.clear(),
    summarize(copyOfTransactions),
    addSummary(entries),
    <div className="centering">
      <table className="centering">
        <thead>
          <tr>
            <th onClick={() => setFilter("stockname")}>Name</th>
            <th>Bought</th>
            <th>@avg</th>
            <th>Total</th>
            <th>Sold</th>
            <th>@avg</th>
            <th>Total</th>
            <th>Dividents</th>
            <th>Brokerage</th>
            <th>Profit</th>
          </tr>
        </thead>
        <tbody>
         {renderSummary(entries)}
        </tbody>
      </table>
    </div>
  );
}

DataSummary.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string.isRequired,
    account: PropTypes.string.isRequired,
    transactiontype: PropTypes.string.isRequired,
    stockname: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    total: PropTypes.string.isRequired,
    brokerage: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    included: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired
  }).isRequired).isRequired,
  addSummary: PropTypes.func.isRequired,
  renderData: PropTypes.bool.isRequired
}

// Container Component

const mapStateToProps = state => ({
  transactions: state.TransactionsStore.transactions,
  renderData: state.TransactionsStore.renderData
})

const mapDispatchToProps = (dispatch) => ({
  addSummary: stock => dispatch(addSummary(stock)),
  setProfit:  profit => dispatch(setProfit(profit)),
  setFilter: filter => dispatch(setSortFilter(filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataSummary)
