import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () =>
  <div className="nav">
    <ul>
      <li><Link to="/">Kanban</Link></li>
      <li><Link to="#">+ New Task</Link></li>
    </ul>
  </div>;

export default Nav;