import React from 'react'
import PropTypes from 'prop-types'
import Transaction from './Transaction'
import { connect } from 'react-redux'
import { setSortFilter } from '../actions'
import { FaArrowDown } from 'react-icons/fa'

const TransactionList = ({ transactions, setFilter }) => (
  <table className="centering">
    <thead>
        <tr>
        <th> Included </th>
        <th className="sort" onClick={() => setFilter("date")}> <FaArrowDown/> Date </th>
        <th> Account </th>
        <th> Transactiontype </th>
        <th className="sort" onClick={() => setFilter("stockname")}> <FaArrowDown/> Name  </th>
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

TransactionList.propTypes = {
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

const mapStateToProps = state => ({
  transactions: state.TransactionsStore.transactions
})

const mapDispatchToProps = dispatch => ({
  setFilter: filter => dispatch(setSortFilter(filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList)
