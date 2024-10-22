import React from 'react';
import './Card.css';

function Card({ ticket }) {
  const getPriorityLabel = (priority) => {
    switch (priority) {
      case 4: return 'Urgent';
      case 3: return 'High';
      case 2: return 'Medium';
      case 1: return 'Low';
      default: return 'No Priority';
    }
  };

  return (
    <div className="card">
      <h3>{ticket.title}</h3>
      <p>{ticket.description}</p>
      <div><strong>Assigned to:</strong> {ticket.user}</div>
      <div><strong>Priority:</strong> {getPriorityLabel(ticket.priority)}</div>
      <div><strong>Status:</strong> {ticket.status}</div>
    </div>
  );
}

export default Card;
