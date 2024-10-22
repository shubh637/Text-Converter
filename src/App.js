import React, { useState, useEffect } from 'react';
import KanbanBoard from './components/KanbanBoard';
import GroupSelector from './components/GroupSelector';
import './App.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [groupingOption, setGroupingOption] = useState('status');
  const [sortOption, setSortOption] = useState('');

  // Fetch tickets from the API
  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => response.json())
      .then(data => setTickets(data.tickets));
  }, []);

  return (
    <div className="app">
      <h1>Kanban Board</h1>
      <GroupSelector
        groupingOption={groupingOption}
        setGroupingOption={setGroupingOption}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <KanbanBoard tickets={tickets} groupingOption={groupingOption} sortOption={sortOption} />
    </div>
  );
}

export default App;
