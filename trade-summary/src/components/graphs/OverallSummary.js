import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Label, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Brush, BarChart, Bar} from 'recharts';
import { Container } from 'react-bootstrap'

const OverallSummary = ({summaries, renderData, dispatch}) => {
  if(renderData === false){
    return (null);
  }
  var averageTrade = 500;
  var totalNonZeroTrades = 0;
  for(var entry of summaries){
    if(parseFloat(entry.profit) > 0 || parseFloat(entry.profit) < 0){
      averageTrade += parseFloat(entry.profit);
      totalNonZeroTrades++;
    }
  }
  averageTrade = averageTrade/totalNonZeroTrades;
  return (
    <Container>
      <ResponsiveContainer width="100%" aspect={4/3}>
        <BarChart 
          data={summaries} 
          layout="vertical"
          barCategoryGap={1}
          barGap={1}
        >
          <XAxis type="number">
            <Label value="Total" offset={0} position="insideBottom" />
          </XAxis>
          <YAxis dataKey="x" type="category" tick={false} hide={false}>
            <Label value="Stock" offset={0} position="insideLeft" />
          </YAxis>
          {summaries.length > 0 && <Brush />}
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Bar name="profit" maxBarSize={10} dataKey="y"/>
        </BarChart>
      </ResponsiveContainer>
      <br></br>
    </Container>
  );
}

OverallSummary.propTypes = {
  renderData: PropTypes.bool.isRequired
}

const getSummaries = (summaries) =>{
  var tmp = [...summaries].sort((a,b) =>{
      if(parseFloat(a["profit"]) < parseFloat(b["profit"])){
        return 1;
      }else if(parseFloat(a["profit"]) > parseFloat(b["profit"])){
        return -1;
      }else{
        return 0;
      }
    })
  var newSummaries = [];
  for(var entry of tmp){
    if(entry.profit === 0){
      continue
    }
    var fillColor = "#4CAF50"
    if(entry.profit < 0) {
      fillColor = "#BB1313"
    }
    newSummaries.push({x: entry.name, y: Math.abs(entry.profit), fill: fillColor})
    entry = null;
  }
  tmp = null;
  return newSummaries;
}

const mapStateToProps = (state) => ({
  summaries: getSummaries(state.TransactionsStore.summaries),
  renderData: state.TransactionsStore.renderData
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(OverallSummary)
