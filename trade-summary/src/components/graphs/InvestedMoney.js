import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {VictoryChart, VictoryLegend, VictoryLine, VictoryLabel, VictoryAxis, VictoryScatter, VictoryTooltip} from 'victory'
import {Col } from 'react-bootstrap';

const InvestedMoney = ({transactions, dispatch}) => {
  return (
    <Col lg="8">
        <VictoryChart>
        <VictoryLegend x={170} y={10}
            centerTitle
            orientation="horizontal"
            gutter={20}
            style={{ border: { stroke: "black" }, title: {fontSize: 20 } }}
            data={[
            { name: "Deposit", symbol: { fill: "#4CAF50" } },
            { name: "Withdrawal", symbol: { fill: "#BB1313" } }
            ]}
        />
        <VictoryScatter
                data={transactions}
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
            <VictoryAxis dependentAxis
            orientation="left"
            />
            <VictoryAxis
            orientation="bottom"
            tickCount={2}
            tickValues={[transactions[0], transactions[transactions.length-1]]}
            />
        </VictoryChart>
    </Col>
  );
}

InvestedMoney.propTypes = {
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
    }).isRequired).isRequired
  }

const getTransactions = (transactions, name) =>{
  var tmp = [...transactions].sort((a,b) =>{
      if(new Date(a["date"]) < new Date(parseFloat(b["date"]))){
        return 1;
      }else if(new Date(a["date"]) > new Date(b["date"])){
        return -1;
      }else{
        return 0;
      }
    })
  var newTransactions = [];
  for(var entry of tmp){
    if(entry.transactiontype === "Insättning" || entry.transactiontype === "Uttag" ){
      var fillColor = entry.transactiontype === ("Insättning" || "Uttag") ? "#4CAF50" : "#BB1313";
      newTransactions.push({x: entry.date, y: entry.amount, fill: fillColor});
    }
  }
  return newTransactions;
}

const mapStateToProps = (state) => ({
  transactions: getTransactions(state.TransactionsStore.transactions)
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(InvestedMoney)
