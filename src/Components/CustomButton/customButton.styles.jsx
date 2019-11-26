import styled, { css } from 'styled-components';

const buttonStyles = css`
    background-color: black;
    color: white;
    border: 1px solid;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid darkgray;
    }
`;
// inverted button
const invertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid white;

    &:hover {
        background-color: black;
        color: white;
        border: 1px solid black;
    }
`;

const googleSignInStyles = css`
    background-color: #4285f4;
    color: white;

    &:hover {
        background-color: rgb(42,105,233);
    }
`;

const getButtonStyles = props => {
    if (props.isGoogleSignInButton) {
        return googleSignInStyles;
    }
    return props.inverted ? invertedButtonStyles : buttonStyles;
};

//base style
export const CustomButtonContainer = styled.button`
    
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;
    ${getButtonStyles}
`;
