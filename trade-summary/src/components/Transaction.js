import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { include } from "../actions"

const Transaction = ({
  include, dispatch,
  date, account, transactiontype,
  stockname, amount, price,
  total, brokerage, currency,
  id, included
 }) => (
  <tr>
    <td>
      <input type="checkbox" defaultChecked
        onClick={() => {console.log("clickclick"); include(id, date,included)}}
      />
    </td>
    <td>  {date}  </td>
    <td>  {account}   </td>
    <td>  {transactiontype}   </td>
    <td>  {stockname}   </td>
    <td>  {amount}   </td>
    <td>  {price}   </td>
    <td>  {total}   </td>
    <td>  {brokerage}   </td>
    <td>  {currency}   </td>
    <td>  {id}   </td>
    <td>  {included}   </td>
  </tr>
)

Transaction.propTypes = {
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
  include: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  include: (id, date,included) => {dispatch(include(id, date, included))}
})

export default connect(null, mapDispatchToProps)(Transaction)
