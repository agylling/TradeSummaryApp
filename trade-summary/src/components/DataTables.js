import React from 'react'
import TransactionList from './TransactionList'
import DataSummary from './DataSummary'
import Profit from './Profit'
import {Container} from 'react-bootstrap'

const DataTables = () => {
  return(
    <Container>
      <Profit/>
      <DataSummary name=""/>
      <TransactionList name=""/>
    </Container>
  )
}

export default DataTables
