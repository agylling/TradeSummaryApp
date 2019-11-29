import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {FaCoins, FaEllipsisH} from 'react-icons/fa'
import {setStockpage} from '../actions'
import {Link} from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';

const extraInfo = (entry, extraInfo) => {
  return (
    <Row>
      <Col> <p> B: {entry.sharesBought} @ {entry.avgBought} </p> </Col>
      <Col> <p> S: {entry.sharesSold} @ {parseFloat(parseFloat(entry.sold)/parseFloat(entry.sharesSold)).toFixed(2)} </p> </Col>
      
    </Row>
  )
}

const renderWindows = (entries, setStockpage) => {
  return(
    entries.map(entry => {
      var divClass =  parseFloat(entry.profit) >= 0 ? "SumWinProfit" : "SumLossProfit";
      var pColor = parseFloat(entry.profit) >= 0 ? "greenText" : "redText";
        return (
          <Container className={"centering rubricArea inlineBlock StockSummaryWindow " + divClass}>
            <Row>
              <Col> <p> {entry.name} </p> </Col>
              <Col>
                <p className={pColor}> {entry.profit}  <FaCoins className="sumWindowCoins"/></p>
              </Col>
              <Col>
                <Link className="moreButton" onClick={() => setStockpage(entry.name)} to="/StockPage">
                  <FaEllipsisH className="moreButton"/>
                </Link>
              </Col>
            </Row>
            <div id={entry.name}>
             {extraInfo(entry)}
            </div>
          </Container>
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
