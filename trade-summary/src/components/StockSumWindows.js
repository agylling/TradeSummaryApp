import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {FaCoins, FaEllipsisH} from 'react-icons/fa'


const renderWindows = (entries) => {
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
      var divClass =  parseFloat(entry.profit) > 0 ? "SumWinProfit" : "SumLossProfit";
      var pColor = parseFloat(entry.profit) > 0 ? "greenText" : "redText";
        return (
          <div className={"centering inlineBlock StockSummaryWindow " + divClass}>
            <div className="rubricArea"> <h3> {entry.name} </h3> </div>
            <hr className="sumAreaDivider"></hr>
            <div className="profitArea">
              <div className="inlineBlock">
                <p className={pColor}> {entry.profit}  <FaCoins className="sumWindowCoins"/></p>
              </div>
              <br/>
              <FaEllipsisH onClick={() => (console.log("Clicking More"))} className="moreButton"/> 
            </div>
          </div>
        )
    })
  )
};

const StockSummaryWindows = ({summaries, dispatch}) => {
  return (
    <div>
      {renderWindows(summaries)}
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
  }).isRequired).isRequired
}

const mapStateToProps = (state) => ({
  summaries: state.TransactionsStore.summaries
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StockSummaryWindows)
