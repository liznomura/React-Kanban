import React from "react";
import { Link } from "react-router-dom";

const Nav = ({visibilityToggle}) =>
  <div className="nav">
    <div className="nav__title">
      <Link to="/">Kanban</Link>
    </div>
    <div className="nav__new-task-btn" onClick={visibilityToggle}>+ New Task
    </div>
  </div>;

export default Nav;
