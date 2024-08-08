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
    <form onSubmit={handleSave} className="space-y-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="p-2 border rounded-md"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="p-2 border rounded-md"
      />
      <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded-md">Save</button>
    </form>
  );
}

export default Settings;
