const defaultState = {
  transactions: []
}

const transactionsReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'INCLUDE':
      console.log("IN INCLUDE")
      return state.map(transaction =>
        (transaction.id === action.id && transaction.name === action.name)
        ? {...transaction, included: !action.include}
        : transaction
      );
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [
          ...state.transactions,
          {
            date: action.date,
            account: action.account,
            transactiontype: action.transactiontype,
            stockname: action.stockname,
            amount: action.amount,
            price: action.price,
            total: action.total,
            brokerage: action.brokerage,
            currency: action.currency,
            id: action.id,
            included: true
          }
        ]
      };
    default:
      return state;
  }
}

export default transactionsReducer
