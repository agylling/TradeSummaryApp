import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {ShareSummary} from './Stock'
import Transaction from './Transaction'
import { FaArrowDown } from 'react-icons/fa'
import Stock from './Stock'
import { HandleTransaction } from './DataSummary'
import { setSortFilter } from '../actions'
import { Container, Row, Col } from 'react-bootstrap';
import StockBuySell from './graphs/StockBuySell';

var newSummary;

const renderTransactionsTable = (setFilter, name, transactions) => {
  var summaryCells = [];
  for(var entry of transactions){
    if(entry.stockname === name){
      summaryCells.push(entry);
    }
  }
  if( summaryCells === [] ){
    return ( null );
  }
  for(var entry of summaryCells){
    if(entry.included){
      HandleTransaction(newSummary, entry);
    }
  }
  newSummary.getProfits();
  newSummary.roundDecimals();
  console.log(newSummary);
  //setSummary(newSummary);
  return(
    <table className="centering">
      <thead>
          <tr>
          <th> Included </th>
          <th className="sort" onClick={() => setFilter("date")}> <FaArrowDown/> Date </th>
          <th> Account </th>
          <th> Transactiontype </th>
          <th> Name  </th>
          <th> Amount </th>
          <th> Price </th>
          <th> Total </th>
          <th> Brokerage </th>
          <th> Currency </th>
          <th> Id </th>
        </tr>
      </thead>
      <tbody>
        {summaryCells.map(item =>
          <Transaction
            {...item}
          />
        )}
      </tbody>
    </table>
  )
}

const renderSummaryTable = (name) => {
  return (
    <table className="centering">
      <thead>
        <tr>
          <th>Name</th>
          <th>Bought</th>
          <th>@avg</th>
          <th>Total</th>
          <th>Sold</th>
          <th>@avg</th>
          <th>Total</th>
          <th>Dividents</th>
          <th>Brokerage</th>
          <th>Profit</th>
        </tr>
      </thead>
      <tbody>
        <ShareSummary {...newSummary}/>
      </tbody>
    </table>
  );
};

const StockPage = ({setFilter, name, summaries, transactions, dispatch}) => {
  newSummary = new Stock(name);
  return(
    <Container>
    <Row>
        <Container className="al-itemsCenter centering">
          <Col md="auto"> <StockBuySell/> </Col>
          <Col md="auto"> {renderSummaryTable(name)} </Col>
        </Container>
    </Row>
      <Container>
          <br/><br/>
          {renderTransactionsTable(setFilter, name, transactions)}
      </Container>
    </Container>
  )
}

StockPage.propTypes = {
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
  name: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired
}


const mapStateToProps = (state) => ({
  summaries: state.TransactionsStore.summaries,
  transactions: state.TransactionsStore.transactions,
  name: state.TransactionsStore.stockPage
})

const mapDispatchToProps = dispatch => ({
  setFilter: filter => dispatch(setSortFilter(filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(StockPage)
