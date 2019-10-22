export const include = (id, date, include) => ({
  type: "INCLUDE",
  id: id,
  date: date,
  included: include
});

export const addTransaction = (date, account, transactionType, stockname, amount, price, total, brokerage, currency, id) => (
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
  included: true
  }
);
