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
        <Row>
          <Col>
            <FileEntry/>
          </Col>
        </Row>
        <Col className={"centering"}>
          <Profit/>
        </Col>
      </Container>
      <Container>  
        <Row>
          <Col lg={12} md={12} sd={12}>
             <StockSummaryWindows />
          </Col>
        </Row>
      </Container>
      <Container>
        <DataSummary name="all" home={true}/>
      </Container>
    </Container>
  )
}

export default Home
