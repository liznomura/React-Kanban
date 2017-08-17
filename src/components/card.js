import React from 'react';

const Card = ({id, title, priority, assignedTo, createdBy, handleDelete}) => (
  <div className={ priority }>
  <h1>{ title }</h1>
  <small>Priority: { priority }</small><br />
  <small>Assigned to: { assignedTo }</small><br />
  <small onClick={ handleDelete } id={ id } className="link">delete</small>
  <small className="floatRight">{ createdBy }</small>
  </div>
)


export default Card;
