import React from 'react';
// import './customButton.styles.sass';
import { CustomButtonContainer } from './customButton.styles';

const CustomButton = (props) => {
    return (
        <CustomButtonContainer className='customButton' {...props}>
            {props.children}
        </CustomButtonContainer>
    );
};

export default CustomButton;
