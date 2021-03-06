import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import {ResponsiveContainer, Label, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Brush, BarChart, Bar} from 'recharts';
import {Container, Row, Col } from 'react-bootstrap';

const InvestedMoney = ({transactions,renderData, dispatch}) => {
  if(renderData === false){
    return (null);
  }
  var meanDeposited = 0;
  var countDeposits = 0;
  for(var entry of transactions){
    if(entry.deposited){
      meanDeposited += parseFloat(entry.deposited);
    }else if(entry.witrewed){
      meanDeposited += parseFloat(entry.deposited);
    }
    countDeposits++;
  }
  meanDeposited /= countDeposits;
  return (
    <Container>
      <Row>
        <ResponsiveContainer width="100%" aspect={4/3}>
        <BarChart data={transactions}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <XAxis dataKey="x">
            <Label value="Transactions over time" offset={0} position="insideBottom" />
          </XAxis>
          <YAxis />
          {transactions.length > 0 && <Brush />}
          <Legend verticalAlign="top" height={36}/>
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Bar maxBarSize={10} name="Withrewed"  dataKey="withrewed" fill="#BB1313" />
          <Bar maxBarSize={10} name="Deposited"  dataKey="deposited" fill="#4CAF50" />
        </BarChart>
      </ResponsiveContainer>
      </Row>
      <Row>
        <br></br>
        <Col><p className="GraphSummaries"> Mean Deposits: {meanDeposited.toFixed(2)}  </p></Col>
      </Row>
    </Container>
  );
}

const getTransactions = (transactions, name) =>{
  var tmp = [...transactions].sort((a,b) =>{
      if(new Date(a["date"]) < new Date(parseFloat(b["date"]))){
        return -1;
      }else if(new Date(a["date"]) > new Date(b["date"])){
        return 1;
      }else{
        return 0;
      }
    })
  var all = [];
  for(var entry of tmp){
    if(entry.transactiontype === "Insättning" || entry.transactiontype === "Uttag" ){
      if(entry.transactiontype === "Insättning"){
        all.push({x: entry.date, deposited: parseFloat(entry.total)})
      }else{
        all.push({x: entry.date, withrewed: parseFloat(Math.abs(entry.total))})
      }
    }
  }
  return all;
}

const mapStateToProps = (state) => ({
  transactions: getTransactions(state.TransactionsStore.transactions),
  renderData: state.TransactionsStore.renderData
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(InvestedMoney)
