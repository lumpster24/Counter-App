import React from 'react';

const NavBar = (props) => {
  const { numCounters } = props

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        NavBar
        <span className="badge badge-pill badge-secondary">
          {numCounters}
        </span>
      </a>
    </nav>
  );
}

export default NavBar;