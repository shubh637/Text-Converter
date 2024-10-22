import React, { useState, useEffect } from 'react';
import KanbanBoard from './components/KanbanBoard';
import GroupSelector from './components/GroupSelector';
import './App.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [groupingOption, setGroupingOption] = useState('status');
  const [sortOption, setSortOption] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch tickets from the API
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTickets(data.tickets);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  if (loading) return <div>Loading tickets...</div>;
  if (error) return <div>Error: {error}</div>;

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
