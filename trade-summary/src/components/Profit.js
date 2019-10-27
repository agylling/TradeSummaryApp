import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Profit = ({profit, dispatch}) => {
  return (
  <h2> Total Profit: {profit} </h2>
  )
}

const mapStateToProps = state => ({
  profit: (state.TransactionsStore.profit)
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Profit)
