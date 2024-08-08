import React, { useRef } from 'react';
import { useFitness } from '../context/FitnessContext';

function GoalManager() {
  const { setFitnessGoal, goals } = useFitness();
  const goalRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const goal = {
      id: Date.now(),
      description: goalRef.current.value,
    };
    setFitnessGoal(goal);
    goalRef.current.value = '';
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          ref={goalRef}
          placeholder="Set a new fitness goal"
          className="p-2 border rounded-md w-full"
        />
        <button
          type="submit"
          className="py-2 px-4 bg-green-500 text-white rounded-md w-full"
        >
          Add Goal
        </button>
      </form>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Your Goals</h2>
        <ul className="list-disc pl-5">
          {goals.map((goal) => (
            <li key={goal.id} className="mb-2">
              {goal.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default GoalManager;
