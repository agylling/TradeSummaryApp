import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {FaCoins, FaEllipsisH} from 'react-icons/fa'
import {setStockpage} from '../actions'
import {Link} from 'react-router-dom'


const renderWindows = (entries, setStockpage) => {
  /*
  return (
    <div className="centering inlineBlock StockSummaryWindow SumWinProfit">
      <div className="rubricArea"> <h3> ATLA B </h3> </div>
      <hr className="sumAreaDivider"></hr>
      <div className="profitArea">
        <div className="inlineBlock">
          <p> Profit  <FaCoins className="sumWindowCoins"/></p>
        </div>
      </div>
    </div>
  ) */
  return(
    entries.map(entry => {
      var divClass =  parseFloat(entry.profit) >= 0 ? "SumWinProfit" : "SumLossProfit";
      var pColor = parseFloat(entry.profit) >= 0 ? "greenText" : "redText";
        return (
          <div className={"centering inlineBlock StockSummaryWindow " + divClass}>
            <div className="rubricArea"> <h3> {entry.name} </h3> </div>
            <hr className="sumAreaDivider"></hr>
            <div className="profitArea">
              <div className="inlineBlock">
                <p className={pColor}> {entry.profit}  <FaCoins className="sumWindowCoins"/></p>
              </div>
              <br/>
              <Link onClick={() => setStockpage(entry.name)} to="/StockPage">
                <FaEllipsisH className="moreButton"/>
              </Link>
            </div>
          </div>
        )
    })
  )
};

const StockSummaryWindows = ({summaries, setStockpage, dispatch}) => {
  return (
    <div>
      {renderWindows(summaries, setStockpage)}
    </div>
  )
}

StockSummaryWindows.propTypes = {
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
  }).isRequired).isRequired,
  setStockpage: PropTypes.func.isRequired
}

const getSummaries = (summaries) =>{
  return (
    [...summaries].sort((a,b) =>{
      if(parseFloat(a["profit"]) < parseFloat(b["profit"])){
        return 1;
      }else if(parseFloat(a["profit"]) > parseFloat(b["profit"])){
        return -1;
      }else{
        return 0;
      }
  })
  )
}

const mapStateToProps = (state) => ({
  summaries: getSummaries(state.TransactionsStore.summaries)
})

const mapDispatchToProps = (dispatch) => ({
  setStockpage: (name) => dispatch(setStockpage(name))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StockSummaryWindows)
