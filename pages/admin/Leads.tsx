import React, { useEffect, useState } from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { getLeads, Lead } from '../../lib/storage';
import { Phone, MessageCircle, Search } from 'lucide-react';

export const LeadsPage: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchLeads = () => {
    setLoading(true);
    getLeads().then((data) => {
      setLeads(data);
      setFilteredLeads(data);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  useEffect(() => {
    const lower = search.toLowerCase();
    setFilteredLeads(leads.filter(l => 
        (l.Name && l.Name.toLowerCase().includes(lower)) || 
        (l.Phone && l.Phone.toString().includes(search)) ||
        (l.Project && l.Project.toLowerCase().includes(lower))
    ));
  }, [search, leads]);

  return (
    <AdminLayout activePage="leads">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold text-gray-800">Leads Management</h2>
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input 
            type="text" 
            placeholder="Search leads..." 
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gold-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-500 uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Customer</th>
                <th className="px-6 py-3">Project</th>
                <th className="px-6 py-3">Source</th>
                <th className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={5} className="text-center py-8">Loading leads...</td></tr>
              ) : filteredLeads.map((lead, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-500 whitespace-nowrap">
                    {new Date(lead.Date).toLocaleDateString()}
                    <br/>
                    <span className="text-xs">{new Date(lead.Date).toLocaleTimeString()}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{lead.Name}</div>
                    <div className="text-gray-500 text-xs">{lead.Phone}</div>
                    {lead.Email && <div className="text-gray-400 text-xs">{lead.Email}</div>}
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-brand-50 text-brand-700 rounded-full text-xs font-medium whitespace-nowrap">
                      {lead.Project}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500 text-xs">{lead.Source}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                        <a 
                            href={`tel:${lead.Phone}`}
                            className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition"
                            title="Call"
                        >
                            <Phone className="w-4 h-4" />
                        </a>
                        <a 
                            href={`https://wa.me/91${lead.Phone?.toString().replace(/\D/g,'').slice(-10)}`}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition"
                            title="WhatsApp"
                        >
                            <MessageCircle className="w-4 h-4" />
                        </a>
                    </div>
                  </td>
                </tr>
              ))}
              {!loading && filteredLeads.length === 0 && (
                 <tr><td colSpan={5} className="text-center py-12 text-gray-500">No leads found.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};