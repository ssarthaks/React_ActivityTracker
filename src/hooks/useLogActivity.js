import { useFitness } from '../context/FitnessContext';

export const useLogActivity = () => {
  const { logActivity } = useFitness();

  const handleLog = (activity) => {
    logActivity(activity);
  };

  return { handleLog };
};
