const defaultState = {
  transactions: [],
  summaries: [],
  profit: 0,
  sortFilter: "date",
  sortOrder: "DESC",
  readPercentage: [{x:1, y: 0},{x:2, y:100}],
  stockPage: "",
  showExtraStock: "", // Decides which stock should render extra information
  renderData: false
}

const transactionsReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'INCLUDE':
      return {...state, transactions:
        state.transactions.map(transaction =>
        (transaction.index === action.index && transaction.name === action.name)
          ? {...transaction, included: !action.included}
          : transaction
        )
    }
    // Add whole chunk of transactions
    case 'ADD_TRANSACTIONS':
      return{
        ...state,
        transactions: action.payload
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
    case 'SET_TRANSACTIONS':
      return {
        ...state,
        transactions: action.payload
      };
    case 'REMOVE_TRANSACTIONS':
      return{
        ...state,
        transactions: [],
        summaries: [],
        sortFilter: "date",
        renderData: false
      }
    case 'ADD_SUMMARY':
      return{
        ...state,
        summaries: action.payload
      };
    case 'SET_SUMMARY':
      return{
        ...state,
        summaries:
         state.summaries.map(summary =>
          (summary.name === action.payload.name)
            ? action.payload
            : summary
          )
      };
    case 'SET_PROFIT':
      return {
        ...state,
        profit: action.payload
      };
    case 'SORT_FILTER':
      return {
        ...state,
        transactions: [...state.transactions].sort((a,b) => {
          var res = 0;
          if(action.payload === state.sortFilter){
            return res;
          }
          else{
            if(state.sortOrder === "DESC"){
              if(a[action.payload] < b[action.payload]) {
                res = -1;
              }
              else if( a[action.payload] > b[action.payload]){
                res = 1;
              }
              return res;
            }else{
              if(a[action.payload] < b[action.payload]) {
                res = 1;
              }
              else if( a[action.payload] > b[action.payload]){
                res = -1;
              }
              return res;
            }
          }
        }),
        sortFilter: action.payload,
        sortOrder: state.sortOrder === "DESC" ? "ASC" : "DESC"
      }
    case 'SET_PERCENTAGE':
      return {
        ...state,
        readPercentage: [
          {x:1, y:parseFloat(action.payload)},
          {x:2, y:parseFloat(1-action.payload)}
        ]
      }
    case 'SEE_STOCK_PAGE':
      return{
        ...state,
        stockPage: action.payload
      }
    case 'SHOW_EXTRA_STOCK_INFO':
      return{
        ...state,
        showExtraStock: action.payload
      }
    case 'RENDER_DATA':
      return{
        ...state,
        renderData: true
      }
    default:
      return state;
  }
}

export default transactionsReducer
