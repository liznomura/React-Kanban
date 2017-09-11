import React from "react";
import { Link } from "react-router-dom";

const Nav = ({visibilityToggle}) =>
  <div className="nav">
    <div>
      <Link to="/">Kanban</Link>
    </div>
    <div className="newTask" onClick={visibilityToggle}>+ New Task
    </div>
  </div>;

export default Nav;
