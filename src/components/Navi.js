import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'reactstrap';

export default function Navi() {
  return (
    <Navbar color="dark">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/characters">Characters</NavLink>
      <NavLink to="/search">Search</NavLink>
    </Navbar>
  );
}
