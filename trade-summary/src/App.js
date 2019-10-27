import React from 'react';
import './App.css';
import FileEntry from './components/FileEntry'
import TransactionList from './components/TransactionList'
import DataSummary from './components/DataSummary'
import Profit from './components/Profit'

function App() {
  return (
    <div className="App">
      <Profit/>
      <FileEntry />
      <TransactionList />
      <DataSummary />
    </div>
  );
}

export default App;
