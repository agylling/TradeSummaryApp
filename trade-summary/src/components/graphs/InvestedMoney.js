import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {VictoryChart,VictoryGroup, VictoryLegend, VictoryLine, VictoryLabel, VictoryAxis, VictoryArea, VictoryScatter, VictoryTooltip} from 'victory'
import {Col } from 'react-bootstrap';

const InvestedMoney = ({transactions,renderData, dispatch}) => {
  if(renderData === false){
    return (null);
  }
  return (
    <Col lg="8">
        <VictoryChart>
        <VictoryLegend x={170} y={10}
                centerTitle
                orientation="horizontal"
                gutter={20}
                style={{ title: {fontSize: 20 } }}
                data={[
                { name: "Deposited: " + transactions.deposited, symbol: { fill: "#4CAF50" } },
                { name: "Withrewed: " + transactions.withrewed, symbol: { fill: "#BB1313" } }
                ]}
            />
          <VictoryGroup
            style={{
              data: { strokeWidth: 2, fillOpacity: 0.4 }
            }}
          >
            <VictoryArea
                    data={transactions.deposits}
                    animate={{
                        duration: 500,
                        onLoad: { duration: 1000 }
                    }}
                    style={{
                        data: {fill: "#4CAF50", stroke:"#4CAF52"},
                        labels: {fill: "black"}
                    }}
            />
            <VictoryArea
                    data={transactions.withdrawals}
                    animate={{
                        duration: 500,
                        onLoad: { duration: 1000 }
                    }}
                    style={{
                        data: {fill: "#4CAF50", stroke: "#BB1313"},
                        labels: {fill: "black"}
                    }}
            />
            <VictoryAxis dependentAxis
            orientation="left"
            />
            <VictoryAxis
              orientation="bottom"
              tickCount={2}
              tickValues={[transactions.all[0], transactions.all[transactions.length-1]]}
            />            
          </VictoryGroup>
      </VictoryChart>
    </Col>
  );
}

InvestedMoney.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
      x: PropTypes.string.isRequired,
      y: PropTypes.number.isRequired,
      fill: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    }).isRequired).isRequired,
    renderData: PropTypes.bool.isRequired
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
  var deposited = 0;
  var withrewed = 0;
  var deposits = [];
  var withdrawals = [];
  var all = [];
  for(var entry of tmp){
    if(entry.transactiontype === "Insättning" || entry.transactiontype === "Uttag" ){
      if(entry.transactiontype === "Insättning"){
        deposits.push({x: entry.date, y: parseFloat(entry.total), fill: "#4CAF50", label:""});
        deposited += parseFloat(entry.total);
      }else{
        withdrawals.push({x: entry.date, y: parseFloat(entry.total), fill: "#BB1313", label:""});
        withrewed += parseFloat(entry.total);
      }
      all.push({x: entry.date, y: parseFloat(entry.total), fill: "#000000", label:""})
    }
  }
  return {deposits: deposits, withdrawals: withdrawals, all:all, deposited: deposited, withrewed: withrewed};
}

const mapStateToProps = (state) => ({
  transactions: getTransactions(state.TransactionsStore.transactions),
  renderData: state.TransactionsStore.renderData
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(InvestedMoney)
