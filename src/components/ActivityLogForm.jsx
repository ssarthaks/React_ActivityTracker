import React, { useRef } from 'react';
import { useLogActivity } from '../hooks/useLogActivity';

function ActivityLogForm() {
  const { handleLog } = useLogActivity();
  const typeRef = useRef(null);
  const distanceRef = useRef(null);
  const durationRef = useRef(null);
  const caloriesRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const activity = {
      id: Date.now(),
      type: typeRef.current.value,
      distance: parseFloat(distanceRef.current.value),
      duration: parseFloat(durationRef.current.value),
      calories: parseFloat(caloriesRef.current.value),
    };
    handleLog(activity);
    // Clear the form
    typeRef.current.value = '';
    distanceRef.current.value = '';
    durationRef.current.value = '';
    caloriesRef.current.value = '';
  };

  return (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" ref={typeRef} placeholder="Activity Type" className="p-2 border rounded-md" />
          <input type="number" ref={distanceRef} placeholder="Distance (km)" className="p-2 border rounded-md" />
          <input type="number" ref={durationRef} placeholder="Duration (min)" className="p-2 border rounded-md" />
          <input type="number" ref={caloriesRef} placeholder="Calories Burned" className="p-2 border rounded-md" />
          <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded-md">Log Activity</button>
        </form>
  );
}

export default ActivityLogForm;
