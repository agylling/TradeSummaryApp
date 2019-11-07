import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {VictoryChart, VictoryLegend, VictoryStack, VictoryLine, VictoryBar, Bar, VictoryLabel, VictoryAxis, VictoryScatter, VictoryGroup, VictoryTooltip} from 'victory'
import { Container, Row, Col } from 'react-bootstrap';

const StockBuySell = ({transactions, stockPage, dispatch}) => {
  var selectedObject = transactions.all[0] != null ? transactions.all[0] : {label: ""};
  return (
        <Col lg="8">
          <VictoryChart width={800} height={500}>
          <VictoryLegend x={170} y={10}
              centerTitle
              orientation="horizontal"
              gutter={20}
              style={{ border: { stroke: "black" }, title: {fontSize: 20 } }}
              data={[
                { name: "Buy", symbol: { fill: "#4CAF50" } },
                { name: "Sell", symbol: { fill: "#BB1313" } }
              ]}
            />
            <VictoryScatter
                    data={transactions.all}
                    animate={{
                      duration: 500,
                      onLoad: { duration: 1000 }
                    }}
                    style={{
                      data: {fill: ({ datum }) => datum.fill},
                      labels: {fill: "black"}
                    }}
                    labelComponent={
                      <VictoryTooltip
                        style={{
                           fontSize: 5,
                        }}
                        constrainToVisibleArea={true}
                        pointerOrientation="left"
                        cornerRadius={0}
                        centerOffset={{x:0, y:0}}
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
                             text={({datum}) => datum.label}
                           />
                        }
                      />
                    }
              />
              <VictoryLine
                data={transactions.buy}
                style={
                  {
                    data: {stroke: "#4CAF50"}
                  }
                }
              />
              <VictoryLine
                data={transactions.sell}
                style={
                  {
                    data: {stroke: "#BB1313"}
                  }
                }
              />
              <VictoryAxis dependentAxis
                orientation="left"
              />
              <VictoryAxis
                orientation="bottom"
                tickCount={2}
                tickValues={[transactions.all[0], transactions.all[transactions.length-1]]}
              />
          </VictoryChart>
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
  var stockTransactions = [];
  var buyTransactions = [];
  var sellTransactions = [];
  for(var entry of transactions){
    if(entry.stockname === stockPage && entry.included === true){
      var fillColor = entry.transactiontype === ("Köp" || "Utdelning") ? "#4CAF50" : "#BB1313"
      stockTransactions.push({x: entry.date, y: parseFloat(entry.price), label: JSON.stringify(entry,null,"\n"), fill: fillColor, index: entry.index });
      if(fillColor == "#4CAF50"){
        buyTransactions.push({x: entry.date, y: parseFloat(entry.price), fill: fillColor, index: entry.index})
      }else{
        sellTransactions.push({x: entry.date, y: parseFloat(entry.price), fill: fillColor, index: entry.index})
      }
    }
  }
  // TODO: Sort by Date Ascending order. Doesnt work yet, think it needs to compare date object not string
  stockTransactions.sort((a,b) => {
      if(Date.parse(a.x) < Date.parse(b.x)){
        return -1;
      }else if(Date.parse(a.x) > Date.parse(b.x)){
        return 1;
      }else{
        return 0;
      }
  })
  return {all: stockTransactions, buy: buyTransactions, sell: sellTransactions};
}


const mapStateToProps = (state) => ({
  transactions: getTransactions(state.TransactionsStore.transactions, state.TransactionsStore.stockPage),
  stockPage: state.TransactionsStore.stockPage
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(StockBuySell)
