import React from 'react';
import './customButton.styles.sass';

const CustomButton = ({children, isGoogleSignInButton, inverted, ...otherButtonProps}) => {
  return(
    <button className={`${isGoogleSignInButton ? 'googleSignInButton' : ''} customButton ${inverted ? 'inverted' : ''}`} {...otherButtonProps}>
      {children}
    </button>
  )
};

export default CustomButton;