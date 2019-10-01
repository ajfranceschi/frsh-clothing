import React from 'react';
import './customButton.styles.sass';

const CustomButton = ({children, isGoogleSignInButton, ...otherButtonProps}) => {
  return(
    <button className={`${isGoogleSignInButton ? 'googleSignInButton' : ''} customButton`} {...otherButtonProps}>
      {children}
    </button>
  )
}

export default CustomButton;