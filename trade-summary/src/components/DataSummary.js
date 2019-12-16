import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Stock from './Stock'
import {ShareSummary} from './Stock'
import {addSummary, setProfit, setSortFilter} from '../actions'
import {getNewTransactions} from './TransactionList'

const DataSummary = ({transactions, addSummary, setProfit, setFilter, name, renderData, splittedShares, dispatch}) => {
  if(renderData === false){
    return (null);
  }

  var copyOfTransactions = [...transactions];
  // If we havespecified a particular stock to review summary on, disregard the rest
  /*if(name !== "" && name !== "all"){
    // Function is exported from TransactionList
    copyOfTransactions = getNewTransactions(copyOfTransactions, name);
  } */
  // Tracks the summarized info for each stock
  var stockMap = new Map();
  var entries = [];
  var totalProfit = 0;

  const handlesplits = () => {
    // Find the negative transaction in the list either directly above or below
    
    if( splittedShares.length%2 === 1){
      return // handle errors
    }
    for(var i = 0; i<splittedShares.length; i += 2){
      var negative = parseFloat(splittedShares[i].amount) < 0 ? splittedShares[i] : splittedShares[i+1]; 
      var positive = parseFloat(splittedShares[i].amount) < 0 ? splittedShares[i+1] : splittedShares[i]; 

      var negativeStock = stockMap.get(negative.stockname);
      var positiveStock = stockMap.get(positive.stockname);

      if(negativeStock != null){
        var avgBoughtBefore = parseFloat(negativeStock.avgBought.toFixed(2));
        avgBoughtBefore /= Math.abs(negative.amount);
        if(positiveStock != null){
          positiveStock.addBuy(positive.amount, avgBoughtBefore, 0);
        }
      }
    }
  }

  const HandleTransaction = (stock, transaction) => {
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
      case 'Split':
        break;
      default: break;
    }
  };

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
      // Fix the average bought on the splitted stocks
      handlesplits();
      return null;
  };

  const renderSummary = () => {
    for(var entry of stockMap.values()){
      if(entry.name === name){
        entries.push(entry);
      }else if(name === null || name === "" || name === "all"){
        entries.push(entry);
      }
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
         {renderSummary()}
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
  splittedShares: PropTypes.arrayOf(PropTypes.shape({
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
  renderData: state.TransactionsStore.renderData,
  splittedShares: state.TransactionsStore.splits
})

const mapDispatchToProps = (dispatch) => ({
  addSummary: stock => dispatch(addSummary(stock)),
  setProfit:  profit => dispatch(setProfit(profit)),
  setFilter: filter => dispatch(setSortFilter(filter)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataSummary)
