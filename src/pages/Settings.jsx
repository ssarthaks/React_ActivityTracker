import React, { useState, useEffect } from 'react';
import { useFitness } from '../context/FitnessContext';

function Settings() {
  const { userProfile, setUserProfile } = useFitness();
  const [name, setName] = useState(userProfile.name);
  const [email, setEmail] = useState(userProfile.email);

  useEffect(() => {
    setName(userProfile.name);
    setEmail(userProfile.email);
  }, [userProfile]);

  const handleSave = (e) => {
    e.preventDefault();
    setUserProfile({ name, email });
    alert('Profile updated!');
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-center font-bold text-indigo-600 text-2xl">User Settings</h1>
      <form onSubmit={handleSave} className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="p-2 border rounded-md w-full"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="p-2 border rounded-md w-full"
        />
        <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded-md w-full">Save</button>
      </form>
    </div>
  );
}

export default Settings;
