import React from 'react';
import './header.styles.sass';
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/crown.svg';

const Header = () => {
  return (
    <div className='header'>
      <Link to={'/'} className='logoContainer'>
        <Logo className='logo'/>
      </Link>
      <div className="headerLinks">
        <Link className="headerLink" to={'/shop'}>
          SHOP
        </Link>
        <Link className="headerLink" to={'/contact'}>
          CONTACT
        </Link>
      </div>
    </div>
  )
}

export default Header;