import React from 'react'
import StockSummaryWindows from './StockSumWindows'
import OverallSummary from './graphs/OverallSummary'
import {Container, Row, Col} from 'react-bootstrap'
import InvestedMoney from './graphs/InvestedMoney'
import PieSummary from './graphs/PieSummary'

const Graphs = () => {
  return(
    <Container>
        <Row>
            <Col>
            <OverallSummary/>
            </Col>
            <Col>
            <InvestedMoney/>          
            </Col>
        </Row>
        <Row>
            <Col>
            <p className="GraphSummaries underLine"> Top 10 Bought </p>
            <PieSummary dataKey={"paid"}/>
            </Col>
            <Col>
            <p className="GraphSummaries underLine"> Top 10 Sold </p>
            <PieSummary dataKey={"sold"}/>
            </Col>
    </Row>
    </Container>
  )
}

export default Graphs
