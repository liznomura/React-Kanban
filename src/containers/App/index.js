import React from 'react';
import Nav from '../../components/nav.js';
import NewCardForm from '../NewCardForm';
import KanbanBoard from '../KanbanBoard';

function visibilityToggle() {
  let form = document.getElementById('form');
  form.classList.toggle('form--display');
}

const App = () => (
      <div className="app">
      <Nav
      visibilityToggle={visibilityToggle}/>
      <NewCardForm
      visibilityToggle={visibilityToggle}/>
      <KanbanBoard />
      </div>
)

export default App;
