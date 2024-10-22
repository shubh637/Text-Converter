import React from 'react';

function GroupSelector({ groupingOption, setGroupingOption, sortOption, setSortOption }) {
  return (
    <div className="group-selector">
      <div>
        <label>Group by: </label>
        <select value={groupingOption} onChange={(e) => setGroupingOption(e.target.value)}>
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      <div>
        <label>Sort by: </label>
        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="">None</option>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
}

export default GroupSelector;
