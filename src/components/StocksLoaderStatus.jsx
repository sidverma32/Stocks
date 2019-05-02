import React from 'react'

const StocksLoaderStatus = props => {
  if(props.connectionError) {
    return (
      <div className='is-medium'>
        <span className='has-text-danger' >Something Went Wrong... </span>
        <br />Please try again!
      </div>
    );
  } else {
    return (
      <div className='tag is-large'>
        <span className='loader'> &nbsp;</span>
        &nbsp; &nbsp; Please Wait while Loading...
      </div>
    );
  }
}

export default StocksLoaderStatus;