import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTransaction } from '../actions'

const fileReader = new FileReader();

const FileEntry = ({addTransaction, dispatch}) => {
  const handleFileRead = (e) => {
      e.preventDefault();
      const content = fileReader.result;
      const lines = content.split('\n');
      for(var i = 0; i < lines.length; i++){
        var entry = lines[i].split(';');
        console.log(entry);
        if(i === 0 || i === lines.length-1){
          continue; // First row = headers, last empty
        }
        addTransaction(entry[0], entry[1], entry[2], entry[3], entry[4], entry[5], entry[6], entry[7], entry[8], entry[9]);
      }
    }

  const handleFileChosen = (file) => {
      fileReader.onloadend = handleFileRead;
      fileReader.readAsText(file);
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
  addTransaction: (date, account, transactiontype, stockname, amount, price, total, brokerage, currency, id) => dispatch(addTransaction(date, account, transactiontype, stockname, amount, price, total, brokerage, currency, id))
})

export default connect(
  null,
  mapDispatchToProps
)(FileEntry)
