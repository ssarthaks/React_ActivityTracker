import React from 'react';
import ActivityList from '../components/ActivityList';

function ActivityHistory() {
  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-center font-bold text-indigo-600 text-2xl">Activity History</h1>
      <ActivityList />
    </div>
  );
}

export default ActivityHistory;
