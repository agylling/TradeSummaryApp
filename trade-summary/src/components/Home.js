import React from 'react'
import StockSummaryWindows from './StockSumWindows'
import OverallSummary from './graphs/OverallSummary'
import FileEntry from './FileEntry'
import Profit from './Profit'
import DataSummary from './DataSummary'
import {Container, Row, Col} from 'react-bootstrap'

const Home = () => {
  return(
    <Container>
      <Container>
        <Row>
          <Col>
          <FileEntry />
          </Col>
        </Row>
        <Row>
          <Col lg={8} md={8} sd={12}>
            <OverallSummary/>
          </Col>
          <Col className={"centering"}>
            <Profit/>
          </Col>
        </Row>
        <Row>
          <Col>
             <StockSummaryWindows />
          </Col>
        </Row>
      </Container>
      <Container>
        <DataSummary name=""/>
      </Container>
    </Container>
  )
}

export default Home
