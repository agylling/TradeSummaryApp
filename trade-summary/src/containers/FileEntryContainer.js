import React from 'react'
import { connect } from 'react-redux'
import { addTransaction } from "../actions"
import FileEntry from "../components/FileEntry"

const mapStateToProps = state => ({
})

const mapDispatchToProps = (dispatch) => ({
  addTransaction: (date, account, type, stockname, amount, price, total, brokerage, currency, id) => {dispatch(addTransaction(date, account, type, stockname, amount, price, total, brokerage, currency, id))}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileEntry)
