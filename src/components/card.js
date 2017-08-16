import React from 'react';

const Card = ({title, priority, assignedTo, createdBy}) => (
  <div>
  <h1>{ title }</h1>
  <small>Priority: { priority }</small><br />
  <small>Assigned to: { assignedTo }</small><br />
  <small>Created by: { createdBy }</small>
  </div>
)


export default Card;
