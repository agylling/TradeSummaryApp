import React from 'react'
import TransactionList from './TransactionList'
import DataSummary from './DataSummary'
import Profit from './Profit'

const DataTables = () => {
  return(
    <div>
      <Profit/>
      <DataSummary/>
      <TransactionList/>
    </div>
  )
}

export default DataTables
