import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Label, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Brush, BarChart, Bar} from 'recharts';
import { Container,Row, Col } from 'react-bootstrap'

const OverallSummary = ({summaries, renderData, dispatch}) => {
  if(renderData === false){
    return (null);
  }
  var averageTrade = 0;
  var averageNegative = 0;
  var totalLosses = 0;
  var averagePositive = 0;
  var totalProfits = 0;
  var totalNonZeroTrades = 0;
  for(var entry of summaries){
    if(parseFloat(entry.y) > 0 || parseFloat(entry.y) < 0){
      averageTrade += parseFloat(entry.y);
      totalNonZeroTrades++;
      if(entry.fill === "#BB1313"){
        averageNegative -= parseFloat(entry.y);
        totalLosses++;
      }else{
        averagePositive += parseFloat(entry.y);
        totalProfits++;
      }
    }
  }

  averageTrade = averageTrade/totalNonZeroTrades;
  averagePositive /= totalProfits;
  averageNegative /= totalLosses;

  return (
    <Container>
      <Row>
        <ResponsiveContainer width="100%" aspect={4/3}>
          <BarChart 
            data={summaries} 
            layout="horizontal"
            barCategoryGap={1}
            barGap={1}
          >
            <XAxis ataKey="x" type="category" tick={false} hide={false}>
              <Label value="Stock" offset={0} position="insideBottom" />
            </XAxis>
            <YAxis  type="number">
              <Label value="Total" offset={0} position="insideLeft" />
            </YAxis>
            {summaries.length > 0 && <Brush />}
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Bar name="Total" maxBarSize={10} dataKey="y"/>
          </BarChart>
        </ResponsiveContainer>
      </Row>
      <br></br>
      <Row>
        <Col><p className="GraphSummaries"> Total Mean Trade: {averageTrade.toFixed(2)}  </p></Col>
      </Row>
      <Row>
        <Col>
          <Row><p className="GraphSummaries loss"> Total Losses: {totalLosses}  </p></Row>
          <Row><p className="GraphSummaries loss"> Mean Loss: {averageNegative.toFixed(2)}  </p></Row>
        </Col>
        <Col>
          <Row><p className="GraphSummaries profit"> Total Profits: {totalProfits}  </p> </Row>
          <Row><p className="GraphSummaries profit"> Mean Profit: {averagePositive.toFixed(2)}  </p> </Row>
        </Col>
      </Row>
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
