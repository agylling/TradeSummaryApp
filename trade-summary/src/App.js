import React from 'react';
import './App.css';
import FileEntry from './components/FileEntry'
import TransactionList from './components/TransactionList'

function App() {
  return (
    <div className="App">
      <FileEntry />
      <TransactionList />
    </div>
  );
}

export default App;
