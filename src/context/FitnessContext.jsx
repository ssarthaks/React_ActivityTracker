import React, { createContext, useState, useMemo, useCallback } from 'react';

const FitnessContext = createContext();

export const useFitness = () => React.useContext(FitnessContext);

export const FitnessProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);
  const [goals, setGoals] = useState([]);
  const [userProfile, setUserProfile] = useState({ name: '', email: '' });

  const logActivity = useCallback((activity) => {
    setActivities((prevActivities) => [...prevActivities, activity]);
  }, []);

  const setFitnessGoal = useCallback((goal) => {
    setGoals((prevGoals) => [...prevGoals, goal]);
  }, []);

  const contextValue = useMemo(() => ({
    activities,
    logActivity,
    goals,
    setFitnessGoal,
    userProfile,
    setUserProfile
  }), [activities, goals, userProfile, logActivity, setFitnessGoal]);

  return (
    <FitnessContext.Provider value={contextValue}>
      {children}
    </FitnessContext.Provider>
  );
};
