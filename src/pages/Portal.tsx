// filepath: /C:/Users/sai04/OneDrive/Desktop/project/src/pages/Portal.tsx
import React, { useState } from 'react';

const Portal: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState(true);

  const handleToggle = () => {
    setIsAdmin(!isAdmin);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">{isAdmin ? 'Admin Login' : 'Student Login'}</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">Username:</label>
            <input type="text" id="username" name="username" className="mt-1 p-2 w-full border rounded" required />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">Password:</label>
            <input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded" required />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Login</button>
        </form>
        <button onClick={handleToggle} className="mt-4 w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600">
          Switch to {isAdmin ? 'Student' : 'Admin'} Login
        </button>
      </div>
    </div>
  );
};

export default Portal;