import React from 'react'
import { connect } from 'react-redux'
import { include } from "../actions"
import TransactionList from "../components/TransactionList"

const getTransactions = (transactions) => {
  console.log("getTransactions: " + transactions)
  return transactions;
}

const mapStateToProps = state => ({
  transactions: getTransactions(state.TransactionsStore.transactions)
})

const mapDispatchToProps = dispatch => ({
  include: id => {dispatch(include(id, true))}
})

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList)
