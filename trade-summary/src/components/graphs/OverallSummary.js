import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {VictoryChart, VictoryBar, Bar, VictoryLabel, VictoryAxis, VictoryScatter, VictoryGroup, VictoryTooltip} from 'victory'

const OverallSummary = ({summaries, dispatch}) => {
  var averageTrade = 500;
  var totalNonZeroTrades = 0;
  for(var entry of summaries){
    if(parseFloat(entry.profit) > 0 || parseFloat(entry.profit) < 0){
      averageTrade += parseFloat(entry.profit);
      totalNonZeroTrades++;
    }
  }
  averageTrade = averageTrade/totalNonZeroTrades;
  var averageColor = averageTrade > 0 ? "#4CAF50" : "#BB1313";
  return (
    <div className="centering overAllChart">
      <VictoryChart
        domainPadding={{ x: 10 }}
      >
        <VictoryBar horizontal
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 }
          }}
          barRatio={0.8}
          dataComponents={
            <Bar events={{onMouseOver: () => console.log("mouseover")}}/>
          }
          style={{
            data: {fill: ({ datum }) => datum.fill},
            labels: {fill: "black"}
          }}
          data={summaries}
          labelComponent={
            <VictoryTooltip
              style={{
                 fontSize: 5,
              }}
              constrainToVisibleArea={false}
              pointerOrientation="left"
              cornerRadius={0}
              centerOffset={{x:0, y:-10}}
              flyoutWidth={({datum}) => datum.label.length*5+30}
              labelComponent={
                <VictoryLabel
                   style={{
                      fontSize: 7,
                   }}
                   angle={0}
                   verticalAnchor="middle"
                   textAnchor="middle"
                   dx={0}
                   dy={0}
                   text={({datum}) => datum.label + " : " + datum.y }
                 />
              }
            />
          }
        />
        <VictoryAxis dependentAxis
          style={{
             tickLabels: {fontSize: 10}
          }}
        />
        <VictoryAxis
          style={{ tickLabels: {fill: "none"}}}
        />
      </VictoryChart>
    </div>
  );
}

OverallSummary.propTypes = {
  summaries: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    amountOwned: PropTypes.number.isRequired,
    paid: PropTypes.number.isRequired,
    sharesBought: PropTypes.number.isRequired,
    sold: PropTypes.number.isRequired,
    sharesSold: PropTypes.number.isRequired,
    avgBought: PropTypes.number.isRequired,
    divident: PropTypes.number.isRequired,
    profit: PropTypes.number.isRequired,
    brokerage: PropTypes.number.isRequired
  }).isRequired).isRequired
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
  var index = 0;
  for(var entry of tmp){
    if(entry.profit === 0){
      continue
    }
    var fillColor = "#4CAF50"
    if(entry.profit < 0) {
      fillColor = "#BB1313"
    }
    newSummaries.push({x: index, y: Math.abs(entry.profit), fill: fillColor, label: entry.name})
    entry = null;
    index++;
  }
  tmp = null;
  return newSummaries;
}

const mapStateToProps = (state) => ({
  summaries: getSummaries(state.TransactionsStore.summaries)
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(OverallSummary)
