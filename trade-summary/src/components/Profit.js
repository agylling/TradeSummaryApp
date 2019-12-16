import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Col} from 'react-bootstrap'

const Profit = ({profit, renderData, dispatch}) => {
  if(renderData === false){
    return (null);
  }
  return (
  <Col><p className="TotalProfit"> Total Profit: {profit} </p></Col>
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
