import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <NavLink to='/' exact activeStyle={{ fontWeight: 'bold', color: '#9374c3' }}>
        Home
      </NavLink>
      <NavLink to='/about' exact activeStyle={{ fontWeight: 'bold', color: '#9374c3' }}>
        About
      </NavLink>
    </div>
  );
}

export default Header;
