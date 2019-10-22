import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { include } from "../actions"

const Transaction = (
  object
) => (
  <tr>
    <td>
      <input type="checkbox" defaultChecked
        onClick={() => include(object), console.log("clickclick")}
      />
    </td>
    <td>  {object.date}  </td>
    <td>  {object.account}   </td>
    <td>  {object.transactiontype}   </td>
    <td>  {object.stockname}   </td>
    <td>  {object.amount}   </td>
    <td>  {object.price}   </td>
    <td>  {object.total}   </td>
    <td>  {object.brokerage}   </td>
    <td>  {object.currency}   </td>
    <td>  {object.id}   </td>
    <td>  {object.included}   </td>
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
  included: PropTypes.bool.isRequired
}

const mapDispatchToProps = dispatch => ({
  include: object => {dispatch(include(object.id, object.date, object.include))}
})

export default connect(null, mapDispatchToProps)(Transaction)
