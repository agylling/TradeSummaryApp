import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap';
import StockBuySell from './graphs/StockBuySell';
import DividentBar from './graphs/DividentBar';
import DataSummary from './DataSummary';
import TransactionList from './TransactionList'


const StockPage = ({name, dispatch}) => {
  return(
    <Container className={"fullScreenWidth"}>
      <Row>
        <Col lg={5} md={12} sm={12}> 
          <Col> <DataSummary name={name}/></Col>
          <Col md="auto"> <StockBuySell/> </Col>
          <Col md="auto"> <DividentBar/> </Col>
        </Col>
        <Col lg={7} md={12} sm={12}> 
          <TransactionList name={name}/>
        </Col>
      </Row>
    </Container>
  )
}

StockPage.propTypes = {
  name: PropTypes.string.isRequired
}


const mapStateToProps = (state) => ({
  name: state.TransactionsStore.stockPage
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(StockPage)
