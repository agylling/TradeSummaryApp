import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {ScatterChart,ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Scatter} from 'recharts';
import {Container } from 'react-bootstrap';

const StockBuySell = ({transactions, stockPage, dispatch}) => {

  return (
        <Container>
          <ResponsiveContainer width="100%" aspect={4/3}>
            <ScatterChart>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="x" name="index" domain={['dataMin', 'dataMax']}/>
              <YAxis dataKey="y" name="price"/>
              <Tooltip />
              <Legend />
              <Scatter name="Buy / Dividents" data={transactions.buys} fill="#4CAF50" />
              <Scatter name="Sell" data={transactions.sells} fill="#BB1313" />
            </ScatterChart>
          </ResponsiveContainer>
        </Container>
  );
}

StockBuySell.propTypes = {
  stockPage: PropTypes.string.isRequired
}

const getTransactions = (transactions, stockPage) => {
  var S = [];
  var B = [];
  for(var entry of transactions){
    if(entry.stockname === stockPage && entry.included === true){
      if(entry.transactiontype === "Sälj"){
        S.push({x: entry.date, y: parseFloat(entry.price), index: entry.index})
      }else{
        B.push({x: entry.date, y: parseFloat(entry.price), index: entry.index})
      }
    }
  }
  // TODO: Sort by Date Ascending order. Doesnt work yet, think it needs to compare date object not string
 
  return {buys: B, sells: S};
}


const mapStateToProps = (state) => ({
  transactions: getTransactions(state.TransactionsStore.transactions, state.TransactionsStore.stockPage),
  stockPage: state.TransactionsStore.stockPage
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(StockBuySell)
