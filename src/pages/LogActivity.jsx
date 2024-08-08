import React from 'react';
import ActivityLogForm from '../components/ActivityLogForm';

function LogActivity() {
  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-center font-bold text-indigo-600 text-2xl">Log Your Activity</h1>
      <ActivityLogForm />
    </div>
  );
}

export default LogActivity;
