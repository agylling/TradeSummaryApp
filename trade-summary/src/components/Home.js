import React from 'react'
import StockSummaryWindows from './StockSumWindows'
import OverallSummary from './graphs/OverallSummary'
import FileEntry from './FileEntry'
import Profit from './Profit'
import DataSummary from './DataSummary'


const Home = () => {
  return(
    <div>
      <FileEntry />
      <Profit/>
      <OverallSummary/>
      <StockSummaryWindows />
      <DataSummary/>
    </div>
  )
}

export default Home
