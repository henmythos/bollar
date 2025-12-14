import React from 'react';
import { Home, Users, Building, LogOut } from 'lucide-react';
import { logout, ADMIN_NAME } from '../../lib/auth';

interface AdminLayoutProps {
  children: React.ReactNode;
  activePage: 'dashboard' | 'leads' | 'projects';
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children, activePage }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, path: '#/admin/dashboard' },
    { id: 'leads', label: 'Leads', icon: Users, path: '#/admin/leads' },
    { id: 'projects', label: 'Projects', icon: Building, path: '#/admin/projects' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-brand-900 text-white fixed h-full z-20">
        <div className="p-6 border-b border-gray-700">
          <h1 className="text-xl font-bold font-serif text-gold-500">Bollaar Admin</h1>
          <p className="text-xs text-gray-400 mt-1">Hi, {ADMIN_NAME}</p>
        </div>
        
        <nav className="flex-1 py-6 space-y-1 px-3">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.path}
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                activePage === item.id 
                  ? 'bg-gold-600 text-white shadow-lg' 
                  : 'text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </a>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-700">
          <button 
            onClick={logout}
            className="flex items-center w-full px-4 py-2 text-sm text-red-400 hover:bg-white/5 rounded-lg transition"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 pb-20 md:pb-0">
        <header className="bg-white shadow-sm p-4 flex justify-between items-center md:hidden sticky top-0 z-10">
           <span className="font-bold text-brand-900">Bollaar Admin</span>
           <button onClick={logout} className="text-xs text-red-500 font-bold">Logout</button>
        </header>
        <div className="p-4 md:p-8 max-w-7xl mx-auto">
           {children}
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-30 flex justify-around p-2 pb-safe">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.path}
            className={`flex flex-col items-center p-2 rounded-lg ${
              activePage === item.id ? 'text-gold-600' : 'text-gray-400'
            }`}
          >
            <item.icon className="w-6 h-6" />
            <span className="text-[10px] mt-1 font-medium">{item.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};