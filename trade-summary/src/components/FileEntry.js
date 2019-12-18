import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTransaction, removeTransactions, setPercentage, renderData, addTransactions, addSplits } from '../actions'
import TransactionList from './TransactionList';
import { Container, Row } from 'react-bootstrap';

const fileReader = new FileReader();

const FileEntry = ({addTransaction, removeTransactions, setPercentage, renderData, addTransactions, addSplits, dispatch}) => {

  const handleFileRead = (e) => {
      var transactions = [];
      var splits = [];
      e.preventDefault();
      var content = fileReader.result;
      content = content.replace(/,/g, ".");
      const lines = content.split('\n');
      for(var i = 0; i < lines.length; i++){
        var entry = lines[i].split(';');
        //parseFloat(setPercentage(parseFloat(i)/parseFloat(lines.length)));
        if(i === 0 || i === lines.length-1){
          continue; // First row = headers, last empty
        }
        if(entry[2] === "Split"){
          splits.push({
            date: entry[0],
            account: entry[1],
            transactiontype: entry[2],
            stockname: entry[3],
            amount: entry[4],
            price: entry[5],
            total: entry[6],
            brokerage: entry[7],
            currency: entry[8],
            id: entry[9],
            included: true,
            index: (i-1)
          });
        }
        transactions.push({
          date: entry[0],
          account: entry[1],
          transactiontype: entry[2],
          stockname: entry[3],
          amount: entry[4],
          price: entry[5],
          total: entry[6],
          brokerage: entry[7],
          currency: entry[8],
          id: entry[9],
          included: true,
          index: (i-1)
        })
        // Attempting to speed up loading .csv file by sending all transactions as a chunk to reducer instead of one at a time.
        // Meaning the application won't rerender every time a transaction is read
        //addTransaction(entry[0], entry[1], entry[2], entry[3], entry[4], entry[5], entry[6], entry[7], entry[8], entry[9], (i-1));
        lines[i] = null;
        entry = null;
      }
      addTransactions(transactions);
      addSplits(splits);
    }

  const handleFileChosen = (file) => {
      removeTransactions();
      fileReader.onloadend = handleFileRead;
      fileReader.readAsText(file);
      renderData();
  }

  return(
    <Container className="">
      <div className="centering inputDiv">
        <Row>
          <input type='file'
                id='file'
                className='inputButton'
                accept='.csv'
                onChange={e => handleFileChosen(e.target.files[0])}
          />
          <p className="centering fileText"> .csv File Here</p>
       </Row>
      </div>
    </Container>
  )
}

FileEntry.propTypes = {
  addTransaction: PropTypes.func.isRequired,
  addTransactions: PropTypes.func.isRequired
}


//TODO: MAKE IT WORK FROM FILEENTRYCONTAINER ://
// Container Component

const mapDispatchToProps = (dispatch) => ({
  addTransaction: (date, account, transactiontype, stockname, amount, price, total, brokerage, currency, id, index) => dispatch(addTransaction(date, account, transactiontype, stockname, amount, price, total, brokerage, currency, id, index)),
  removeTransactions: () => dispatch(removeTransactions()),
  setPercentage: (percent) => dispatch(setPercentage(percent)),
  renderData: () => dispatch(renderData()),
  addTransactions: transactions => dispatch(addTransactions(transactions)),
  addSplits: splits => dispatch(addSplits(splits))
})

export default connect(
  null,
  mapDispatchToProps
)(FileEntry)
