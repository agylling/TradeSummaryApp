const defaultState = {
  transactions: []
}

const transactionsReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'INCLUDE':
      console.log("IN INCLUDE")
      return {...state, transactions:
        state.transactions.map(transaction =>
        (transaction.index === action.index && transaction.name === action.name)
          ? {...transaction, included: !action.included}
          : transaction
        )
    }
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
            included: true,
            index: action.index
          }
        ]
      };
    default:
      return state;
  }
}

export default transactionsReducer
