import React from 'react';
import { Link } from 'react-router-dom';
import ActivityList from '../components/ActivityList';
import GoalManager from '../components/GoalManager';

function Home() {
  return (
    <div className="flex flex-col items-center ">
      <div className="w-full max-w-4xl bg-gray-200 rounded-lg shadow-lg p-6">
        <h1 className="text-center text-3xl font-extrabold text-indigo-700 mb-6">Fitness Tracker Dashboard</h1>
        
        <div className="space-y-6">
          {/* Recent Activities Section */}
          <section className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activities</h2>
            <ActivityList />
            <div className="text-center mt-4">
              <Link to="/logactivity" className="inline-block text-indigo-600 font-semibold hover:underline">
                Log a New Activity
              </Link>
            </div>
          </section>
          
          {/* Goals Section */}
          <section className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Fitness Goals</h2>
            <GoalManager />
          </section>
          
          {/* Reports Link */}
          <div className="text-center mt-6">
            <Link to="/reports" className="text-indigo-600 font-semibold hover:underline">
              View Performance Reports
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
