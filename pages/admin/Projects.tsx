import React, { useEffect, useState } from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { Building, Plus, Trash2, Check, X } from 'lucide-react';
import { getProjects, addProject, deleteProject, updateProjectStatus, Project } from '../../lib/storage';

export const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [newProject, setNewProject] = useState({
      title: '', location: '', price: '', status: 'Active', description: '', imageURL: '', brochureURL: ''
  });

  const fetchProjects = () => {
      getProjects().then(setProjects);
  }

  useEffect(() => {
      fetchProjects();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      // @ts-ignore
      await addProject(newProject);
      setShowForm(false);
      fetchProjects();
      setNewProject({ title: '', location: '', price: '', status: 'Active', description: '', imageURL: '', brochureURL: '' });
  };

  const handleDelete = async (id: string) => {
      if(window.confirm("Delete project?")) {
          await deleteProject(id);
          fetchProjects();
      }
  }

  const toggleStatus = async (project: Project) => {
      const newStatus = project.status === 'Active' ? 'Sold Out' : 'Active';
      await updateProjectStatus(project.id, newStatus);
      fetchProjects();
  }

  return (
    <AdminLayout activePage="projects">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Projects</h2>
        <button 
            onClick={() => setShowForm(!showForm)}
            className="bg-brand-900 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center hover:bg-brand-800 transition"
        >
            <Plus className="w-4 h-4 mr-2" /> Add Project
        </button>
      </div>

      {showForm && (
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 mb-8 animate-fade-in">
              <h3 className="font-bold text-lg mb-4">Add New Listing</h3>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input required placeholder="Project Title" className="p-2 border rounded" value={newProject.title} onChange={e => setNewProject({...newProject, title: e.target.value})} />
                  <input required placeholder="Location" className="p-2 border rounded" value={newProject.location} onChange={e => setNewProject({...newProject, location: e.target.value})} />
                  <input required placeholder="Price (e.g. 1.5 Cr)" className="p-2 border rounded" value={newProject.price} onChange={e => setNewProject({...newProject, price: e.target.value})} />
                  <input required placeholder="Image URL" className="p-2 border rounded" value={newProject.imageURL} onChange={e => setNewProject({...newProject, imageURL: e.target.value})} />
                  <textarea placeholder="Description" className="p-2 border rounded md:col-span-2" value={newProject.description} onChange={e => setNewProject({...newProject, description: e.target.value})} />
                  <button type="submit" className="bg-gold-600 text-white py-2 rounded font-bold md:col-span-2 hover:bg-gold-700">Save Project</button>
              </form>
          </div>
      )}

      {projects.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl border border-dashed border-gray-300">
              <Building className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No projects added yet.</p>
          </div>
      ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map(p => (
                  <div key={p.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group">
                      <div className="h-48 overflow-hidden relative">
                          <img src={p.imageURL || 'https://via.placeholder.com/400'} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                          <div className={`absolute top-2 right-2 px-2 py-1 rounded text-[10px] font-bold uppercase ${p.status === 'Active' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                              {p.status}
                          </div>
                      </div>
                      <div className="p-4">
                          <h3 className="font-bold text-brand-900">{p.title}</h3>
                          <p className="text-xs text-gold-600 font-bold uppercase mb-2">{p.location}</p>
                          <p className="text-sm text-gray-500 mb-4 line-clamp-2">{p.description}</p>
                          <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                              <span className="font-bold text-gray-900">{p.price}</span>
                              <div className="flex gap-2">
                                  <button onClick={() => toggleStatus(p)} className="p-1.5 text-gray-500 hover:text-green-600 bg-gray-50 rounded" title="Toggle Status"><Check className="w-4 h-4"/></button>
                                  <button onClick={() => handleDelete(p.id)} className="p-1.5 text-gray-500 hover:text-red-600 bg-gray-50 rounded" title="Delete"><Trash2 className="w-4 h-4"/></button>
                              </div>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      )}
    </AdminLayout>
  );
};