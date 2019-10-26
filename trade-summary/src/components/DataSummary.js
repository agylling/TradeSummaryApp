import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Stock from './Stock'
import {ShareSummary} from './Stock'

const DataSummary = ({transactions, dispatch}) => {
  // Tracks the summarized info for each stock
  var stockMap = new Map();

  const handleTransaction = (stock, transaction) => {
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
    stock.getProfits();
    stock.roundDecimals();
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
          handleTransaction(stock, entry);
        }
        console.log("Profits" + stock.profit);
      });
  };

  const renderSummary = () => {
    var entries = [];
    for(var entry of stockMap.values()){
      entries.push(entry);
      console.log("Entry " + entry)
    }
    return(
      entries.map(entry => {
          return <ShareSummary {...entry}/>
      })
    )
  };

  return(
    summarize(transactions),
    console.log(stockMap.get("Starbreeze B")),
    <table className="centering">
      <thead>
        <tr>
          <th>Name</th>
          <th>Bought</th>
          <th>@avg</th>
          <th>Total</th>
          <th>Sold</th>
          <th>@avg</th>
          <th>total</th>
          <th>Dividents</th>
          <th>Brokerage</th>
          <th>Profit</th>
        </tr>
      </thead>
      <tbody>
     {renderSummary()}
      </tbody>
    </table>
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
}


// Container Component

const mapStateToProps = state => ({
  transactions: state.TransactionsStore.transactions
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataSummary)
