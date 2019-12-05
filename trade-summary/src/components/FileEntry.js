import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTransaction, removeTransactions, setPercentage, renderData } from '../actions'

const fileReader = new FileReader();

const FileEntry = ({addTransaction, removeTransactions, setPercentage, renderData, dispatch}) => {
  const handleFileRead = (e) => {
      e.preventDefault();
      var content = fileReader.result;
      content = content.replace(/,/g, ".");
      const lines = content.split('\n');
      for(var i = 0; i < lines.length; i++){
        var entry = lines[i].split(';');
        parseFloat(setPercentage(parseFloat(i)/parseFloat(lines.length)));
        if(i === 0 || i === lines.length-1){
          continue; // First row = headers, last empty
        }
        addTransaction(entry[0], entry[1], entry[2], entry[3], entry[4], entry[5], entry[6], entry[7], entry[8], entry[9], (i-1));
        lines[i] = null;
        entry = null;
      }
    }

  const handleFileChosen = (file) => {
      removeTransactions();
      fileReader.onloadend = handleFileRead;
      fileReader.readAsText(file);
      renderData();
  }

  return(
    <div>
      <input type='file'
             id='file'
             className='input-file'
             accept='.csv'
             onChange={e => handleFileChosen(e.target.files[0], addTransaction)}
      />
    </div>
  )
}

FileEntry.propTypes = {
  addTransaction: PropTypes.func.isRequired
}


//TODO: MAKE IT WORK FROM FILEENTRYCONTAINER ://
// Container Component

const mapDispatchToProps = (dispatch) => ({
  addTransaction: (date, account, transactiontype, stockname, amount, price, total, brokerage, currency, id, index) => dispatch(addTransaction(date, account, transactiontype, stockname, amount, price, total, brokerage, currency, id, index)),
  removeTransactions: () => dispatch(removeTransactions()),
  setPercentage: (percent) => dispatch(setPercentage(percent)),
  renderData: () => dispatch(renderData())
})

export default connect(
  null,
  mapDispatchToProps
)(FileEntry)
