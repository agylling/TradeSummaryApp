import React from 'react'
import PropTypes from 'prop-types'
import Transaction from './Transaction'
import { connect } from 'react-redux'
import { include } from "../actions"

const TransactionList = ({ transactions, include }) => (
  <table className="centering">
    <thead>
        <tr>
        <th> Included </th>
        <th> Date </th>
        <th> Account </th>
        <th> Transactiontype </th>
        <th> stockname </th>
        <th> amount </th>
        <th> price </th>
        <th> total </th>
        <th> brokerage </th>
        <th> currency </th>
        <th> id </th>
      </tr>
    </thead>
    <tbody>
      {transactions.map(item =>
        <Transaction
          {...item}
          onClick={() => include(item.id, item.date, item.included)}
        />
      )}
    </tbody>
  </table>
)

TransactionList.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string.isRequired,
    account: PropTypes.string.isRequired,
    transactiontype: PropTypes.string.isRequired,
    stockname: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    brokerage: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    included: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  include: PropTypes.func.isRequired
}

const getTransactions = (transactions) => {
  return transactions;
}

const mapStateToProps = state => ({
  transactions: getTransactions(state.TransactionsStore.transactions)
})

const mapDispatchToProps = dispatch => ({
  include: id => {dispatch(include(id, true))}
})

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList)
