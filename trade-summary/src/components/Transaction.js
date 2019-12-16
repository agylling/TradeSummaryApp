import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { include } from "../actions"

const Transaction = ({
  include, dispatch,
  date, account, transactiontype,
  stockname, amount, price,
  total, brokerage, currency,
  id, included, index
 }) => {

  const checkbox = () => {
    if(transactiontype === "Split"){
      return null;
    }else{
      return (
        <input type="checkbox" checked={included}
        onClick={() => { include(index, date,included)}}
        />
      )
    }
  }

  return (
  <tr>
    <td>
      {checkbox()}
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
  </tr>
  )
 }

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
  include: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
}

const mapDispatchToProps = dispatch => ({
  include: (index, date,included) => {dispatch(include(index, date, included))}
})

export default connect(null, mapDispatchToProps)(Transaction)
