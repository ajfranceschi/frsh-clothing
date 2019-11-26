import styled/*, { css }*/ from 'styled-components';
import { Link } from 'react-router-dom';

// to share css between styled-components declare a block of css code and then add it as the styled component's rules
// const HeaderLinkStyles = css`
//     padding: 10px 15px
//     cursor: pointer
// `;

// export const HeaderLink =  styled(Link)`
//     ${HeaderLinkStyles}
// `;

export const HeaderLink = styled(Link)`
    padding: 10px 15px
    cursor: pointer
`;

// declare the rest of the divs
export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    font-size: 24px;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
`;

export const HeaderLinksContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;


