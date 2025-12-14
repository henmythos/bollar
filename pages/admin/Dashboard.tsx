import React, { useEffect, useState } from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { getLeads, Lead, getProjects } from '../../lib/storage';
import { Users, TrendingUp, Calendar } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [projectsCount, setProjectsCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load leads and projects
    Promise.all([getLeads(), getProjects()]).then(([leadsData, projectsData]) => {
      setLeads(leadsData);
      setProjectsCount(projectsData.length);
      setLoading(false);
    });
  }, []);

  const totalLeads = leads.length;
  // Note: Date parsing depends on what Google Sheet returns. 
  // Google Sheets default Date format is usually ISO-ish or locale based.
  const todayLeads = leads.filter(l => {
      const date = new Date(l.Date);
      const today = new Date();
      return date.getDate() === today.getDate() && 
             date.getMonth() === today.getMonth() && 
             date.getFullYear() === today.getFullYear();
  }).length;

  return (
    <AdminLayout activePage="dashboard">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h2>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center">
          <div className="p-4 bg-blue-50 rounded-full text-blue-600 mr-4">
            <Users className="w-8 h-8" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Total Leads</p>
            <p className="text-3xl font-bold text-gray-900">{loading ? '-' : totalLeads}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center">
          <div className="p-4 bg-green-50 rounded-full text-green-600 mr-4">
            <TrendingUp className="w-8 h-8" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">New Today</p>
            <p className="text-3xl font-bold text-gray-900">{loading ? '-' : todayLeads}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center">
          <div className="p-4 bg-purple-50 rounded-full text-purple-600 mr-4">
            <Calendar className="w-8 h-8" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Projects</p>
            <p className="text-3xl font-bold text-gray-900">{projectsCount}</p>
          </div>
        </div>
      </div>

      {/* Recent Leads */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
          <h3 className="font-bold text-gray-800">Recent Leads</h3>
          <a href="#/admin/leads" className="text-sm text-gold-600 font-medium hover:underline">View All</a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-500 uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Phone</th>
                <th className="px-6 py-3">Project</th>
                <th className="px-6 py-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={4} className="text-center py-4">Loading leads from Google Sheets...</td></tr>
              ) : leads.slice(0, 5).map((lead, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{lead.Name}</td>
                  <td className="px-6 py-4 text-gray-600">{lead.Phone}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-brand-50 text-brand-700 rounded-full text-xs font-medium">
                      {lead.Project}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500">
                    {new Date(lead.Date).toLocaleDateString()}
                  </td>
                </tr>
              ))}
              {!loading && leads.length === 0 && (
                 <tr><td colSpan={4} className="text-center py-8 text-gray-500">No leads found. Check Google Sheet URL.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};