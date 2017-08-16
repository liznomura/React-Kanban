import React from 'react';

const Card = ({title, priority, assignedBy, createdBy}) =>
  <h1>{ title }</h1>
  <small>Priority: { priority }</small><br />
  <small>Assigned by: { assignedBy }</small><br />
  <small>{ createdBy }</small>;

export default Card;
