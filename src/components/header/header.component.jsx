import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>Logo</Link>
      <div className='options'>
        <Link className='option' to='/'>STATUS</Link>
        <Link className='option' to='/'>GAME</Link>
      </div>
    </div>
  )
}

export default Header;
