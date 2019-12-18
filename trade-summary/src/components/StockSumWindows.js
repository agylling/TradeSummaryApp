import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {FaCoins, FaAngleUp, FaAngleDown, FaListUl} from 'react-icons/fa'
import {setStockpage, showExtraStockInfo} from '../actions'
import {Link} from 'react-router-dom'
import { Container, Row, Col, } from 'react-bootstrap';

const extraInfo = (entry, showExtraStock) => {
  if(showExtraStock === entry.name){
    return (
      <Row>
        <Col> <p> B: {entry.sharesBought} @ {entry.avgBought} </p> </Col>
        <Col> <p> S: {entry.sharesSold} @ {parseFloat(parseFloat(entry.sold)/parseFloat(entry.sharesSold)).toFixed(2)} </p> </Col>
        <Col> <p> Dividents: {entry.divident} </p> </Col>
      </Row>
    )
  }else{
    return null
  }
}


const renderWindows = (entries, setStockpage, setShowExtraStock, showExtraStock) => {
  return(
    entries.map(entry => {
      const arrowIcon = showExtraStock === entry.name ? 
        <FaAngleUp onClick={() => setShowExtraStock("") }></FaAngleUp> : 
        <FaAngleDown onClick={() => setShowExtraStock(entry.name) }></FaAngleDown>;
      var divClass =  parseFloat(entry.profit) >= 0 ? "SumWinProfit" : "SumLossProfit";
      var pColor = parseFloat(entry.profit) >= 0 ? "greenText" : "redText";
        return (
          <Container key={entry.name} className={"centering rubricArea inlineBlock StockSummaryWindow " + divClass}>
            <Row>
              <Col> <p> {entry.name} </p> </Col>
              <Col>
                <p className={pColor}> {entry.profit}  <FaCoins className="sumWindowCoins"/></p>
              </Col>
              <Col>
                {arrowIcon}
                <Link className="moreButton" onClick={() => setStockpage(entry.name)} to="/StockPage">
                  <FaListUl className="moreButton"/>
                </Link>
              </Col>
            </Row>
              {extraInfo(entry, showExtraStock)}
          </Container>
        )
    })
  )
};

const StockSummaryWindows = ({summaries, setStockpage, setShowExtraStock, showExtraStock, renderData, dispatch}) => {
  if(renderData === false){
    return (null);
  }
  return (
    <Container>
      {renderWindows(summaries, setStockpage, setShowExtraStock, showExtraStock)}
    </Container>
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
  setStockpage: PropTypes.func.isRequired,
  setShowExtraStock: PropTypes.func.isRequired,
  showExtraStock: PropTypes.string.isRequired,
  renderData: PropTypes.bool.isRequired
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
  summaries: getSummaries(state.TransactionsStore.summaries),
  showExtraStock: state.TransactionsStore.showExtraStock,
  renderData: state.TransactionsStore.renderData
})

const mapDispatchToProps = (dispatch) => ({
  setStockpage: (name) => dispatch(setStockpage(name)),
  setShowExtraStock: (name) => dispatch(showExtraStockInfo(name))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StockSummaryWindows)
