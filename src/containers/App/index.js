import React from 'react';
import Nav from '../../components/nav.js';
import NewCardForm from '../NewCardForm';
import KanbanBoard from '../KanbanBoard';

const App = () => (
      <div className="app">
      <Nav />
      <NewCardForm />
      <KanbanBoard />
      </div>
)

export default App;
