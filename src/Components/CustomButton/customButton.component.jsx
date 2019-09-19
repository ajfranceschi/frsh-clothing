import React from 'react';
import './customButton.styles.sass';

const CustomButton = ({children, ...otherButtonProps}) => {
  return(
    <button className='customButton' {...otherButtonProps}>
      {children}
    </button>
  )
}

export default CustomButton;