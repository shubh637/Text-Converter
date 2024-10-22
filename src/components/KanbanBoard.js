import React from 'react';
import Card from './Card';

function KanbanBoard({ tickets, groupingOption, sortOption }) {
  // Group the tickets based on the selected option
  const groupedTickets = tickets.reduce((groups, ticket) => {
    const key = ticket[groupingOption] || 'No Data';
    if (!groups[key]) groups[key] = [];
    groups[key].push(ticket);
    return groups;
  }, {});

  // Sort tickets
  const sortTickets = (tickets) => {
    if (sortOption === 'priority') {
      return tickets.sort((a, b) => b.priority - a.priority);
    } else if (sortOption === 'title') {
      return tickets.sort((a, b) => a.title.localeCompare(b.title));
    }
    return tickets;
  };

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map((group, index) => (
        <div key={index} className="kanban-column">
          <h2>{group}</h2>
          {sortTickets(groupedTickets[group]).map((ticket) => (
            <Card key={ticket.id} ticket={ticket} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default KanbanBoard;
