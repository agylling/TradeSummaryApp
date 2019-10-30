import { createSelector } from 'reselect'

const getOrderFilter = state => state.sortFilter
const getTransactions = state => state.TransactionsStore.transactions

export const getSortedTransactions = createSelector(
  [getOrderFilter, getTransactions],
  (sortFilter, TransactionsStore.transactions) =>{
      switch(sortFilter) {

      }
  }
)
