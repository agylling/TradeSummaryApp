import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {VictoryChart, VictoryLegend, VictoryLine, VictoryLabel, VictoryAxis, VictoryScatter, VictoryTooltip} from 'victory'
import {ScatterChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Scatter} from 'recharts';
import {Col } from 'react-bootstrap';

const StockBuySell = ({transactions, stockPage, dispatch}) => {

  return (
        <Col lg="8">
          <ScatterChart width={730} height={450}
           margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" name="index" domain={['dataMin', 'dataMax']}/>
            <YAxis dataKey="y" name="price"/>
            <Tooltip />
            <Legend />
            <Scatter name="Buy / Dividents" data={transactions.buys} fill="#4CAF50" />
            <Scatter name="Sell" data={transactions.sells} fill="#BB1313" />
          </ScatterChart>
        </Col>
  );
}

StockBuySell.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string.isRequired,
    account: PropTypes.string.isRequired,
    transactiontype: PropTypes.string.isRequired,
    stockname: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    total: PropTypes.string.isRequired,
    brokerage: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    included: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired
  }).isRequired).isRequired,
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
