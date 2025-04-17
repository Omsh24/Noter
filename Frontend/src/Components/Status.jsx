import React from 'react';

const Status = ({ status }) => {
  return (
    <div className="fixed top-5 right-5 bg-white shadow-md px-4 py-2 rounded-lg text-sm font-semibold text-gray-700 border border-gray-300 z-50">
      <p className="text-gray-500">Status:</p>
      <span className={`text-sm font-bold ${
        status === 'LoggedIn' ? 'text-green-600' :
        status === 'Logged Out' ? 'text-yellow-500' :
        status === 'Unregistered' ? 'text-red-500' : 'text-blue-500'
      }`}>
        {status}
      </span>
    </div>
  );
};

export default Status;
