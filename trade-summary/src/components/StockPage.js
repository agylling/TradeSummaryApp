import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {ShareSummary} from './Stock'
import Transaction from './Transaction'
import { FaArrowDown } from 'react-icons/fa'
import { setSortFilter } from '../actions'

const renderTransactionsTable = (setFilter, name, transactions) => {
  var summaryCells = [];
  for(var entry of transactions){
    if(entry.stockname === name){
      summaryCells.push(entry);
    }
  }
  if( summaryCells === [] ){
    return ( null );
  }
  return(
    <table className="centering">
      <thead>
          <tr>
          <th> Included </th>
          <th className="sort" onClick={() => setFilter("date")}> <FaArrowDown/> Date </th>
          <th> Account </th>
          <th> Transactiontype </th>
          <th> Name  </th>
          <th> Amount </th>
          <th> Price </th>
          <th> Total </th>
          <th> Brokerage </th>
          <th> Currency </th>
          <th> Id </th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(item =>
          <Transaction
            {...item}
          />
        )}
      </tbody>
    </table>
  )
}

const renderSummaryTable = (name, summaries) => {
  var summaryCell = null;
  for(var entry of summaries){
    if(entry.name === name){
      summaryCell = entry;
    }
  }
  if( summaryCell === null ){
    return ( null );
  }

  return (
    <div className="centering">
      <table className="centering">
        <thead>
          <tr>
            <th>Name</th>
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
          <ShareSummary {...summaryCell}/>
        </tbody>
      </table>
    </div>
  );
};

const StockPage = ({setFilter, name, summaries, transactions, dispatch}) => {

  return(
    <div>
      {renderSummaryTable(name, summaries)}
      {renderTransactionsTable(setFilter, name, transactions)}
    </div>
  )
}

StockPage.propTypes = {
  summaries: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    amountOwned: PropTypes.number.isRequired,
    paid: PropTypes.number.isRequired,
    sharesBought: PropTypes.number.isRequired,
    sold: PropTypes.number.isRequired,
    sharesSold: PropTypes.number.isRequired,
    avgBought: PropTypes.number.isRequired,
    divident: PropTypes.number.isRequired,
    profit: PropTypes.number.isRequired,
    brokerage: PropTypes.number.isRequired
  }).isRequired).isRequired,
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
  name: PropTypes.string.isRequired
}


const mapStateToProps = (state) => ({
  summaries: state.TransactionsStore.summaries,
  transactions: state.TransactionsStore.transactions,
  name: state.TransactionsStore.stockPage
})

const mapDispatchToProps = dispatch => ({
  setFilter: filter => dispatch(setSortFilter(filter)),
})

export default connect(mapStateToProps, mapDispatchToProps)(StockPage)
