import React from 'react';
import { useFitness } from '../context/FitnessContext';

function ActivityList() {
  const { activities } = useFitness();

  return (
    <div>
      {activities.map((activity) => (
        <div key={activity.id} className="border p-4 mb-2">
          <h2 className="font-bold">{activity.type}</h2>
          <p>Distance: {activity.distance} km</p>
          <p>Duration: {activity.duration} min</p>
          <p>Calories: {activity.calories}</p>
        </div>
      ))}
    </div>
  );
}

export default ActivityList;
