import React from 'react';

const Card = ({ id, title, priority, assignedTo, createdBy, handleDelete, handleEdit }) =>
  <div className={priority}>
    <h1>
      {title}
    </h1>
    <small>
      Priority: {priority}
    </small>
    <br />
    <small>
      Assigned by: {createdBy}
    </small>
    <br />
  <small id={id} className="delete" onClick={handleDelete}>Delete</small>
    <small className="floatRight">
      {assignedTo}
    </small>
  </div>;

export default Card;
