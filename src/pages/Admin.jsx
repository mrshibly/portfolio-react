import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Lock, Save, Plus, Trash2, Eye, LayoutDashboard, Settings, Copy, Check, LogOut, ChevronRight, User, BookOpen, Mail, Star } from 'lucide-react'
import { usePortfolioData } from '../hooks/usePortfolioData'

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const { data, updateData, resetData } = usePortfolioData()
  const [activeTab, setActiveTab] = useState('hero')
  const [copied, setCopied] = useState(false)
  
  const [editingProject, setEditingProject] = useState(null)
  const [editingCompetency, setEditingCompetency] = useState(null)

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem('admin_token');
      if (token) {
        try {
          const res = await fetch('/api/portfolio/verify', {
            headers: { 'Authorization': token }
          });
          if (res.ok) setIsAuthenticated(true);
        } catch (e) {}
      }
    };
    checkToken();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/portfolio/verify', {
        headers: {
          'Authorization': password
        }
      });
      if (response.ok) {
        localStorage.setItem('admin_token', password);
        setIsAuthenticated(true);
      } else {
        alert('Unauthorized access attempt logged.');
      }
    } catch (err) {
      alert('Error verifying credentials.');
    }
  }

  const handleSave = () => {
    updateData(data)
    alert('Changes saved to the database.')
  }

  const updateHero = (field, value) => {
    updateData({ ...data, hero: { ...data.hero, [field]: value } })
  }

  const updateContact = (field, value) => {
    updateData({ ...data, contact: { ...data.contact, [field]: value } })
  }

  const deleteProject = (id) => {
    if (window.confirm('Erase this project from records?')) {
      updateData({ ...data, projects: data.projects.filter(p => p.id !== id) })
    }
  }

  const saveProject = (project) => {
    const exists = data.projects.find(p => p.id === project.id)
    if (exists) {
      updateData({
        ...data,
        projects: data.projects.map(p => p.id === project.id ? project : p)
      })
    } else {
      updateData({
        ...data,
        projects: [...data.projects, project]
      })
    }
    setEditingProject(null)
  }

  const deleteCompetency = (index) => {
    if (window.confirm('Erase this competency?')) {
      updateData({ ...data, competencies: data.competencies.filter((_, i) => i !== index) })
    }
  }

  const saveCompetency = (competency, originalIndex) => {
    const newComps = [...data.competencies]
    if (originalIndex !== null && originalIndex !== undefined) {
      newComps[originalIndex] = competency
    } else {
      newComps.push(competency)
    }
    updateData({ ...data, competencies: newComps })
    setEditingCompetency(null)
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-obsidian px-6">
        <div className="w-full max-w-md p-8 bg-white/[0.03] border border-white/10 rounded-2xl backdrop-blur-xl">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-electric/20 rounded-full flex items-center justify-center border border-electric/40">
              <Lock className="text-electric" size={28} />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center mb-2">Core Access Protocol</h2>
          <p className="text-slate text-center mb-8 text-sm uppercase tracking-widest opacity-50">Authorized Personnel Only</p>
          <form onSubmit={handleLogin} className="space-y-6">
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 focus:border-electric outline-none transition-colors font-mono"
              placeholder="ENTER ACCESS KEY"
            />
            <button type="submit" className="w-full btn-primary uppercase tracking-widest text-sm font-bold">
              Initialize Session
            </button>
          </form>
          <Link to="/" className="block text-center mt-6 text-sm text-slate hover:text-white transition-colors uppercase tracking-widest">
            Return to Surface
          </Link>
        </div>
      </div>
    )
  }

  // Handle case where data might still be loading
  if (!data) return <div className="min-h-screen bg-obsidian flex items-center justify-center text-electric">LOADING ADMIN OS...</div>

  return (
    <div className="min-h-screen bg-[#080808] text-white flex pt-20 font-inter">
      {/* Sidebar */}
      <aside className="w-72 border-r border-white/5 p-8 hidden lg:block bg-black/20">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-8 h-8 bg-electric rounded-lg shadow-[0_0_15px_rgba(0,229,255,0.4)]" />
          <span className="font-black tracking-tighter text-xl">ADMIN.OS</span>
        </div>
        
        <nav className="space-y-3">
          {[
            { id: 'hero', label: 'Identity', icon: User },
            { id: 'projects', label: 'Work Archive', icon: LayoutDashboard },
            { id: 'competencies', label: 'Competencies', icon: Star },
            { id: 'stats', label: 'Performance', icon: Settings },
            { id: 'affiliations', label: 'Network', icon: Eye },
            { id: 'manifesto', label: 'Manifesto', icon: BookOpen },
            { id: 'contact', label: 'Contact', icon: Mail },
            { id: 'config', label: 'System Export', icon: Copy }
          ].map(item => (
            <button 
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center justify-between px-5 py-4 rounded-xl transition-all duration-300 ${activeTab === item.id ? 'bg-electric text-black font-bold scale-105' : 'hover:bg-white/5 text-slate'}`}
            >
              <div className="flex items-center gap-3">
                <item.icon size={18} /> {item.label}
              </div>
              <ChevronRight size={14} className={activeTab === item.id ? 'opacity-100' : 'opacity-0'} />
            </button>
          ))}
        </nav>

        <div className="mt-auto pt-12">
          <button onClick={() => {
            localStorage.removeItem('admin_token')
            setIsAuthenticated(false)
          }} className="flex items-center gap-2 text-drama hover:opacity-80 transition-opacity uppercase text-xs font-bold tracking-widest">
            <LogOut size={16} /> Terminate Session
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 lg:p-16 overflow-y-auto max-w-6xl">
        <div className="flex justify-between items-end mb-16">
          <div>
            <p className="text-electric font-mono text-xs uppercase tracking-widest mb-2">Section Management</p>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              {activeTab} <span className="text-white/20 italic">Layer</span>
            </h1>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={handleSave}
              className="flex items-center gap-2 px-8 py-3 bg-electric text-black rounded-full font-bold hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,229,255,0.2)]"
            >
              <Save size={18} /> Save Changes
            </button>
          </div>
        </div>

        {activeTab === 'hero' && (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-xs uppercase font-mono text-slate tracking-widest">Public Alias</label>
                <input 
                  type="text" 
                  value={data.hero?.name || ''}
                  onChange={(e) => updateHero('name', e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-electric transition-all text-xl font-bold"
                />
              </div>
              <div className="space-y-4">
                <label className="text-xs uppercase font-mono text-slate tracking-widest">Operational Title</label>
                <input 
                  type="text" 
                  value={data.hero?.title || ''}
                  onChange={(e) => updateHero('title', e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-electric transition-all text-xl font-bold"
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <label className="text-xs uppercase font-mono text-slate tracking-widest">Visual Asset (Profile Image URL)</label>
              <div className="flex items-start gap-6">
                {data.hero?.image && (
                  <div className="w-24 h-24 rounded-2xl overflow-hidden bg-white/5 border border-white/10 shrink-0">
                    <img src={data.hero.image} alt="Profile Preview" className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="flex-1 space-y-2">
                  <input 
                    type="text" 
                    value={data.hero?.image || ''}
                    onChange={(e) => updateHero('image', e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-electric transition-all font-mono"
                    placeholder="/my-picture.jpg"
                  />
                  <p className="text-[10px] text-slate/50">Pro Tip: Place your image in the /public folder and use the relative path.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-xs uppercase font-mono text-slate tracking-widest">Biography Context</label>
              <textarea 
                rows="6"
                value={data.hero?.bio || ''}
                onChange={(e) => updateHero('bio', e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-electric transition-all resize-none leading-relaxed text-lg"
              />
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {!editingProject ? (
              <>
                <button 
                  onClick={() => setEditingProject({ id: Date.now().toString(), title: '', category: '', desc: '', tags: [], image: '', link: '', featured: true })}
                  className="flex items-center gap-2 px-6 py-4 bg-white/5 border border-dashed border-white/20 rounded-2xl hover:border-electric/50 hover:bg-electric/5 transition-all w-full justify-center group"
                >
                  <Plus size={20} className="group-hover:rotate-90 transition-transform" /> 
                  <span className="font-bold uppercase tracking-widest text-sm">Deploy New Project Record</span>
                </button>
                
                <div className="grid grid-cols-1 gap-6">
                  {data.projects?.map((project) => (
                    <div key={project.id} className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl flex items-center justify-between group hover:bg-white/[0.04] transition-all">
                      <div className="flex items-center gap-6">
                        <div className="w-20 h-20 rounded-2xl overflow-hidden border border-white/10 bg-black">
                          <img src={project.image} alt="" className="w-full h-full object-cover opacity-60" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                          <p className="text-xs text-electric font-mono uppercase tracking-widest">{project.category}</p>
                        </div>
                      </div>
                      <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button 
                          onClick={() => setEditingProject(project)}
                          className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-colors"
                        >
                          <Settings size={20} />
                        </button>
                        <button 
                          onClick={() => deleteProject(project.id)}
                          className="p-3 bg-drama/10 text-drama hover:bg-drama/20 rounded-xl transition-colors"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 space-y-6">
                <h3 className="text-2xl font-bold mb-8">Edit Project Entry</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-mono text-slate">Project Title</label>
                    <input 
                      type="text" 
                      value={editingProject.title}
                      onChange={(e) => setEditingProject({...editingProject, title: e.target.value})}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-electric"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-mono text-slate">Category</label>
                    <input 
                      type="text" 
                      value={editingProject.category}
                      onChange={(e) => setEditingProject({...editingProject, category: e.target.value})}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-electric"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-mono text-slate">Description</label>
                  <textarea 
                    rows="3"
                    value={editingProject.desc}
                    onChange={(e) => setEditingProject({...editingProject, desc: e.target.value})}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-electric resize-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-mono text-slate">Tags (comma separated)</label>
                  <input 
                    type="text" 
                    value={editingProject.tags?.join(', ') || ''}
                    onChange={(e) => setEditingProject({...editingProject, tags: e.target.value.split(',').map(t => t.trim())})}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-electric font-mono"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-mono text-slate">Thumbnail URL</label>
                    <input 
                      type="text" 
                      value={editingProject.image}
                      onChange={(e) => setEditingProject({...editingProject, image: e.target.value})}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-electric font-mono"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-mono text-slate">Source Link</label>
                    <input 
                      type="text" 
                      value={editingProject.link || ''}
                      onChange={(e) => setEditingProject({...editingProject, link: e.target.value})}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-electric font-mono"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3 py-2">
                  <input 
                    type="checkbox" 
                    id="featured"
                    checked={editingProject.featured}
                    onChange={(e) => setEditingProject({...editingProject, featured: e.target.checked})}
                    className="w-5 h-5 accent-electric"
                  />
                  <label htmlFor="featured" className="text-sm font-bold uppercase tracking-widest">Featured Project</label>
                </div>
                <div className="flex gap-4 pt-4">
                  <button 
                    onClick={() => saveProject(editingProject)}
                    className="flex-1 bg-electric text-black font-bold py-4 rounded-xl hover:scale-[1.02] transition-all"
                  >
                    Commit Changes
                  </button>
                  <button 
                    onClick={() => setEditingProject(null)}
                    className="flex-1 bg-white/5 border border-white/10 font-bold py-4 rounded-xl hover:bg-white/10 transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'competencies' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {!editingCompetency ? (
              <>
                <button 
                  onClick={() => setEditingCompetency({ title: '', desc: '', icon: 'Zap', accent: '#3B82F6', originalIndex: null })}
                  className="flex items-center gap-2 px-6 py-4 bg-white/5 border border-dashed border-white/20 rounded-2xl hover:border-electric/50 hover:bg-electric/5 transition-all w-full justify-center group"
                >
                  <Plus size={20} className="group-hover:rotate-90 transition-transform" /> 
                  <span className="font-bold uppercase tracking-widest text-sm">Add New Competency</span>
                </button>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {data.competencies?.map((comp, idx) => (
                    <div key={idx} className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl flex items-center justify-between group hover:bg-white/[0.04] transition-all" style={{ borderLeftColor: comp.accent, borderLeftWidth: '4px' }}>
                      <div className="flex flex-col gap-1">
                        <h3 className="text-xl font-bold">{comp.title}</h3>
                        <p className="text-xs text-slate font-mono uppercase tracking-widest truncate max-w-[200px]">{comp.desc}</p>
                      </div>
                      <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button 
                          onClick={() => setEditingCompetency({ ...comp, originalIndex: idx })}
                          className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-colors"
                        >
                          <Settings size={20} />
                        </button>
                        <button 
                          onClick={() => deleteCompetency(idx)}
                          className="p-3 bg-drama/10 text-drama hover:bg-drama/20 rounded-xl transition-colors"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 space-y-6">
                <h3 className="text-2xl font-bold mb-8">Edit Competency</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-mono text-slate">Title</label>
                    <input 
                      type="text" 
                      value={editingCompetency.title}
                      onChange={(e) => setEditingCompetency({...editingCompetency, title: e.target.value})}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-electric"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-mono text-slate">Icon (Lucide Name)</label>
                    <input 
                      type="text" 
                      value={editingCompetency.icon}
                      onChange={(e) => setEditingCompetency({...editingCompetency, icon: e.target.value})}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-electric"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-mono text-slate">Description</label>
                  <textarea 
                    rows="3"
                    value={editingCompetency.desc}
                    onChange={(e) => setEditingCompetency({...editingCompetency, desc: e.target.value})}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-electric resize-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-mono text-slate">Accent Color (Hex)</label>
                  <div className="flex gap-4">
                    <input 
                      type="color" 
                      value={editingCompetency.accent}
                      onChange={(e) => setEditingCompetency({...editingCompetency, accent: e.target.value})}
                      className="h-12 w-20 bg-transparent cursor-pointer"
                    />
                    <input 
                      type="text" 
                      value={editingCompetency.accent}
                      onChange={(e) => setEditingCompetency({...editingCompetency, accent: e.target.value})}
                      className="flex-1 bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-electric font-mono"
                    />
                  </div>
                </div>
                <div className="flex gap-4 pt-4">
                  <button 
                    onClick={() => {
                      const { originalIndex, ...comp } = editingCompetency;
                      saveCompetency(comp, originalIndex);
                    }}
                    className="flex-1 bg-electric text-black font-bold py-4 rounded-xl hover:scale-[1.02] transition-all"
                  >
                    Commit Changes
                  </button>
                  <button 
                    onClick={() => setEditingCompetency(null)}
                    className="flex-1 bg-white/5 border border-white/10 font-bold py-4 rounded-xl hover:bg-white/10 transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'stats' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.stats?.map((stat, idx) => (
                <div key={idx} className="p-8 bg-white/[0.02] border border-white/10 rounded-3xl space-y-6 group">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono text-electric uppercase tracking-[0.2em]">Data Point #{idx + 1}</span>
                    <button 
                      onClick={() => {
                        if (window.confirm('Erase this data point?')) {
                          const newStats = data.stats.filter((_, i) => i !== idx)
                          updateData({ ...data, stats: newStats })
                        }
                      }}
                      className="p-2 text-drama hover:bg-drama/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-mono text-slate">Value</label>
                      <input 
                        type="text" 
                        value={stat.value}
                        onChange={(e) => {
                          const newStats = [...data.stats]
                          newStats[idx].value = e.target.value
                          updateData({ ...data, stats: newStats })
                        }}
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-electric font-black text-2xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-mono text-slate">Label</label>
                      <input 
                        type="text" 
                        value={stat.label}
                        onChange={(e) => {
                          const newStats = [...data.stats]
                          newStats[idx].label = e.target.value
                          updateData({ ...data, stats: newStats })
                        }}
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-electric font-bold"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-mono text-slate">Subtext / Detail</label>
                    <input 
                      type="text" 
                      value={stat.sub || ''}
                      onChange={(e) => {
                        const newStats = [...data.stats]
                        newStats[idx].sub = e.target.value
                        updateData({ ...data, stats: newStats })
                      }}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-electric text-slate"
                    />
                  </div>
                </div>
              ))}
            </div>
            <button 
              onClick={() => {
                updateData({ ...data, stats: [...(data.stats || []), { label: 'New Stat', value: '0', sub: '' }] })
              }}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-white/5 border border-dashed border-white/20 rounded-2xl hover:border-electric/50 hover:bg-electric/5 transition-all group"
            >
              <Plus size={20} className="group-hover:rotate-90 transition-transform" /> 
              <span className="font-bold uppercase tracking-widest text-sm">Add New Data Point</span>
            </button>
          </div>
        )}

        {activeTab === 'affiliations' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8">
              <div className="flex justify-between items-center mb-8">
                 <h3 className="text-xl font-bold uppercase tracking-widest">Network Nodes</h3>
                 <button 
                   onClick={() => {
                     const name = prompt('Enter affiliation name:')
                     if (name) updateData({ ...data, affiliations: [...(data.affiliations || []), { name, logo: '' }] })
                   }}
                   className="p-3 bg-electric/10 text-electric hover:bg-electric/20 rounded-xl transition-colors flex items-center gap-2"
                 >
                   <Plus size={18} /> Add Affiliation
                 </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.affiliations?.map((org, idx) => {
                  const isString = typeof org === 'string'
                  const name = isString ? org : org.name
                  const logo = isString ? '' : org.logo
                  
                  return (
                    <div key={idx} className="flex flex-col p-5 bg-black/40 border border-white/5 rounded-2xl group hover:border-electric/30 transition-all gap-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center font-mono text-xs text-slate">
                            {idx + 1}
                          </div>
                          <span className="font-bold tracking-tight">{name}</span>
                        </div>
                        <button 
                          onClick={() => {
                            if (window.confirm('Remove this node?')) {
                              updateData({ ...data, affiliations: data.affiliations.filter((_, i) => i !== idx) })
                            }
                          }}
                          className="p-2 text-drama hover:bg-drama/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                      
                      <div className="space-y-3 pt-2 border-t border-white/5">
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase font-mono text-slate">Name</label>
                          <input 
                            type="text" 
                            value={name}
                            onChange={(e) => {
                              const newAffiliations = [...data.affiliations]
                              newAffiliations[idx] = { name: e.target.value, logo }
                              updateData({ ...data, affiliations: newAffiliations })
                            }}
                            className="w-full bg-black/50 border border-white/10 rounded-lg px-3 py-2 outline-none focus:border-electric text-sm"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase font-mono text-slate">Logo URL (Optional)</label>
                          <input 
                            type="text" 
                            value={logo || ''}
                            onChange={(e) => {
                              const newAffiliations = [...data.affiliations]
                              newAffiliations[idx] = { name, logo: e.target.value }
                              updateData({ ...data, affiliations: newAffiliations })
                            }}
                            placeholder="https://..."
                            className="w-full bg-black/50 border border-white/10 rounded-lg px-3 py-2 outline-none focus:border-electric text-sm"
                          />
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'manifesto' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold uppercase tracking-widest">Core Beliefs</h3>
                <button 
                  onClick={() => {
                    const line = prompt('Enter new manifesto line:')
                    if (line) {
                      const newManifesto = data.manifesto || { lines: [] }
                      updateData({ ...data, manifesto: { lines: [...newManifesto.lines, line] } })
                    }
                  }}
                  className="p-3 bg-electric/10 text-electric hover:bg-electric/20 rounded-xl transition-colors flex items-center gap-2"
                >
                  <Plus size={18} /> Add Line
                </button>
              </div>
              
              <div className="space-y-4">
                {data.manifesto?.lines?.map((line, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <input 
                      type="text" 
                      value={line}
                      onChange={(e) => {
                        const newLines = [...data.manifesto.lines]
                        newLines[idx] = e.target.value
                        updateData({ ...data, manifesto: { lines: newLines } })
                      }}
                      className="flex-1 bg-black/50 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-electric text-lg italic"
                    />
                    <button 
                      onClick={() => {
                        if (window.confirm('Remove this line?')) {
                          updateData({ ...data, manifesto: { lines: data.manifesto.lines.filter((_, i) => i !== idx) } })
                        }
                      }}
                      className="p-4 text-drama hover:bg-drama/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 space-y-6">
              <h3 className="text-xl font-bold uppercase tracking-widest mb-6">Contact & Social Links</h3>
              
              <div className="space-y-4">
                <label className="text-xs uppercase font-mono text-slate tracking-widest">Headline</label>
                <input 
                  type="text" 
                  value={data.contact?.headline || ''}
                  onChange={(e) => updateContact('headline', e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-electric text-xl font-bold"
                />
              </div>

              <div className="space-y-4">
                <label className="text-xs uppercase font-mono text-slate tracking-widest">Subtext</label>
                <textarea 
                  rows="3"
                  value={data.contact?.subtext || ''}
                  onChange={(e) => updateContact('subtext', e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-electric resize-none text-lg"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-mono text-slate">Email Address</label>
                  <input 
                    type="email" 
                    value={data.contact?.email || ''}
                    onChange={(e) => updateContact('email', e.target.value)}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-electric font-mono"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-mono text-slate">LinkedIn URL</label>
                  <input 
                    type="url" 
                    value={data.contact?.linkedin || ''}
                    onChange={(e) => updateContact('linkedin', e.target.value)}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-electric font-mono"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-mono text-slate">GitHub URL</label>
                  <input 
                    type="url" 
                    value={data.contact?.github || ''}
                    onChange={(e) => updateContact('github', e.target.value)}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-electric font-mono"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-mono text-slate">X / Twitter URL</label>
                  <input 
                    type="url" 
                    value={data.contact?.twitter || ''}
                    onChange={(e) => updateContact('twitter', e.target.value)}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-electric font-mono"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'config' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-10 text-center">
              <div className="w-20 h-20 bg-electric/20 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-electric/40">
                <Settings className="text-electric" size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4">Database Protocol</h2>
              <p className="text-slate max-w-xl mx-auto mb-10 leading-relaxed">
                Changes made in this interface are now synced directly with your MongoDB database via the backend API.
              </p>

              <div className="mt-16 pt-12 border-t border-white/5">
                <h3 className="text-xl font-bold mb-4 text-drama">Factory Reset</h3>
                <p className="text-slate text-sm mb-8">
                  Wipe database changes and revert to the static data defined in <code className="text-electric">portfolioData.js</code>. 
                  This action will overwrite current data in MongoDB.
                </p>
                <button 
                  onClick={() => {
                    if (window.confirm('Are you sure you want to revert to factory defaults? All database changes will be lost.')) {
                      resetData()
                      alert('Database reset to initial configuration.')
                    }
                  }}
                  className="px-8 py-3 border border-drama/30 text-drama hover:bg-drama/10 rounded-full font-bold transition-all"
                >
                  INITIALIZE SYSTEM RESET
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default Admin
