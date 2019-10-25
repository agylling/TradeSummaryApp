import React from 'react';
import './App.css';
import FileEntry from './components/FileEntry'
import TransactionList from './components/TransactionList'
import DataSummary from './components/DataSummary'

function App() {
  return (
    <div className="App">
      <FileEntry />
      <TransactionList />
      <DataSummary />
    </div>
  );
}

export default App;
