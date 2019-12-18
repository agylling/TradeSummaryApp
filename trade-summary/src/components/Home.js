import React from 'react'
import StockSummaryWindows from './StockSumWindows'
import OverallSummary from './graphs/OverallSummary'
import FileEntry from './FileEntry'
import Profit from './Profit'
import DataSummary from './DataSummary'
import {Container, Row, Col} from 'react-bootstrap'
import InvestedMoney from './graphs/InvestedMoney'

const Home = () => {
  return(
    <Container>
      <Container>
        <Row>
          <Col>
            <FileEntry/>
          </Col>
        </Row>
        <Row>
          <Col lg={8} md={8} sd={8}>
            <OverallSummary/>
          </Col>
          <Col className={"centering"}>
            <Profit/>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row >
          <Col lg={10} md={10} sd={10}>
            <InvestedMoney/>          
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
