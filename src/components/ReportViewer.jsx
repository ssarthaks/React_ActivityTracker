import React from 'react';
import { useFitness } from '../context/FitnessContext';

function ReportViewer() {
  const { activities } = useFitness();

  const totalDistance = activities.reduce((sum, activity) => sum + (activity.distance || 0), 0);
  const totalDuration = activities.reduce((sum, activity) => sum + (activity.duration || 0), 0);
  const totalCalories = activities.reduce((sum, activity) => sum + (activity.calories || 0), 0);

  return (
    <div>
      <h2>Total Distance: {totalDistance.toFixed(2)} km</h2>
      <h2>Total Duration: {totalDuration.toFixed(2)} min</h2>
      <h2>Total Calories: {totalCalories.toFixed(2)}</h2>
    </div>
  );
}

export default ReportViewer;
