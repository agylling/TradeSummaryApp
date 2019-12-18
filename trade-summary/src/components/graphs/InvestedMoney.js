import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import {ResponsiveContainer, Label, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Brush, BarChart, Bar} from 'recharts';
import {Container } from 'react-bootstrap';

const InvestedMoney = ({transactions,renderData, dispatch}) => {
  if(renderData === false){
    return (null);
  }
  return (
    <Container>
      <ResponsiveContainer width="100%" aspect={4/3}>
        <BarChart data={transactions}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <XAxis dataKey="x">
            <Label value="Transactions over time" offset={0} position="insideBottom" />
          </XAxis>
          <YAxis />
          <Brush/>
          <Legend verticalAlign="top" height={36}/>
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Bar maxBarSize={10} name="Withrewed"  dataKey="withrewed" fill="#BB1313" />
          <Bar maxBarSize={10} name="Deposited"  dataKey="deposited" fill="#4CAF50" />
        </BarChart>
      </ResponsiveContainer>
      <br></br>
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
