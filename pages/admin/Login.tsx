import React, { useState } from 'react';
import { checkPassword, login } from '../../lib/auth';

export const AdminLogin: React.FC = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (checkPassword(password)) {
      login();
      window.location.href = '#/admin/dashboard';
    } else {
      setError('Invalid Access Key');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="bg-brand-900 p-8 text-center">
          <h1 className="text-2xl font-serif font-bold text-white">Bollaar Admin</h1>
          <p className="text-gold-500 text-sm mt-2">Restricted Access Portal</p>
        </div>
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Secure Password</label>
              <input
                type="password"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none"
                placeholder="Enter access key"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500 text-sm text-center font-medium">{error}</p>}
            <button
              type="submit"
              className="w-full bg-gold-600 hover:bg-gold-700 text-white font-bold py-3 rounded-lg transition shadow-lg"
            >
              Login to Dashboard
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};