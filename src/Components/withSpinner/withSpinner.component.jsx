import React from 'react';
import './withSpinner.styles.sass'

// import {SpinnerContainer, SpinnerOverlay} from './withSpinner.styles';

const WithSpinner = WrappedComponent => ({isLoading, ...otherProps}) => {
  return isLoading ? (
    <div className='spinnerOverlay'>
      <div className="spinnerContainer">
      </div>
    </div>
  ) : (
    <WrappedComponent {...otherProps}/>
  )
};

export default WithSpinner;