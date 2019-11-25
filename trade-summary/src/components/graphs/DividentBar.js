import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {VictoryChart, VictoryBar, Bar, VictoryLabel, VictoryAxis, VictoryTooltip} from 'victory'

const DividentBar = ({transactions, dividents, dispatch}) => {
  var DividentSummary=[{x: "dividents",y: dividents, fill: "#4CAF50"}];
  return (
        <div className="centering overAllChart">
        <VictoryChart>
            <VictoryBar
            animate={{
                duration: 2000,
                onLoad: { duration: 1000 }
            }}
            
            dataComponents={
                <Bar events={{onMouseOver: () => console.log("mouseover")}}/>
            }
            style={{
                data: {fill: ({ datum }) => datum.fill, width: 200, height: 400},
            }}
            data={DividentSummary}
            labels={({datum}) => datum.y}
            labelComponent={
                <VictoryLabel style={{
                    fontSize: 50, fill:"black"    
                }} 
                textAnchor="middle" verticalAnchor="end"
                dy={0}
                />
            }
            />
            <VictoryAxis  style={{tickLabels: {fontSize: 25, padding :5}}}/>
            <VictoryAxis tickFormat={() => ''}/>
        </VictoryChart>
        </div>
  );
}

DividentBar.propTypes = {
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
    dividents: PropTypes.number.isRequired,
    addSummary: PropTypes.func.isRequired
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
  var index = 0;
  for(var entry of tmp){
    if(entry.name === name && entry.transactiontype === "Utdelning"){
      newTransactions.push(entry);
    }
  }
  return newTransactions;
}

const getSummary = (summaries, name) => {
    var result = 0;
    for(var entry of summaries){
        if(entry.name === name){
            return entry.divident;
        }
    }
    return 0; // No summary with the name we are looking for found 
}

const mapStateToProps = (state) => ({
  transactions: getTransactions(state.TransactionsStore.transactions, state.TransactionsStore.stockPage),
  dividents: getSummary(state.TransactionsStore.summaries, state.TransactionsStore.stockPage)
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(DividentBar)
