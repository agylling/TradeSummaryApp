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

export const addSummary = (entries) => (
  {
    type: "ADD_SUMMARY",
    payload: entries
  }
)

export const setProfit = (profit) => ({
  type: "SET_PROFIT",
  payload: profit
})
