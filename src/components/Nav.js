import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/characters">Characters</NavLink>
      <NavLink to="/search">Search</NavLink>
    </div>
  );
}
