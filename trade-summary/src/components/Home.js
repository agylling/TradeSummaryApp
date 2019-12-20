import React from 'react'
import StockSummaryWindows from './StockSumWindows'
import OverallSummary from './graphs/OverallSummary'
import FileEntry from './FileEntry'
import Profit from './Profit'
import DataSummary from './DataSummary'
import {Container, Row, Col} from 'react-bootstrap'
import InvestedMoney from './graphs/InvestedMoney'
import PieSummary from './graphs/PieSummary'

const Home = () => {
  return(
    <Container>
      <Container>
        <Col className={"centering"}>
          <Profit/>
        </Col>
      </Container>
      <Container>
        <Row>
          <Col>
            <FileEntry/>
          </Col>
        </Row>
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
            <p className="GraphSummaries underLine"> Paid </p>
            <PieSummary dataKey={"paid"}/>
          </Col>
          <Col>
            <p className="GraphSummaries underLine"> Sold </p>
            <PieSummary dataKey={"sold"}/>
          </Col>
        </Row>
      </Container>
      <Container>  
        <Row>
          <Col lg={12} md={12} sd={12}>
             <StockSummaryWindows />
          </Col>
        </Row>
      </Container>
      <Container>
        <DataSummary name="all"/>
      </Container>
    </Container>
  )
}

export default Home
