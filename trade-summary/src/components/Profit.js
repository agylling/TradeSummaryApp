import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Profit = ({profit, renderData, dispatch}) => {
  if(renderData === false){
    return (null);
  }
  return (
  <h2> Total Profit: {profit} </h2>
  )
}

Profit.propTypes = {
  profit: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
  profit: (state.TransactionsStore.profit.toFixed(2)),
  renderData: state.TransactionsStore.renderData
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Profit)
