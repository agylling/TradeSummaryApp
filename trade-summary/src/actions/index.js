export const include = (index, date, include) => (
  {
  type: "INCLUDE",
  index: index,
  date: date,
  included: include}
);

export const addTransaction = (date, account, transactionType, stockname, amount, price, total, brokerage, currency, id, index) => (
  {
  type: "ADD_TRANSACTION",
  date: date,
  account: account,
  transactiontype: transactionType,
  stockname: stockname,
  amount: amount,
  price: price,
  total: total,
  brokerage: brokerage,
  currency: currency,
  id: id,
  included: true,
  index: index
  }
);

export const setTransactions = (data) => ({
  type: "SET_TRANSACTIONS",
  payload: data
})

export const removeTransactions = (data) => ({
  type: "REMOVE_TRANSACTIONS"
})
export const addSummary = (entries) => (
  {
    type: "ADD_SUMMARY",
    payload: entries
  }
)

export const setSummary = (summary) => (
  {
    type: "SET_SUMMARY",
    payload: summary
  }
)

export const setProfit = (profit) => ({
  type: "SET_PROFIT",
  payload: profit
})

export const setSortFilter = (order) => ({
  type: "SORT_FILTER",
  payload: order
})

export const setPercentage = (percent) => ({
  type: "SET_PERCENTAGE",
  payload: percent
})

export const setStockpage = (name) => ({
  type: "SEE_STOCK_PAGE",
  payload: name
})

export const showExtraStockInfo = (name) => ({
  type: "SHOW_EXTRA_STOCK_INFO",
  payload: name
})

export const renderData = () => ({
  type: "RENDER_DATA"
})
