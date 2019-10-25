import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class stock {
  constructor(name){
    this.name = name;
    this.amountOwned = 0;
    this.paid = 0;
    this.sharesBought = 0;
    this.sold = 0;
    this.sharesSold = 0;
    this.avgBought = 0;
    this.divident = 0;
    this.profit = 0;
    this.brokerage = 0;
  }
}

const DataSummary = ({transactions, dispatch}) => {

  // Tracks the summarized info for each stock
  const stockMap = new Map();

  const handleTransaction = (stock) => {

  };

  const summarize = (transactions) => {
      // Iterate through all transactions = true
      transactions.map(entry => {
        // If the stock doesn't already exist in the database, create new instance
        if(!stockMap.has(entry.stockname)) {
          stockMap.set(entry.stockname, new stock(entry.stockname));
        }
        stock = stockMap.get(entry.stockname)
        handleTransaction(stock);
      });
  };

  return(
    <div><p>Summarized Info here 2</p></div>
  )
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
    included: PropTypes.bool.isRequired
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
