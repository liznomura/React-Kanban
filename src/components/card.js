import React from 'react';

const Card = ({ id, title, priority, assignedTo, createdBy, handleDelete, handleEdit }) =>
  <div className={priority}>
      <small id={id} className="delete" onClick={handleDelete}>&times;</small>
      <div className="cardText">
    <p>
      {title}
    </p>
    <small>
      Priority: {priority}
    </small>
    <br />
    <small>
      Assigned by: {createdBy}
    </small>
    <small className="floatRight">
      {assignedTo}
    </small>
    </div>
  </div>;

export default Card;
