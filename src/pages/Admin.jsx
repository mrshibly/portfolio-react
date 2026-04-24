import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  Lock, Save, Plus, Trash2, LayoutDashboard, Settings, LogOut, 
  ChevronRight, User, BookOpen, Mail, Star, Briefcase, Award, 
  FileText, GraduationCap, Trophy, Cpu, ChevronUp, ChevronDown, Globe 
} from 'lucide-react'
import { usePortfolioData } from '../hooks/usePortfolioData'

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const { data, updateData, resetData } = usePortfolioData()
  const [activeTab, setActiveTab] = useState('hero')
  
  const [editingProject, setEditingProject] = useState(null)
  const [editingCompetency, setEditingCompetency] = useState(null)
  const [editingExperience, setEditingExperience] = useState(null)
  const [editingLeadership, setEditingLeadership] = useState(null)
  const [editingEducation, setEditingEducation] = useState(null)
  const [editingCertification, setEditingCertification] = useState(null)
  const [editingTechStack, setEditingTechStack] = useState(null)

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
        headers: { 'Authorization': password }
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

  const moveItem = (arrayKey, index, direction) => {
    const arr = [...(data[arrayKey] || [])]
    const newIndex = index + direction
    if (newIndex >= 0 && newIndex < arr.length) {
      [arr[index], arr[newIndex]] = [arr[newIndex], arr[index]]
      updateData({ ...data, [arrayKey]: arr })
    }
  }

  // Generic CRUD helpers
  const deleteItem = (key, index) => {
    if (window.confirm(`Permanently delete this entry from ${key}?`)) {
      updateData({ ...data, [key]: data[key].filter((_, i) => i !== index) })
    }
  }

  const saveItem = (key, item, originalIndex, setEditor) => {
    const arr = [...(data[key] || [])]
    if (originalIndex !== null && originalIndex !== undefined) {
      arr[originalIndex] = item
    } else {
      arr.push(item)
    }
    updateData({ ...data, [key]: arr })
    setEditor(null)
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#080808] flex items-center justify-center p-6 font-inter">
        <div className="w-full max-w-md bg-white/[0.02] border border-white/10 p-12 rounded-[2.5rem] backdrop-blur-3xl shadow-2xl relative overflow-hidden group">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-electric/10 rounded-full blur-3xl group-hover:bg-electric/20 transition-all duration-1000" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-drama/10 rounded-full blur-3xl group-hover:bg-drama/20 transition-all duration-1000" />
          
          <div className="relative z-10">
            <div className="w-20 h-20 bg-electric/10 rounded-3xl flex items-center justify-center mx-auto mb-10 border border-electric/20 shadow-[0_0_30px_rgba(0,229,255,0.1)]">
              <Lock className="text-electric" size={32} />
            </div>
            <h2 className="text-4xl font-black text-center mb-2 tracking-tighter uppercase italic">Access <span className="text-electric">Protocol</span></h2>
            <p className="text-slate/40 text-center mb-10 text-[10px] uppercase font-mono tracking-[0.4em]">Secure Terminal Connection</p>
            
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-mono text-slate/40 tracking-widest ml-1">Entry_Key</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-electric/50 transition-all font-mono text-center tracking-[0.5em] text-lg"
                  placeholder="••••••••"
                />
              </div>
              <button className="w-full py-5 bg-white text-black rounded-full font-black hover:bg-electric hover:text-white transition-all duration-500 uppercase tracking-widest text-[10px] shadow-[0_10px_30px_rgba(255,255,255,0.1)] hover:shadow-[0_10px_30px_rgba(0,229,255,0.3)]">
                Initialize_Auth_Sequence
              </button>
            </form>
            
            <Link to="/" className="block text-center mt-10 text-[10px] text-slate/30 hover:text-white transition-colors uppercase tracking-[0.3em] font-mono">
              [ Abort_Mission ]
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const tabs = [
    { id: 'hero', label: 'Identity', icon: User },
    { id: 'projects', label: 'Projects', icon: LayoutDashboard },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'leadership', label: 'Leadership', icon: Star },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'certifications', label: 'Awards', icon: Trophy },
    { id: 'techstack', label: 'Stack', icon: Cpu },
    { id: 'competencies', label: 'Core', icon: Award },
    { id: 'manifesto', label: 'Manifesto', icon: BookOpen },
    { id: 'contact', label: 'Access', icon: Mail },
    { id: 'config', label: 'System', icon: Settings },
  ]

  return (
    <div className="min-h-screen bg-obsidian text-white flex flex-col lg:flex-row font-inter selection:bg-electric/30">
      {/* Sidebar */}
      <aside className="w-full lg:w-80 border-r border-white/5 bg-black/40 backdrop-blur-3xl sticky top-0 h-fit lg:h-screen z-50 overflow-y-auto custom-scrollbar">
        <div className="p-10">
          <div className="flex items-center gap-4 mb-12 group">
            <div className="w-10 h-10 bg-electric rounded-2xl shadow-[0_0_20px_rgba(0,229,255,0.4)] flex items-center justify-center">
              <Cpu size={20} className="text-black" />
            </div>
            <div>
              <span className="font-black tracking-tighter text-2xl block leading-none">ADMIN<span className="text-drama italic">.OS</span></span>
              <span className="text-[8px] font-mono text-electric uppercase tracking-[0.3em] mt-1 block">Root_Session::Active</span>
            </div>
          </div>
          
          <nav className="space-y-2">
            {tabs.map(item => (
              <button 
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-500 group ${
                  activeTab === item.id 
                    ? 'bg-electric text-black font-black shadow-[0_10px_20px_rgba(0,229,255,0.2)]' 
                    : 'hover:bg-white/5 text-slate/60 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-4">
                  <item.icon size={18} className={activeTab === item.id ? 'text-black' : 'text-slate group-hover:text-electric transition-colors'} /> 
                  <span className="text-[10px] uppercase font-mono tracking-widest">{item.label}</span>
                </div>
                <ChevronRight size={12} className={activeTab === item.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 transition-all'} />
              </button>
            ))}
          </nav>

          <div className="mt-12 pt-10 border-t border-white/5">
            <button 
              onClick={() => {
                localStorage.removeItem('admin_token')
                setIsAuthenticated(false)
              }} 
              className="flex items-center gap-3 text-drama/60 hover:text-drama transition-all uppercase text-[10px] font-mono tracking-[0.2em] group"
            >
              <LogOut size={16} className="group-hover:-translate-x-1 transition-transform" /> 
              Terminate_Session
            </button>
          </div>
        </div>
      </aside>

      {/* Main Workspace */}
      <main className="flex-1 min-h-screen bg-[#080808] relative overflow-hidden">
        {/* Background Grids */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
        
        <div className="max-w-6xl mx-auto p-8 lg:p-20 relative z-10">
          <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <div className="animate-in fade-in slide-in-from-left-8 duration-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-[1px] bg-electric/50" />
                <p className="text-electric font-mono text-[10px] uppercase tracking-[0.4em]">Kernel_Management::v4.0.2</p>
              </div>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                {activeTab} <span className="text-white/10 italic">{activeTab === 'hero' ? 'Identity' : 'Module'}</span>
              </h1>
            </div>
            
            <button 
              onClick={handleSave}
              className="group relative px-10 py-5 bg-white text-black rounded-full font-black hover:bg-electric hover:text-white transition-all duration-500 shadow-[0_15px_30px_rgba(255,255,255,0.05)] hover:shadow-[0_15px_30px_rgba(0,229,255,0.2)] overflow-hidden animate-in fade-in slide-in-from-right-8 duration-700"
            >
              <span className="relative z-10 flex items-center gap-3 uppercase tracking-widest text-[10px]">
                <Save size={18} />
                Sync_to_Database
              </span>
            </button>
          </header>

          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            {activeTab === 'hero' && (
              <div className="space-y-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase font-mono text-slate/40 tracking-[0.3em]">Operational_Alias</label>
                    <input 
                      type="text" 
                      value={data.hero?.name || ''}
                      onChange={(e) => updateHero('name', e.target.value)}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-5 outline-none focus:border-electric transition-all text-xl font-bold tracking-tight"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase font-mono text-slate/40 tracking-[0.3em]">System_Role</label>
                    <input 
                      type="text" 
                      value={data.hero?.title || ''}
                      onChange={(e) => updateHero('title', e.target.value)}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-5 outline-none focus:border-electric transition-all text-xl font-bold tracking-tight"
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <label className="text-[10px] uppercase font-mono text-slate/40 tracking-[0.3em]">Biometric_Link (Avatar URL)</label>
                  <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-white/[0.02] border border-white/5 rounded-[2rem]">
                    <div className="w-32 h-32 rounded-3xl overflow-hidden bg-white/5 border border-white/10 shrink-0 shadow-2xl">
                      <img src={data.hero?.image} alt="Biometric Preview" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                    </div>
                    <div className="flex-1 space-y-4 w-full">
                      <input 
                        type="text" 
                        value={data.hero?.image || ''}
                        onChange={(e) => updateHero('image', e.target.value)}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-electric transition-all font-mono text-sm"
                        placeholder="/public/identity/avatar.jpg"
                      />
                      <p className="text-[9px] text-slate/30 uppercase tracking-widest italic flex items-center gap-2">
                        <Globe size={10} /> Local assets should reside in the /public directory for resolution
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] uppercase font-mono text-slate/40 tracking-[0.3em]">Core_Narrative</label>
                  <textarea 
                    rows="8"
                    value={data.hero?.bio || ''}
                    onChange={(e) => updateHero('bio', e.target.value)}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-[2rem] px-8 py-8 outline-none focus:border-electric transition-all resize-none leading-relaxed text-lg italic text-slate/80"
                  />
                </div>

                <div className="pt-12 border-t border-white/5">
                  <label className="text-[10px] uppercase font-mono text-slate/40 tracking-[0.3em] mb-4 block">Dossier_Export (Resume URL)</label>
                  <div className="flex items-center gap-4 bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5">
                    <FileText className="text-electric" size={20} />
                    <input 
                      type="text" 
                      value={data.resumeUrl || ''}
                      onChange={(e) => updateData({ ...data, resumeUrl: e.target.value })}
                      className="flex-1 bg-transparent outline-none font-mono text-sm text-electric"
                      placeholder="https://storage.provider.com/resume.pdf"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="space-y-12">
                {!editingProject ? (
                  <>
                    <button 
                      onClick={() => setEditingProject({ id: Date.now().toString(), title: '', category: '', desc: '', tags: [], image: '', link: '', liveUrl: '', featured: true })}
                      className="w-full group p-10 bg-white/[0.02] border border-dashed border-white/10 rounded-[2.5rem] hover:bg-electric/5 hover:border-electric/30 transition-all duration-700 flex flex-col items-center justify-center gap-4"
                    >
                      <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-90 transition-all duration-700">
                        <Plus size={32} className="text-slate group-hover:text-electric" />
                      </div>
                      <span className="font-black uppercase tracking-[0.4em] text-[10px] text-slate/40 group-hover:text-electric">Initialize_New_Project_Entry</span>
                    </button>
                    
                    <div className="grid grid-cols-1 gap-6">
                      {data.projects?.map((project, idx) => (
                        <div key={project.id} className="group p-8 bg-white/[0.01] border border-white/5 rounded-[2rem] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-500 flex flex-col md:flex-row items-center justify-between gap-8">
                          <div className="flex items-center gap-8 w-full">
                            <div className="flex flex-col gap-2">
                              <button onClick={() => moveItem('projects', idx, -1)} className="p-2 text-slate/20 hover:text-electric transition-colors" disabled={idx === 0}><ChevronUp size={16} /></button>
                              <button onClick={() => moveItem('projects', idx, 1)} className="p-2 text-slate/20 hover:text-electric transition-colors" disabled={idx === (data.projects?.length || 0) - 1}><ChevronDown size={16} /></button>
                            </div>
                            <div className="w-24 h-24 rounded-2xl overflow-hidden border border-white/10 bg-black shrink-0 relative">
                              <img src={project.image} alt="" className="w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" />
                              {project.featured && <div className="absolute top-2 right-2 w-2 h-2 bg-electric rounded-full shadow-[0_0_10px_rgba(0,229,255,0.8)]" />}
                            </div>
                            <div className="flex-1">
                              <h3 className="text-2xl font-black mb-1 group-hover:text-electric transition-colors uppercase tracking-tighter">{project.title}</h3>
                              <div className="flex flex-wrap gap-4 items-center">
                                <span className="text-[10px] font-mono text-electric/60 uppercase tracking-[0.2em]">{project.category}</span>
                                <div className="w-1 h-1 bg-white/10 rounded-full" />
                                <span className="text-[10px] font-mono text-slate/40 uppercase tracking-[0.2em]">{project.tags?.length || 0} Components</span>
                                {project.liveUrl && <span className="text-[10px] font-mono text-green-500/60 uppercase tracking-[0.2em] flex items-center gap-1.5"><Globe size={10} /> Online</span>}
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-4 w-full md:w-auto">
                            <button 
                              onClick={() => setEditingProject(project)}
                              className="flex-1 md:flex-none px-6 py-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all flex items-center justify-center gap-2"
                            >
                              <Settings size={18} />
                              <span className="uppercase text-[10px] font-bold tracking-widest md:hidden">Edit</span>
                            </button>
                            <button 
                              onClick={() => deleteItem('projects', idx)}
                              className="flex-1 md:flex-none px-6 py-4 bg-drama/10 text-drama hover:bg-drama/20 rounded-xl transition-all flex items-center justify-center gap-2"
                            >
                              <Trash2 size={18} />
                              <span className="uppercase text-[10px] font-bold tracking-widest md:hidden">Wipe</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="bg-white/[0.02] border border-white/10 rounded-[3rem] p-12 space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-500">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-3xl font-black uppercase tracking-tighter italic">Edit <span className="text-electric">Component</span></h3>
                      <button onClick={() => setEditingProject(null)} className="text-[10px] font-mono uppercase text-slate/40 hover:text-white transition-colors tracking-widest">[ Abort_Edit ]</button>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-10">
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase font-mono text-slate/40 tracking-widest">Descriptor_Title</label>
                        <input 
                          type="text" 
                          value={editingProject.title}
                          onChange={(e) => setEditingProject({...editingProject, title: e.target.value})}
                          className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-electric transition-all"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase font-mono text-slate/40 tracking-widest">Category_Tag</label>
                        <input 
                          type="text" 
                          value={editingProject.category}
                          onChange={(e) => setEditingProject({...editingProject, category: e.target.value})}
                          className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-electric transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] uppercase font-mono text-slate/40 tracking-widest">Project_Brief</label>
                      <textarea 
                        rows="4"
                        value={editingProject.desc}
                        onChange={(e) => setEditingProject({...editingProject, desc: e.target.value})}
                        className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-electric transition-all resize-none italic"
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] uppercase font-mono text-slate/40 tracking-widest">Technology_Stack (Comma-Separated)</label>
                      <input 
                        type="text" 
                        value={editingProject.tags?.join(', ') || ''}
                        onChange={(e) => setEditingProject({...editingProject, tags: e.target.value.split(',').map(t => t.trim())})}
                        className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-electric transition-all font-mono text-xs text-electric"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase font-mono text-slate/40 tracking-widest">Visual_Asset_Path</label>
                        <input 
                          type="text" 
                          value={editingProject.image}
                          onChange={(e) => setEditingProject({...editingProject, image: e.target.value})}
                          className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-electric transition-all font-mono text-xs"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase font-mono text-slate/40 tracking-widest">Repository_Link</label>
                        <input 
                          type="text" 
                          value={editingProject.link || ''}
                          onChange={(e) => setEditingProject({...editingProject, link: e.target.value})}
                          className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-electric transition-all font-mono text-xs"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] uppercase font-mono text-slate/40 tracking-widest">Live_Production_Endpoint</label>
                      <input 
                        type="text" 
                        value={editingProject.liveUrl || ''}
                        onChange={(e) => setEditingProject({...editingProject, liveUrl: e.target.value})}
                        className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-green-500/50 transition-all font-mono text-xs text-green-500"
                        placeholder="https://production-ready-app.com"
                      />
                    </div>

                    <div className="flex items-center gap-4 p-6 bg-white/[0.03] border border-white/5 rounded-2xl">
                      <input 
                        type="checkbox" 
                        id="featured"
                        checked={editingProject.featured}
                        onChange={(e) => setEditingProject({...editingProject, featured: e.target.checked})}
                        className="w-6 h-6 rounded-lg accent-electric cursor-pointer"
                      />
                      <label htmlFor="featured" className="text-xs font-bold uppercase tracking-[0.2em] cursor-pointer">Promote_to_Featured_State</label>
                    </div>

                    <div className="flex gap-6 pt-6">
                      <button 
                        onClick={() => saveItem('projects', editingProject, data.projects.findIndex(p => p.id === editingProject.id) !== -1 ? data.projects.findIndex(p => p.id === editingProject.id) : null, setEditingProject)}
                        className="flex-1 bg-white text-black font-black py-5 rounded-full hover:bg-electric hover:text-white transition-all duration-500 uppercase tracking-widest text-[10px] shadow-xl"
                      >
                        Commit_Changes
                      </button>
                      <button 
                        onClick={() => setEditingProject(null)}
                        className="flex-1 bg-white/5 border border-white/10 font-black py-5 rounded-full hover:bg-white/10 transition-all uppercase tracking-widest text-[10px]"
                      >
                        Abort_Sequence
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'experience' && (
              <div className="space-y-12">
                {!editingExperience ? (
                  <>
                    <button 
                      onClick={() => setEditingExperience({ title: '', company: '', duration: '', desc: '', logo: '', originalIndex: null })}
                      className="w-full group p-10 bg-white/[0.02] border border-dashed border-white/10 rounded-[2.5rem] hover:bg-electric/5 hover:border-electric/30 transition-all duration-700 flex flex-col items-center justify-center gap-4"
                    >
                      <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center group-hover:scale-110 transition-all">
                        <Plus size={32} className="text-slate group-hover:text-electric" />
                      </div>
                      <span className="font-black uppercase tracking-[0.4em] text-[10px] text-slate/40 group-hover:text-electric">Append_Experience_Log</span>
                    </button>
                    
                    <div className="grid grid-cols-1 gap-6">
                      {data.experience?.map((exp, idx) => (
                        <div key={idx} className="group p-8 bg-white/[0.01] border border-white/5 rounded-[2rem] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-500 flex flex-col md:flex-row items-center justify-between gap-8 border-l-[3px] border-l-electric">
                          <div className="flex items-center gap-8 flex-1">
                            <div className="flex flex-col gap-2">
                              <button onClick={() => moveItem('experience', idx, -1)} className="p-2 text-slate/20 hover:text-electric transition-colors" disabled={idx === 0}><ChevronUp size={16} /></button>
                              <button onClick={() => moveItem('experience', idx, 1)} className="p-2 text-slate/20 hover:text-electric transition-colors" disabled={idx === (data.experience?.length || 0) - 1}><ChevronDown size={16} /></button>
                            </div>
                            <div className="w-20 h-20 rounded-2xl bg-black border border-white/5 flex items-center justify-center p-4">
                              {exp.logo ? <img src={exp.logo} alt="" className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all" /> : <Briefcase className="text-electric/40" size={32} />}
                            </div>
                            <div>
                              <h3 className="text-2xl font-black mb-1 uppercase tracking-tighter">{exp.title}</h3>
                              <p className="text-[10px] font-mono text-electric uppercase tracking-[0.3em] mb-2">{exp.company}</p>
                              <span className="text-[10px] font-mono text-slate/30 uppercase tracking-widest">{exp.duration}</span>
                            </div>
                          </div>
                          <div className="flex gap-4">
                            <button onClick={() => setEditingExperience({...exp, originalIndex: idx})} className="p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all"><Settings size={18} /></button>
                            <button onClick={() => deleteItem('experience', idx)} className="p-4 bg-drama/10 text-drama hover:bg-drama/20 rounded-xl transition-all"><Trash2 size={18} /></button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="bg-white/[0.02] border border-white/10 rounded-[3rem] p-12 space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-500">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-3xl font-black uppercase tracking-tighter italic">Update <span className="text-electric">Tenure</span></h3>
                      <button onClick={() => setEditingExperience(null)} className="text-[10px] font-mono uppercase text-slate/40 hover:text-white transition-colors tracking-widest">[ Cancel ]</button>
                    </div>
                    <div className="grid md:grid-cols-2 gap-10">
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase font-mono text-slate/40 tracking-widest">Role_Title</label>
                        <input 
                          type="text" 
                          value={editingExperience.title}
                          onChange={(e) => setEditingExperience({...editingExperience, title: e.target.value})}
                          className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-electric"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase font-mono text-slate/40 tracking-widest">Organization</label>
                        <input 
                          type="text" 
                          value={editingExperience.company}
                          onChange={(e) => setEditingExperience({...editingExperience, company: e.target.value})}
                          className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-electric"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-10">
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase font-mono text-slate/40 tracking-widest">Duration_Period</label>
                        <input 
                          type="text" 
                          value={editingExperience.duration}
                          onChange={(e) => setEditingExperience({...editingExperience, duration: e.target.value})}
                          className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-electric"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase font-mono text-slate/40 tracking-widest">Corporate_Asset_Logo</label>
                        <input 
                          type="text" 
                          value={editingExperience.logo || ''}
                          onChange={(e) => setEditingExperience({...editingExperience, logo: e.target.value})}
                          className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-electric font-mono text-xs"
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase font-mono text-slate/40 tracking-widest">Mission_Objectives</label>
                      <textarea 
                        rows="4"
                        value={editingExperience.desc}
                        onChange={(e) => setEditingExperience({...editingExperience, desc: e.target.value})}
                        className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-electric resize-none italic"
                      />
                    </div>
                    <div className="flex gap-6 pt-6">
                      <button 
                        onClick={() => {
                          const { originalIndex, ...exp } = editingExperience;
                          saveItem('experience', exp, originalIndex, setEditingExperience);
                        }}
                        className="flex-1 bg-white text-black font-black py-5 rounded-full hover:bg-electric hover:text-white transition-all duration-500 uppercase tracking-widest text-[10px]"
                      >
                        Commit_to_History
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'leadership' && (
              <div className="space-y-12">
                {!editingLeadership ? (
                  <>
                    <button 
                      onClick={() => setEditingLeadership({ title: '', org: '', duration: '', desc: '', logo: '', originalIndex: null })}
                      className="w-full group p-10 bg-white/[0.02] border border-dashed border-white/10 rounded-[2.5rem] hover:bg-drama/5 hover:border-drama/30 transition-all duration-700 flex flex-col items-center justify-center gap-4"
                    >
                      <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center group-hover:scale-110 transition-all">
                        <Plus size={32} className="text-slate group-hover:text-drama" />
                      </div>
                      <span className="font-black uppercase tracking-[0.4em] text-[10px] text-slate/40 group-hover:text-drama">Record_Leadership_Influence</span>
                    </button>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {data.leadership?.map((item, idx) => (
                        <div key={idx} className="group p-10 bg-white/[0.01] border border-white/5 rounded-[2.5rem] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-500 flex flex-col gap-6 border-l-[3px] border-l-drama">
                          <div className="flex justify-between items-start">
                            <div className="flex items-center gap-5">
                              <div className="w-16 h-16 rounded-2xl bg-black border border-white/5 flex items-center justify-center p-3">
                                {item.logo ? <img src={item.logo} alt="" className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all" /> : <Award className="text-drama/40" size={24} />}
                              </div>
                              <div>
                                <h3 className="text-xl font-black uppercase tracking-tighter leading-tight">{item.title}</h3>
                                <p className="text-[9px] font-mono text-drama uppercase tracking-[0.2em]">{item.org}</p>
                              </div>
                            </div>
                            <div className="flex flex-col gap-2">
                              <button onClick={() => moveItem('leadership', idx, -1)} className="p-1 text-slate/20 hover:text-drama transition-colors" disabled={idx === 0}><ChevronUp size={14} /></button>
                              <button onClick={() => moveItem('leadership', idx, 1)} className="p-1 text-slate/20 hover:text-drama transition-colors" disabled={idx === (data.leadership?.length || 0) - 1}><ChevronDown size={14} /></button>
                            </div>
                          </div>
                          <p className="text-slate/60 text-sm italic line-clamp-3 leading-relaxed">{item.desc}</p>
                          <div className="flex justify-between items-center mt-auto pt-6 border-t border-white/5">
                            <span className="text-[9px] font-mono text-slate/30 uppercase tracking-[0.2em]">{item.duration}</span>
                            <div className="flex gap-2">
                              <button onClick={() => setEditingLeadership({...item, originalIndex: idx})} className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all"><Settings size={14} /></button>
                              <button onClick={() => deleteItem('leadership', idx)} className="p-3 bg-drama/10 text-drama hover:bg-drama/20 rounded-xl transition-all"><Trash2 size={14} /></button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="bg-white/[0.02] border border-white/10 rounded-[3rem] p-12 space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-500">
                    <div className="flex items-center justify-between">
                      <h3 className="text-3xl font-black uppercase tracking-tighter italic">Refine <span className="text-drama">Influence</span></h3>
                      <button onClick={() => setEditingLeadership(null)} className="text-[10px] font-mono uppercase text-slate/40 hover:text-white transition-colors tracking-widest">[ Discard ]</button>
                    </div>
                    <div className="grid md:grid-cols-2 gap-10">
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase font-mono text-slate/40 tracking-widest">Leadership_Title</label>
                        <input 
                          type="text" 
                          value={editingLeadership.title}
                          onChange={(e) => setEditingLeadership({...editingLeadership, title: e.target.value})}
                          className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-drama"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase font-mono text-slate/40 tracking-widest">Organization_Entity</label>
                        <input 
                          type="text" 
                          value={editingLeadership.org}
                          onChange={(e) => setEditingLeadership({...editingLeadership, org: e.target.value})}
                          className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-drama"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-10">
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase font-mono text-slate/40 tracking-widest">Active_Phase</label>
                        <input 
                          type="text" 
                          value={editingLeadership.duration}
                          onChange={(e) => setEditingLeadership({...editingLeadership, duration: e.target.value})}
                          className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-drama"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase font-mono text-slate/40 tracking-widest">Symbolic_Asset_URL</label>
                        <input 
                          type="text" 
                          value={editingLeadership.logo || ''}
                          onChange={(e) => setEditingLeadership({...editingLeadership, logo: e.target.value})}
                          className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-drama font-mono text-xs"
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase font-mono text-slate/40 tracking-widest">Contribution_Manifest</label>
                      <textarea 
                        rows="4"
                        value={editingLeadership.desc}
                        onChange={(e) => setEditingLeadership({...editingLeadership, desc: e.target.value})}
                        className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-drama resize-none italic"
                      />
                    </div>
                    <button 
                      onClick={() => {
                        const { originalIndex, ...item } = editingLeadership;
                        saveItem('leadership', item, originalIndex, setEditingLeadership);
                      }}
                      className="w-full bg-white text-black font-black py-5 rounded-full hover:bg-drama hover:text-white transition-all duration-500 uppercase tracking-widest text-[10px]"
                    >
                      Commit_Influence_Log
                    </button>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'education' && (
              <div className="space-y-12">
                {!editingEducation ? (
                  <>
                    <button 
                      onClick={() => setEditingEducation({ degree: '', institution: '', duration: '', desc: '', logo: '', originalIndex: null })}
                      className="w-full group p-10 bg-white/[0.02] border border-dashed border-white/10 rounded-[2.5rem] hover:bg-amber-400/5 hover:border-amber-400/30 transition-all duration-700 flex flex-col items-center justify-center gap-4"
                    >
                      <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center group-hover:scale-110 transition-all">
                        <Plus size={32} className="text-slate group-hover:text-amber-400" />
                      </div>
                      <span className="font-black uppercase tracking-[0.4em] text-[10px] text-slate/40 group-hover:text-amber-400">Register_Academic_Dossier</span>
                    </button>
                    
                    <div className="grid grid-cols-1 gap-6">
                      {data.education?.map((edu, idx) => (
                        <div key={idx} className="group p-8 bg-white/[0.01] border border-white/5 rounded-[2rem] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-500 flex flex-col md:flex-row items-center justify-between gap-8 border-l-[3px] border-l-amber-500">
                          <div className="flex items-center gap-8 flex-1">
                            <div className="flex flex-col gap-2">
                              <button onClick={() => moveItem('education', idx, -1)} className="p-2 text-slate/20 hover:text-amber-400 transition-colors" disabled={idx === 0}><ChevronUp size={16} /></button>
                              <button onClick={() => moveItem('education', idx, 1)} className="p-2 text-slate/20 hover:text-amber-400 transition-colors" disabled={idx === (data.education?.length || 0) - 1}><ChevronDown size={16} /></button>
                            </div>
                            <div className="w-20 h-20 rounded-2xl bg-black border border-white/5 flex items-center justify-center p-4">
                              {edu.logo ? <img src={edu.logo} alt="" className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all" /> : <GraduationCap className="text-amber-400/40" size={32} />}
                            </div>
                            <div>
                              <h3 className="text-2xl font-black mb-1 uppercase tracking-tighter">{edu.degree}</h3>
                              <p className="text-[10px] font-mono text-amber-500 uppercase tracking-[0.3em] mb-2">{edu.institution}</p>
                              <span className="text-[10px] font-mono text-slate/30 uppercase tracking-widest">{edu.duration}</span>
                            </div>
                          </div>
                          <div className="flex gap-4">
                            <button onClick={() => setEditingEducation({...edu, originalIndex: idx})} className="p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all"><Settings size={18} /></button>
                            <button onClick={() => deleteItem('education', idx)} className="p-4 bg-drama/10 text-drama hover:bg-drama/20 rounded-xl transition-all"><Trash2 size={18} /></button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="bg-white/[0.02] border border-white/10 rounded-[3rem] p-12 space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-500">
                    <div className="flex items-center justify-between">
                      <h3 className="text-3xl font-black uppercase tracking-tighter italic">Record <span className="text-amber-400">Academy</span></h3>
                      <button onClick={() => setEditingEducation(null)} className="text-[10px] font-mono uppercase text-slate/40 hover:text-white transition-colors tracking-widest">[ Abort ]</button>
                    </div>
                    <div className="grid md:grid-cols-2 gap-10">
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase font-mono text-slate/40 tracking-widest">Program_Manifest</label>
                        <input 
                          type="text" 
                          value={editingEducation.degree}
                          onChange={(e) => setEditingEducation({...editingEducation, degree: e.target.value})}
                          className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-amber-400"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase font-mono text-slate/40 tracking-widest">Institution_Core</label>
                        <input 
                          type="text" 
                          value={editingEducation.institution}
                          onChange={(e) => setEditingEducation({...editingEducation, institution: e.target.value})}
                          className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-10">
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase font-mono text-slate/40 tracking-widest">Cycle_Duration</label>
                        <input 
                          type="text" 
                          value={editingEducation.duration}
                          onChange={(e) => setEditingEducation({...editingEducation, duration: e.target.value})}
                          className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-amber-400"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase font-mono text-slate/40 tracking-widest">Institute_Asset_URL</label>
                        <input 
                          type="text" 
                          value={editingEducation.logo || ''}
                          onChange={(e) => setEditingEducation({...editingEducation, logo: e.target.value})}
                          className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-amber-400 font-mono text-xs"
                        />
                      </div>
                    </div>
                    <button 
                      onClick={() => {
                        const { originalIndex, ...edu } = editingEducation;
                        saveItem('education', edu, originalIndex, setEditingEducation);
                      }}
                      className="w-full bg-white text-black font-black py-5 rounded-full hover:bg-amber-400 hover:text-white transition-all duration-500 uppercase tracking-widest text-[10px]"
                    >
                      Commit_to_Academy_Log
                    </button>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'certifications' && (
              <div className="space-y-12">
                {!editingCertification ? (
                  <>
                    <button 
                      onClick={() => setEditingCertification({ title: '', issuer: '', date: '', link: '', icon: '', originalIndex: null })}
                      className="w-full group p-10 bg-white/[0.02] border border-dashed border-white/10 rounded-[2.5rem] hover:bg-electric/5 hover:border-electric/30 transition-all duration-700 flex flex-col items-center justify-center gap-4"
                    >
                      <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center group-hover:scale-110 transition-all">
                        <Plus size={32} className="text-slate group-hover:text-electric" />
                      </div>
                      <span className="font-black uppercase tracking-[0.4em] text-[10px] text-slate/40 group-hover:text-electric">Log_Merit_Acknowledgement</span>
                    </button>
                    
                    <div className="grid grid-cols-1 gap-6">
                      {data.certifications?.map((cert, idx) => (
                        <div key={idx} className="group p-8 bg-white/[0.01] border border-white/5 rounded-[2rem] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-500 flex flex-col md:flex-row items-center justify-between gap-8">
                          <div className="flex items-center gap-8 flex-1">
                            <div className="flex flex-col gap-2">
                              <button onClick={() => moveItem('certifications', idx, -1)} className="p-2 text-slate/20 hover:text-electric transition-colors" disabled={idx === 0}><ChevronUp size={16} /></button>
                              <button onClick={() => moveItem('certifications', idx, 1)} className="p-2 text-slate/20 hover:text-electric transition-colors" disabled={idx === (data.certifications?.length || 0) - 1}><ChevronDown size={16} /></button>
                            </div>
                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-electric/30 transition-all">
                              {cert.icon ? <img src={cert.icon} alt="" className="w-8 h-8 object-contain" /> : <Trophy className="text-electric/40" size={24} />}
                            </div>
                            <div>
                              <h3 className="text-xl font-black mb-1 uppercase tracking-tighter">{cert.title}</h3>
                              <p className="text-[10px] font-mono text-electric uppercase tracking-[0.2em]">{cert.issuer}</p>
                              <span className="text-[9px] font-mono text-slate/30 uppercase tracking-widest mt-1 block">{cert.date}</span>
                            </div>
                          </div>
                          <div className="flex gap-4">
                            <button onClick={() => setEditingCertification({...cert, originalIndex: idx})} className="p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all"><Settings size={18} /></button>
                            <button onClick={() => deleteItem('certifications', idx)} className="p-4 bg-drama/10 text-drama hover:bg-drama/20 rounded-xl transition-all"><Trash2 size={18} /></button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="bg-white/[0.02] border border-white/10 rounded-[3rem] p-12 space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-500">
                    <div className="flex items-center justify-between">
                      <h3 className="text-3xl font-black uppercase tracking-tighter italic">Acknowledge <span className="text-electric">Merit</span></h3>
                      <button onClick={() => setEditingCertification(null)} className="text-[10px] font-mono uppercase text-slate/40 hover:text-white transition-colors tracking-widest">[ Disconnect ]</button>
                    </div>
                    <div className="grid md:grid-cols-2 gap-10">
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase font-mono text-slate/40 tracking-widest">Recognition_Title</label>
                        <input 
                          type="text" 
                          value={editingCertification.title}
                          onChange={(e) => setEditingCertification({...editingCertification, title: e.target.value})}
                          className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-electric"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase font-mono text-slate/40 tracking-widest">Issuing_Authority</label>
                        <input 
                          type="text" 
                          value={editingCertification.issuer}
                          onChange={(e) => setEditingCertification({...editingCertification, issuer: e.target.value})}
                          className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-electric"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-10">
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase font-mono text-slate/40 tracking-widest">Acknowledgement_Cycle</label>
                        <input 
                          type="text" 
                          value={editingCertification.date}
                          onChange={(e) => setEditingCertification({...editingCertification, date: e.target.value})}
                          className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-electric"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase font-mono text-slate/40 tracking-widest">Verification_Link</label>
                        <input 
                          type="text" 
                          value={editingCertification.link || ''}
                          onChange={(e) => setEditingCertification({...editingCertification, link: e.target.value})}
                          className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-electric font-mono text-xs"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase font-mono text-slate/40 tracking-widest">Visual_Identity_Icon</label>
                        <input 
                          type="text" 
                          value={editingCertification.icon || ''}
                          onChange={(e) => setEditingCertification({...editingCertification, icon: e.target.value})}
                          className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-electric font-mono text-xs"
                        />
                      </div>
                    </div>
                    <button 
                      onClick={() => {
                        const { originalIndex, ...cert } = editingCertification;
                        saveItem('certifications', cert, originalIndex, setEditingCertification);
                      }}
                      className="w-full bg-white text-black font-black py-5 rounded-full hover:bg-electric hover:text-white transition-all duration-500 uppercase tracking-widest text-[10px]"
                    >
                      Commit_Merit_Acknowledgement
                    </button>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'techstack' && (
              <div className="space-y-12">
                {!editingTechStack ? (
                  <>
                    <button 
                      onClick={() => setEditingTechStack({ name: '', icon: '', category: 'AI / ML', originalIndex: null })}
                      className="w-full group p-10 bg-white/[0.02] border border-dashed border-white/10 rounded-[2.5rem] hover:bg-electric/5 hover:border-electric/30 transition-all duration-700 flex flex-col items-center justify-center gap-4"
                    >
                      <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center group-hover:scale-110 transition-all">
                        <Plus size={32} className="text-slate group-hover:text-electric" />
                      </div>
                      <span className="font-black uppercase tracking-[0.4em] text-[10px] text-slate/40 group-hover:text-electric">Add_to_System_Arsenal</span>
                    </button>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                      {data.techStack?.map((tech, idx) => (
                        <div key={idx} className="group p-6 bg-white/[0.01] border border-white/5 rounded-[1.5rem] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-500 flex flex-col items-center text-center gap-4 relative overflow-hidden">
                          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-1">
                            <button onClick={() => moveItem('techStack', idx, -1)} className="p-1 text-slate/20 hover:text-electric" disabled={idx === 0}><ChevronUp size={12} /></button>
                            <button onClick={() => moveItem('techStack', idx, 1)} className="p-1 text-slate/20 hover:text-electric" disabled={idx === (data.techStack?.length || 0) - 1}><ChevronDown size={12} /></button>
                          </div>
                          <div className="w-12 h-12 rounded-xl bg-black border border-white/5 flex items-center justify-center p-2 group-hover:scale-110 transition-all duration-500">
                            {tech.icon ? <img src={tech.icon} alt="" className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all" /> : <Cpu className="text-electric/40" size={24} />}
                          </div>
                          <div>
                            <p className="font-black text-xs uppercase tracking-tighter group-hover:text-electric transition-colors">{tech.name}</p>
                            <p className="text-[8px] font-mono text-slate/40 uppercase tracking-widest mt-1">{tech.category}</p>
                          </div>
                          <div className="flex gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                            <button onClick={() => setEditingTechStack({...tech, originalIndex: idx})} className="p-2 bg-white/5 hover:bg-white/10 rounded-lg"><Settings size={12} /></button>
                            <button onClick={() => deleteItem('techStack', idx)} className="p-2 bg-drama/10 text-drama hover:bg-drama/20 rounded-lg"><Trash2 size={12} /></button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="bg-white/[0.02] border border-white/10 rounded-[3rem] p-12 space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-2xl mx-auto">
                    <div className="flex items-center justify-between">
                      <h3 className="text-3xl font-black uppercase tracking-tighter italic">Refine <span className="text-electric">System</span></h3>
                      <button onClick={() => setEditingTechStack(null)} className="text-[10px] font-mono uppercase text-slate/40 hover:text-white transition-colors tracking-widest">[ Close ]</button>
                    </div>
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase font-mono text-slate/40 tracking-widest">Technology_Alias</label>
                        <input 
                          type="text" 
                          value={editingTechStack.name}
                          onChange={(e) => setEditingTechStack({...editingTechStack, name: e.target.value})}
                          className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-electric"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase font-mono text-slate/40 tracking-widest">Classification</label>
                        <select
                          value={editingTechStack.category}
                          onChange={(e) => setEditingTechStack({...editingTechStack, category: e.target.value})}
                          className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-electric appearance-none text-slate"
                        >
                          <option value="AI / ML">AI / ML</option>
                          <option value="Backend">Backend</option>
                          <option value="Frontend">Frontend</option>
                          <option value="Database">Database</option>
                          <option value="DevOps">DevOps</option>
                          <option value="Tools">Tools</option>
                        </select>
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase font-mono text-slate/40 tracking-widest">Symbolic_Link (Icon URL)</label>
                        <input 
                          type="text" 
                          value={editingTechStack.icon || ''}
                          onChange={(e) => setEditingTechStack({...editingTechStack, icon: e.target.value})}
                          className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-electric font-mono text-xs"
                          placeholder="https://devicons.com/api/python.svg"
                        />
                      </div>
                    </div>
                    <button 
                      onClick={() => {
                        const { originalIndex, ...tech } = editingTechStack;
                        saveItem('techStack', tech, originalIndex, setEditingTechStack);
                      }}
                      className="w-full bg-white text-black font-black py-5 rounded-full hover:bg-electric hover:text-white transition-all duration-500 uppercase tracking-widest text-[10px]"
                    >
                      Register_Technology
                    </button>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'competencies' && (
              <div className="space-y-12">
                {!editingCompetency ? (
                  <>
                    <button 
                      onClick={() => setEditingCompetency({ title: '', desc: '', icon: 'Zap', accent: '#3B82F6', originalIndex: null })}
                      className="w-full group p-10 bg-white/[0.02] border border-dashed border-white/10 rounded-[2.5rem] hover:bg-electric/5 hover:border-electric/30 transition-all duration-700 flex flex-col items-center justify-center gap-4"
                    >
                      <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center group-hover:scale-110 transition-all">
                        <Plus size={32} className="text-slate group-hover:text-electric" />
                      </div>
                      <span className="font-black uppercase tracking-[0.4em] text-[10px] text-slate/40 group-hover:text-electric">Establish_Core_Competency</span>
                    </button>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {data.competencies?.map((comp, idx) => (
                        <div key={idx} className="group p-10 bg-white/[0.01] border border-white/5 rounded-[2.5rem] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-500 flex flex-col gap-6" style={{ borderLeftColor: comp.accent, borderLeftWidth: '3px' }}>
                          <div className="flex justify-between items-start">
                            <div className="flex flex-col gap-2">
                              <h3 className="text-2xl font-black uppercase tracking-tighter leading-tight group-hover:text-electric transition-colors">{comp.title}</h3>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: comp.accent }} />
                                <span className="text-[9px] font-mono text-slate/30 uppercase tracking-[0.2em]">{comp.icon} Matrix</span>
                              </div>
                            </div>
                            <div className="flex flex-col gap-2">
                              <button onClick={() => moveItem('competencies', idx, -1)} className="p-1 text-slate/20 hover:text-electric transition-colors" disabled={idx === 0}><ChevronUp size={14} /></button>
                              <button onClick={() => moveItem('competencies', idx, 1)} className="p-1 text-slate/20 hover:text-electric transition-colors" disabled={idx === (data.competencies?.length || 0) - 1}><ChevronDown size={14} /></button>
                            </div>
                          </div>
                          <p className="text-slate/60 text-sm italic leading-relaxed">{comp.desc}</p>
                          <div className="flex gap-4 mt-auto pt-6 border-t border-white/5">
                            <button onClick={() => setEditingCompetency({...comp, originalIndex: idx})} className="flex-1 py-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all text-[10px] font-black uppercase tracking-widest">Edit_Matrix</button>
                            <button onClick={() => deleteItem('competencies', idx)} className="p-3 bg-drama/10 text-drama hover:bg-drama/20 rounded-xl transition-all"><Trash2 size={16} /></button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="bg-white/[0.02] border border-white/10 rounded-[3rem] p-12 space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-2xl mx-auto">
                    <div className="flex items-center justify-between">
                      <h3 className="text-3xl font-black uppercase tracking-tighter italic">Refine <span className="text-electric">Core</span></h3>
                      <button onClick={() => setEditingCompetency(null)} className="text-[10px] font-mono uppercase text-slate/40 hover:text-white transition-colors tracking-widest">[ Discard ]</button>
                    </div>
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase font-mono text-slate/40 tracking-widest">Competency_Alias</label>
                        <input 
                          type="text" 
                          value={editingCompetency.title}
                          onChange={(e) => setEditingCompetency({...editingCompetency, title: e.target.value})}
                          className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-electric"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase font-mono text-slate/40 tracking-widest">Operational_Logic (Description)</label>
                        <textarea 
                          rows="3"
                          value={editingCompetency.desc}
                          onChange={(e) => setEditingCompetency({...editingCompetency, desc: e.target.value})}
                          className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-electric resize-none italic"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-[10px] uppercase font-mono text-slate/40 tracking-widest">Symbolic_Lucide_ID</label>
                          <input 
                            type="text" 
                            value={editingCompetency.icon}
                            onChange={(e) => setEditingCompetency({...editingCompetency, icon: e.target.value})}
                            className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-electric font-mono text-xs"
                          />
                        </div>
                        <div className="space-y-3">
                          <label className="text-[10px] uppercase font-mono text-slate/40 tracking-widest">Accent_Hex_Code</label>
                          <div className="flex items-center gap-4">
                            <input 
                              type="color" 
                              value={editingCompetency.accent}
                              onChange={(e) => setEditingCompetency({...editingCompetency, accent: e.target.value})}
                              className="w-12 h-12 bg-transparent cursor-pointer rounded-lg"
                            />
                            <input 
                              type="text" 
                              value={editingCompetency.accent}
                              onChange={(e) => setEditingCompetency({...editingCompetency, accent: e.target.value})}
                              className="flex-1 bg-black/40 border border-white/10 rounded-2xl px-6 py-3 outline-none focus:border-electric font-mono text-xs"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={() => {
                        const { originalIndex, ...comp } = editingCompetency;
                        saveItem('competencies', comp, originalIndex, setEditingCompetency);
                      }}
                      className="w-full bg-white text-black font-black py-5 rounded-full hover:bg-electric hover:text-white transition-all duration-500 uppercase tracking-widest text-[10px]"
                    >
                      Commit_Competency_Logic
                    </button>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'manifesto' && (
              <div className="space-y-12">
                <div className="bg-white/[0.02] border border-white/10 rounded-[3rem] p-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-[0.02] pointer-events-none">
                    <BookOpen size={200} />
                  </div>
                  <div className="flex justify-between items-center mb-16 relative z-10">
                    <div>
                      <h3 className="text-3xl font-black uppercase tracking-tighter italic">Core <span className="text-drama">Manifesto</span></h3>
                      <p className="text-[10px] font-mono text-slate/30 uppercase tracking-[0.3em] mt-2">Philosophical_Directives</p>
                    </div>
                    <button 
                      onClick={() => {
                        const line = prompt('Enter new manifesto directive:')
                        if (line) {
                          const newManifesto = data.manifesto || { lines: [] }
                          updateData({ ...data, manifesto: { lines: [...newManifesto.lines, line] } })
                        }
                      }}
                      className="px-8 py-4 bg-drama/10 text-drama hover:bg-drama/20 rounded-full transition-all flex items-center gap-3 uppercase text-[10px] font-black tracking-widest"
                    >
                      <Plus size={18} /> Append_Directive
                    </button>
                  </div>
                  
                  <div className="space-y-6 relative z-10">
                    {data.manifesto?.lines?.map((line, idx) => (
                      <div key={idx} className="flex items-center gap-6 group">
                        <span className="text-[10px] font-mono text-drama opacity-40">0{idx + 1}_</span>
                        <input 
                          type="text" 
                          value={line}
                          onChange={(e) => {
                            const newLines = [...data.manifesto.lines]
                            newLines[idx] = e.target.value
                            updateData({ ...data, manifesto: { lines: newLines } })
                          }}
                          className="flex-1 bg-white/[0.02] border border-white/5 rounded-2xl px-8 py-6 outline-none focus:border-drama/30 focus:bg-white/[0.04] transition-all text-xl italic text-slate/80 font-inter"
                        />
                        <button 
                          onClick={() => {
                            if (window.confirm('Erase this directive from history?')) {
                              updateData({ ...data, manifesto: { lines: data.manifesto.lines.filter((_, i) => i !== idx) } })
                            }
                          }}
                          className="p-4 text-drama/40 hover:text-drama hover:bg-drama/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all shrink-0"
                        >
                          <Trash2 size={24} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'contact' && (
              <div className="space-y-12">
                <div className="bg-white/[0.02] border border-white/10 rounded-[3rem] p-12 space-y-12">
                  <div>
                    <h3 className="text-3xl font-black uppercase tracking-tighter italic mb-2">Access <span className="text-electric">Nodes</span></h3>
                    <p className="text-[10px] font-mono text-slate/30 uppercase tracking-[0.3em]">External_Communication_Protocols</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase font-mono text-slate/40 tracking-widest">Call_to_Action_Headline</label>
                      <input 
                        type="text" 
                        value={data.contact?.headline || ''}
                        onChange={(e) => updateContact('headline', e.target.value)}
                        className="w-full bg-black/40 border border-white/10 rounded-2xl px-8 py-6 outline-none focus:border-electric transition-all text-2xl font-black tracking-tight uppercase"
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] uppercase font-mono text-slate/40 tracking-widest">Subliminal_Directive (Subtext)</label>
                      <textarea 
                        rows="4"
                        value={data.contact?.subtext || ''}
                        onChange={(e) => updateContact('subtext', e.target.value)}
                        className="w-full bg-black/40 border border-white/10 rounded-2xl px-8 py-6 outline-none focus:border-electric transition-all resize-none text-lg italic text-slate/60"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-10 pt-12 border-t border-white/5">
                    {[
                      { key: 'email', label: 'Primary_Inbox', icon: Mail },
                      { key: 'linkedin', label: 'Professional_Mesh', icon: Globe },
                      { key: 'github', label: 'Source_Kernel', icon: Cpu },
                      { key: 'twitter', label: 'Broadcast_Stream', icon: Star },
                      { key: 'medium', label: 'Static_Journal', icon: BookOpen },
                    ].map(link => (
                      <div key={link.key} className="space-y-3 group">
                        <div className="flex items-center gap-2 ml-1">
                          <link.icon size={12} className="text-electric opacity-40 group-focus-within:opacity-100 transition-opacity" />
                          <label className="text-[9px] uppercase font-mono text-slate/30 tracking-[0.2em]">{link.label}</label>
                        </div>
                        <input 
                          type="text" 
                          value={data.contact?.[link.key] || ''}
                          onChange={(e) => updateContact(link.key, e.target.value)}
                          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-electric/50 font-mono text-xs text-electric/80 transition-all"
                          placeholder={`connect::${link.key}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'config' && (
              <div className="space-y-12">
                <div className="bg-white/[0.02] border border-white/10 rounded-[3rem] p-16 text-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-electric/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
                  <div className="w-24 h-24 bg-electric/10 rounded-[2rem] flex items-center justify-center mx-auto mb-10 border border-electric/20 shadow-[0_0_50px_rgba(0,229,255,0.1)] relative z-10 group-hover:scale-110 transition-transform duration-700">
                    <Settings className="text-electric" size={40} />
                  </div>
                  <h2 className="text-4xl font-black mb-6 uppercase tracking-tighter italic relative z-10">System <span className="text-electric">Core</span></h2>
                  <p className="text-slate/40 max-w-xl mx-auto mb-16 leading-relaxed relative z-10 text-lg">
                    Database integrity is verified. Real-time synchronization is active via the established MongoDB tunnel. Every commitment here is permanent across the production grid.
                  </p>

                  <div className="pt-16 border-t border-white/5 relative z-10">
                    <h3 className="text-xl font-black mb-4 text-drama uppercase tracking-widest italic">Nuclear_Option</h3>
                    <p className="text-slate/30 text-xs mb-12 uppercase tracking-widest">
                      Restore system state to factory defaults. This will permanently overwrite current cloud records.
                    </p>
                    <button 
                      onClick={() => {
                        if (window.confirm('Wipe all cloud data and revert to static defaults? This action cannot be undone.')) {
                          resetData()
                          alert('System reset to baseline configuration.')
                        }
                      }}
                      className="group px-12 py-5 border border-drama/30 text-drama hover:bg-drama hover:text-white rounded-full font-black transition-all duration-500 uppercase tracking-[0.3em] text-[10px]"
                    >
                      Initialize_Nuclear_Reset
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Ambient Footer */}
        <footer className="p-8 border-t border-white/5 flex justify-between items-center bg-black/20 relative z-10">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
              <span className="text-[8px] font-mono text-slate/40 uppercase tracking-widest">Network_Stable</span>
            </div>
            <div className="w-[1px] h-3 bg-white/10" />
            <span className="text-[8px] font-mono text-slate/40 uppercase tracking-widest">Latency::24ms</span>
          </div>
          <p className="text-[8px] font-mono text-slate/20 uppercase tracking-[0.5em]">Antigravity::Engine_Ready</p>
        </footer>
      </main>
    </div>
  )
}

export default Admin
