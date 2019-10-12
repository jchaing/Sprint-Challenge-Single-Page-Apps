import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'reactstrap';

export default function Navi() {
  return (
    <Navbar color="dark">
      <NavLink exact activeClassName="active" to="/">
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/characters">
        Characters
      </NavLink>
      <NavLink activeClassName="active" to="/locations">
        Locations
      </NavLink>
      <NavLink activeClassName="active" to="/search">
        Search
      </NavLink>
    </Navbar>
  );
}
