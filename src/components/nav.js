import React from "react";
import { Link } from "react-router-dom";

function visibilityToggle() {
  let form = document.getElementById('formContainer');

  form.classList.toggle('toggleShow');
}

const Nav = () =>
  <div className="nav">
    <div>
      <Link to="/">Kanban</Link>
    </div>
    <div className="newTask" onClick={visibilityToggle}>
      <Link to="#">+ New Task</Link>
    </div>
  </div>;

export default Nav;
