import React from 'react'
import TransactionList from './TransactionList'
import DataSummary from './DataSummary'

const DataTables = () => {
  return(
    <div>
      <DataSummary/>
      <TransactionList/>
    </div>
  )
}

export default DataTables
