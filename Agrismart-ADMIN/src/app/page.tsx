'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import {
  MapPin, Sun, CloudRain, Wind, Thermometer, Droplets, Sprout, Bell, BookOpen,
  Smartphone, ShieldCheck, Languages, UserCircle, BarChart3, Users, FileText,
  Bot, Database, Cpu, Layout, ArrowRight, Download, ExternalLink, Menu, X,
  Leaf, MapPinned, Waves, ChevronRight, Play
} from 'lucide-react';

// Farm imagery — Occidental Mindoro (Pia) + resilient Unsplash fallbacks
const HERO_IMG = 'https://pia.gov.ph/wp-content/uploads/2024/02/Occidental-Mindoro-to-boost-onion-cassava-production-through-specialized-training-1-1024x683.jpg';
const SPOTLIGHT_IMG = 'https://pia.gov.ph/wp-content/uploads/2026/03/Onion-prices-in-Occidental-Mindoro-stabilize-after-earlier-fluctuations-1024x768.jpg';
const FIELD_IMG = 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80&auto=format&fit=crop';
const ONION_ROWS_IMG = 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80&auto=format&fit=crop';

const GITHUB_RELEASE = 'https://github.com/RuiKurumi/Agrismart/releases/tag/1.3.5';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how' },
  { label: 'Maya AI', href: '#maya' },
  { label: 'Occidental Mindoro', href: '#mindoro' },
];

const growthStages = [
  { name: 'Germination', dap: '0–14', desc: 'Seed sprouts', color: 'bg-amber-100 text-amber-800 border-amber-200' },
  { name: 'Seedling', dap: '15–30', desc: 'First leaves', color: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
  { name: 'Vegetative', dap: '31–60', desc: 'Rapid leaf growth', color: 'bg-green-100 text-green-800 border-green-200' },
  { name: 'Bulbing', dap: '61–90', desc: 'Bulb swells', color: 'bg-sky-100 text-sky-800 border-sky-200' },
  { name: 'Maturation', dap: '91–110', desc: 'Neck softens', color: 'bg-amber-100 text-amber-800 border-amber-200' },
  { name: 'Ready', dap: '111+', desc: 'Harvest', color: 'bg-red-100 text-red-800 border-red-200' },
];

export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top bar */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <img src="/icon.svg" alt="AgriSmart" className="w-9 h-9 rounded-xl shadow-sm" />
              <div>
                <p className="font-display font-bold leading-none">AgriSmart</p>
                <p className="text-[11px] text-gray-500 tracking-wide flex items-center gap-1"><MapPin size={10} className="text-[#2E7D32]" /> Occidental Mindoro · DSS</p>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map(l => (
                <a key={l.href} href={l.href} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">{l.label}</a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-2">
              <Link href="/portal" className="btn-secondary py-2 px-4 text-sm">Enter Platform</Link>
              <a href={GITHUB_RELEASE} target="_blank" rel="noopener noreferrer" className="btn-primary py-2 px-4 text-sm inline-flex items-center gap-1.5">
                <Download size={14} /> APK 1.3.5
              </a>
            </div>

            <button className="md:hidden p-2 rounded-xl hover:bg-gray-50" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          {mobileOpen && (
            <div className="md:hidden pb-4 border-t border-gray-100 pt-4 space-y-3">
              <div className="flex flex-col gap-2">
                {navLinks.map(l => (
                  <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="py-2 text-sm text-gray-700 hover:text-[#2E7D32]">{l.label}</a>
                ))}
              </div>
              <div className="flex gap-2 pt-2">
                <Link href="/portal" onClick={() => setMobileOpen(false)} className="btn-primary flex-1 text-center py-2.5">Enter Platform</Link>
                <a href={GITHUB_RELEASE} target="_blank" rel="noopener noreferrer" className="btn-secondary flex-1 text-center py-2.5">Download</a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src={HERO_IMG} alt="Occidental Mindoro onion field — Pia.gov.ph" fill priority className="object-cover" unoptimized />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B3A1A]/95 via-[#2E7D32]/85 to-[#2E7D32]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur px-3 py-1.5 rounded-full text-xs font-medium border border-white/20">
                <span className="w-2 h-2 bg-[#F9C84B] rounded-full animate-pulse" />
                Capstone DSS · Flutter + Next.js · Built for Filipino farmers
                <span className="hidden sm:inline-flex items-center gap-1 ml-1 bg-[#F9C84B] text-[#1B3A1A] px-2 py-0.5 rounded-full text-[10px] font-bold">v1.3.5</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-[52px] font-bold leading-[0.95] mt-5">
                Decision Support
                <span className="block text-[#F9C84B]">for onion farmers</span>
                <span className="block text-2xl sm:text-3xl font-normal mt-2 opacity-90">in Occidental Mindoro.</span>
              </h1>

              <p className="text-white/90 text-sm sm:text-[15px] leading-relaxed mt-5 max-w-xl">
                AgriSmart combines <span className="font-semibold text-white">real-time Open-Meteo weather</span>, <span className="font-semibold text-white">AI advisory (Maya)</span> and farm management into a mobile-first platform. Designed in the Sprague & Carlson DSS model — data, model, and interface — for Sablayan, Magsaysay, and San Jose.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Link href="/portal" className="inline-flex items-center justify-center gap-2 bg-white text-[#1B3A1A] px-6 py-3.5 rounded-xl font-semibold hover:bg-gray-50 transition-colors shadow-lg">
                  Enter Platform <ArrowRight size={16} />
                </Link>
                <a href={GITHUB_RELEASE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#F9C84B] text-[#1B3A1A] px-6 py-3.5 rounded-xl font-semibold hover:bg-[#F2B705] transition-colors shadow-lg">
                  <Download size={16} /> Download APK <ExternalLink size={14} className="opacity-70" />
                </a>
              </div>

              <div className="flex flex-wrap gap-2 mt-4 text-xs">
                <span className="bg-white/15 backdrop-blur border border-white/20 px-3 py-1.5 rounded-full inline-flex items-center gap-1.5"><Smartphone size={12} /> Flutter 3.41+</span>
                <span className="bg-white/15 backdrop-blur border border-white/20 px-3 py-1.5 rounded-full inline-flex items-center gap-1.5"><Layout size={12} /> Next.js Admin</span>
                <span className="bg-white/15 backdrop-blur border border-white/20 px-3 py-1.5 rounded-full inline-flex items-center gap-1.5"><Bot size={12} /> Maya AI offline</span>
                <span className="bg-white/15 backdrop-blur border border-white/20 px-3 py-1.5 rounded-full inline-flex items-center gap-1.5"><MapPinned size={12} /> Sablayan · Magsaysay</span>
              </div>

              <p className="text-[11px] text-white/60 mt-3">Images: PIA MIMAROPA / DA-MIMAROPA — onion training & fields in Occidental Mindoro. Open-Meteo weather. No API key required.</p>
            </div>

            {/* Right card stack */}
            <div className="relative lg:pl-8">
              <div className="relative bg-white rounded-[24px] shadow-2xl overflow-hidden border border-white/20">
                <div className="relative h-64 sm:h-72">
                  <Image src={FIELD_IMG} alt="Occidental Mindoro farm field — Unsplash fall-back" fill className="object-cover" unoptimized />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-2 rounded-xl shadow flex items-center gap-2">
                    <img src="/icon.svg" alt="" className="w-8 h-8 rounded-lg" />
                    <div>
                      <p className="text-xs font-bold leading-none">AgriSmart</p>
                      <p className="text-[10px] text-gray-500">Maya is online · LLaMA 3.3 70B</p>
                    </div>
                    <span className="ml-2 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/95 backdrop-blur rounded-2xl p-4 shadow-xl">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-semibold text-gray-700 flex items-center gap-1.5"><Sprout size={14} className="text-[#2E7D32]" /> My Farm · Sablayan</p>
                        <span className="text-[11px] bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">Vegetative · 45 DAP</span>
                      </div>
                      <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#2E7D32] rounded-full" style={{ width: '41%' }} />
                      </div>
                      <div className="flex justify-between text-[10px] text-gray-400 mt-1"><span>Germination</span><span>Bulbing</span><span>Harvest</span></div>
                    </div>
                  </div>
                </div>

                <div className="p-4 grid grid-cols-3 gap-3">
                  <div className="bg-orange-50 rounded-xl p-3 text-center border border-orange-100">
                    <Thermometer size={16} className="mx-auto text-orange-500 mb-1" />
                    <p className="text-xs text-gray-500">Temp</p>
                    <p className="text-sm font-bold">27.2°C</p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-3 text-center border border-blue-100">
                    <Droplets size={16} className="mx-auto text-blue-500 mb-1" />
                    <p className="text-xs text-gray-500">Rain</p>
                    <p className="text-sm font-bold">12 mm</p>
                  </div>
                  <div className="bg-amber-50 rounded-xl p-3 text-center border border-amber-100">
                    <Bell size={16} className="mx-auto text-amber-600 mb-1" />
                    <p className="text-xs text-gray-500">Alert</p>
                    <p className="text-xs font-bold text-amber-700">Heavy rain</p>
                  </div>
                </div>

                <div className="px-4 pb-4 flex gap-2">
                  <Link href="/portal" className="flex-1 btn-primary py-2.5 text-sm text-center inline-flex items-center justify-center gap-1.5"><Play size={14} /> Open admin</Link>
                  <a href={GITHUB_RELEASE} target="_blank" rel="noopener noreferrer" className="flex-1 btn-secondary py-2.5 text-sm text-center">App</a>
                </div>
              </div>

              {/* floating stat */}
              <div className="absolute -bottom-4 -left-2 sm:left-0 bg-[#1B3A1A] text-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-white/10">
                <div className="w-10 h-10 bg-[#F9C84B] rounded-xl flex items-center justify-center text-[#1B3A1A]"><MapPin size={18} /></div>
                <div>
                  <p className="text-xs text-white/70">Occidental Mindoro</p>
                  <p className="text-sm font-bold">7,569 ha · 359 farmers (Sablayan)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#F8FAF0] border-y border-[#E8EED8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="text-center sm:text-left">
              <p className="text-2xl font-display font-bold text-[#1B3A1A]">264K MT</p>
              <p className="text-xs text-gray-500">National onion output 2024 +4.5%</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-2xl font-display font-bold text-[#1B3A1A]">5,715 → 7,569 ha</p>
              <p className="text-xs text-gray-500">Mindoro planted area 2021→2022</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-2xl font-display font-bold text-[#1B3A1A]">7,000 ha</p>
              <p className="text-xs text-gray-500">Potential expansion (Sablayan)</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-2xl font-display font-bold text-[#1B3A1A]">₱40–45/kg</p>
              <p className="text-xs text-gray-500">Stabilized farmgate (Mar 2026, PIA)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-widest text-[#2E7D32] uppercase">Platform</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2">Everything for the onion cycle.</h2>
            <p className="text-gray-500 mt-3">From the README: Flutter mobile app + Next.js admin panel, following Sprague & Carlson three-component DSS model.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mt-10">
            {[
              { icon: Sprout, title: 'Farm Onboarding', desc: 'Farm size, irrigation type, onion variety, planting & sowing dates, geolocation. MapLibre + Geolocator.' },
              { icon: Layout, title: 'Farm Management', desc: 'Add / edit / delete multiple fields with growth stage tracking and 0–110+ DAP calculation.' },
              { icon: CloudRain, title: 'Home Dashboard', desc: 'Real-time Open-Meteo weather, auto-generated alerts, articles, and 5-day forecast.' },
              { icon: Bot, title: 'Maya AI Chatbot', desc: 'GROQ LLaMA 3.3 70B online + Qwen2.5 0.5B offline (llama_flutter_android). Force-offline toggle.' },
              { icon: Languages, title: 'Localization', desc: 'English and Filipino (Tagalog) — more per update. Dark mode app-wide.' },
              { icon: UserCircle, title: 'Profile & Auth', desc: 'Email, Google, OTP phone, guest. Photo upload, province/municipality, bio.' },
            ].map(f => (
              <div key={f.title} className="card p-6 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-[#2E7D32]/10 flex items-center justify-center text-[#2E7D32] mb-3"><f.icon size={18} /></div>
                <h3 className="font-semibold">{f.title}</h3>
                <p className="text-sm text-gray-500 mt-1 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-5 mt-5">
            {[
              { icon: BarChart3, title: 'Dashboard', desc: 'Aggregate stats, user growth chart, fields by variety — real-time.' },
              { icon: Users, title: 'User Management', desc: 'Search, promote/demote, delete. Roles: pending → admin.' },
              { icon: FileText, title: 'Articles & Guides', desc: 'Create & publish farming guides visible in the app.' },
              { icon: Bell, title: 'Alerts', desc: 'Create / toggle / delete global weather alerts (rain, wind, heat…).' },
              { icon: CloudRain, title: 'Weather Monitor', desc: 'Live weather for any PH province + agricultural advisory.' },
              { icon: Sprout, title: 'Farm Fields', desc: 'All registered fields across users with stage & progress.' },
            ].map(f => (
              <div key={f.title} className="card p-6 bg-[#F8FAF9] hover:bg-white hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-[#2E7D32] mb-3 shadow-sm"><f.icon size={18} /></div>
                <h3 className="font-semibold text-sm">{f.title} <span className="text-xs font-normal text-gray-400">· Admin</span></h3>
                <p className="text-sm text-gray-500 mt-1">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works / DSS */}
      <section id="how" className="py-14 bg-[#F8FAF9] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl font-bold">Sprague & Carlson DSS model</h2>
            <p className="text-gray-500 text-sm mt-2">Knowledge-driven + data-driven. Knowledge base separated from inference engine (Turban).</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5 mt-10">
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto text-blue-600 mb-3"><Database size={22} /></div>
              <h3 className="font-semibold">Data Management</h3>
              <p className="text-xs text-gray-500 mt-1">Firebase Firestore (farm data, alerts, articles) · Open-Meteo API · SharedPreferences cache</p>
            </div>
            <div className="card p-6 text-center border-[#2E7D32]/20 shadow-sm">
              <div className="w-12 h-12 bg-[#2E7D32]/10 rounded-2xl flex items-center justify-center mx-auto text-[#2E7D32] mb-3"><Cpu size={22} /></div>
              <h3 className="font-semibold">Model Management</h3>
              <p className="text-xs text-gray-500 mt-1">Rule-based alert engine · Groq LLM llama-3.3-70b · Qwen2.5 0.5B offline</p>
            </div>
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto text-amber-600 mb-3"><Layout size={22} /></div>
              <h3 className="font-semibold">User Interface</h3>
              <p className="text-xs text-gray-500 mt-1">Flutter mobile app + Next.js admin panel · Tailwind · Recharts · MapLibre</p>
            </div>
          </div>

          {/* Growth stages */}
          <div className="card p-6 sm:p-8 mt-8">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <h3 className="font-semibold flex items-center gap-2"><Leaf size={16} className="text-[#2E7D32]" /> Onion Growth Stages (auto by DAP)</h3>
              <span className="text-xs text-gray-400">Tap stage to see DAP</span>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mt-5">
              {growthStages.map(s => (
                <div key={s.name} className={`rounded-2xl border p-3 text-center ${s.color}`}>
                  <p className="text-[11px] font-bold tracking-wide">{s.dap} DAP</p>
                  <p className="text-sm font-bold mt-1">{s.name}</p>
                  <p className="text-[11px] opacity-80">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden flex">
              <div className="flex-1 bg-amber-200" title="Germination" />
              <div className="flex-1 bg-emerald-200" title="Seedling" />
              <div className="flex-[2] bg-green-300" title="Vegetative" />
              <div className="flex-[2] bg-sky-300" title="Bulbing" />
              <div className="flex-[1.2] bg-amber-200" title="Maturation" />
              <div className="flex-1 bg-red-200" title="Ready" />
            </div>
          </div>
        </div>
      </section>

      {/* Weather alerts + Maya */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="font-display text-2xl font-bold flex items-center gap-2"><Bell size={20} className="text-[#2E7D32]" /> Weather Alerts (auto-generated)</h3>
            <p className="text-sm text-gray-500 mt-1">From README — rule-based engine on real-time weather data.</p>
            <div className="space-y-3 mt-6">
              {[
                { icon: CloudRain, label: 'Heavy Rain', trigger: 'Precipitation > 10mm', color: 'bg-blue-50 border-blue-100 text-blue-700' },
                { icon: Wind, label: 'Strong Winds', trigger: 'Wind speed > 60 km/h', color: 'bg-slate-50 border-slate-200 text-slate-700' },
                { icon: Thermometer, label: 'Extreme Heat', trigger: 'Temperature > 38°C', color: 'bg-orange-50 border-orange-100 text-orange-700' },
                { icon: Droplets, label: 'High Humidity', trigger: 'Humidity > 85%', color: 'bg-yellow-50 border-yellow-100 text-yellow-800' },
                { icon: Sun, label: 'Drought Risk', trigger: 'No rain + humidity < 40%', color: 'bg-amber-50 border-amber-100 text-amber-800' },
              ].map(a => (
                <div key={a.label} className={`flex items-center gap-3 p-3 rounded-xl border ${a.color}`}>
                  <a.icon size={16} />
                  <p className="text-sm font-medium flex-1">{a.label}</p>
                  <span className="text-xs bg-white/70 px-2 py-1 rounded-full border">{a.trigger}</span>
                </div>
              ))}
            </div>
          </div>

          <div id="maya" className="card p-6 sm:p-8 bg-gradient-to-br from-[#1B3A1A] to-[#2E7D32] text-white overflow-hidden relative">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#F9C84B]/20 rounded-full blur-2xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur px-3 py-1.5 rounded-full text-xs border border-white/20">
                <Bot size={14} /> Maya — AI Agricultural Assistant
              </div>
              <h3 className="font-display text-2xl font-bold mt-4">Speaks onion. Works offline.</h3>
              <p className="text-white/80 text-sm leading-relaxed mt-2">Maya auto-switches between <span className="font-semibold text-white">LLaMA 3.3 70B (online)</span> and <span className="font-semibold text-white">Qwen2.5 0.5B (offline GGUF)</span> via Groq. Force-offline toggle in Advanced Settings for low-connectivity farms in Mindoro.</p>

              <div className="grid grid-cols-2 gap-3 mt-6">
                <div className="bg-white/10 backdrop-blur rounded-xl p-3 border border-white/15">
                  <p className="text-xs text-white/70">Online mode</p>
                  <p className="text-sm font-semibold">llama-3.3-70b-versatile</p>
                  <p className="text-[11px] text-white/60">via GROQ API</p>
                </div>
                <div className="bg-[#F9C84B] rounded-xl p-3 text-[#1B3A1A]">
                  <p className="text-xs opacity-70">Offline mode</p>
                  <p className="text-sm font-bold">Qwen2.5 0.5B</p>
                  <p className="text-[11px] opacity-70">on-device GGUF</p>
                </div>
              </div>

              <div className="mt-6 flex gap-2">
                <Link href="/portal" className="bg-white text-[#1B3A1A] px-4 py-2.5 rounded-xl text-sm font-semibold inline-flex items-center gap-1.5">Try Maya <ChevronRight size={14} /></Link>
                <a href={GITHUB_RELEASE} target="_blank" rel="noopener noreferrer" className="bg-white/15 backdrop-blur border border-white/20 text-white px-4 py-2.5 rounded-xl text-sm font-medium">Get app</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Occidental Mindoro spotlight */}
      <section id="mindoro" className="py-14 bg-[#F8FAF0] border-y border-[#E8EED8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="relative rounded-[24px] overflow-hidden shadow-xl border border-white">
                <Image src={SPOTLIGHT_IMG} alt="Occidental Mindoro onion fields — PIA" width={1024} height={768} className="w-full h-[380px] object-cover" unoptimized />
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur px-3 py-2 rounded-xl text-xs shadow flex items-center gap-2">
                  <MapPin size={12} className="text-[#2E7D32]" /> San Jose · Sablayan · Magsaysay
                </div>
              </div>
              <div className="absolute -bottom-4 -right-2 sm:right-4 bg-white rounded-2xl shadow-lg p-3 flex items-center gap-3 border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-[#F9C84B] flex items-center justify-center"><Waves size={18} className="text-[#1B3A1A]" /></div>
                <div>
                  <p className="text-xs text-gray-500">Apo Reef to rice & onion</p>
                  <p className="text-sm font-bold">Mina de Oro</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold tracking-widest text-[#2E7D32] uppercase flex items-center gap-1.5"><MapPinned size={14} /> Occidental Mindoro</p>
              <h2 className="font-display text-3xl font-bold mt-2">Where AgriSmart grows.</h2>
              <p className="text-sm text-gray-600 leading-relaxed mt-3">
                The Philippines’ onion heartland. After high earnings in 2021, farmers doubled planted area — from <span className="font-semibold">5,715 ha (78K MT)</span> to <span className="font-semibold">7,569 ha (2022)</span>. Sablayan alone expanded from 321 ha / 244 farmers (3,210 MT, 2023) to <span className="font-semibold">521 ha / 359 farmers (2024, +64%)</span> with <span className="font-semibold">7,000 ha</span> still potential for expansion (MAO Sablayan, PIA). Cold storages in Magsaysay & San Jose (2× 2,800 MT, PRDP) are unlocking the value chain.
              </p>

              <div className="grid grid-cols-2 gap-3 mt-6">
                <div className="card p-4">
                  <p className="text-xs text-gray-500">Sablayan 2024</p>
                  <p className="font-bold">521 ha · 359 farmers</p>
                  <p className="text-xs text-gray-400">3,210 MT → expanded 64%</p>
                </div>
                <div className="card p-4">
                  <p className="text-xs text-gray-500">DA intervention</p>
                  <p className="font-bold">₱200k + 2× ₱125M</p>
                  <p className="text-xs text-gray-400">Cold storage, coops, GAP training</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="text-xs bg-white border border-gray-200 px-3 py-1.5 rounded-full">Red Creole · Yellow Granex</span>
                <span className="text-xs bg-white border border-gray-200 px-3 py-1.5 rounded-full">Bulalacao Council</span>
                <span className="text-xs bg-white border border-gray-200 px-3 py-1.5 rounded-full">Magsaysay Watchers MPC</span>
              </div>

              <div className="mt-6 flex gap-3">
                <Link href="/portal" className="btn-primary inline-flex items-center gap-1.5">Open platform <ArrowRight size={14} /></Link>
                <a href="https://pia.gov.ph/news/occidental-mindoro-to-boost-onion-cassava-production-through-specialized-training/" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-1.5 text-sm">PIA story <ExternalLink size={12} /></a>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mt-10">
            <div className="relative rounded-2xl overflow-hidden h-44">
              <Image src={ONION_ROWS_IMG} alt="Onion rows — field texture" fill className="object-cover" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
              <p className="absolute bottom-3 left-3 text-white text-sm font-semibold">Furrows like the icon</p>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-44">
              <Image src={FIELD_IMG} alt="Green field — Mindoro lowlands" fill className="object-cover" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
              <p className="absolute bottom-3 left-3 text-white text-sm font-semibold">Irrigated lowland after rice</p>
            </div>
            <div className="card p-5 flex flex-col justify-center bg-white">
              <p className="text-xs font-bold text-[#2E7D32] tracking-widest uppercase">Onboarding</p>
              <p className="font-semibold mt-1">From this front page → portal choices</p>
              <p className="text-sm text-gray-500 mt-1">Tap “Enter Platform” to choose <span className="font-medium text-gray-700">End User</span> (APK) or <span className="font-medium text-gray-700">Admin</span> (login). Your next step is <span className="font-mono text-xs bg-gray-100 px-1 py-0.5 rounded">/portal</span>.</p>
              <Link href="/portal" className="mt-3 text-sm font-semibold text-[#2E7D32] inline-flex items-center gap-1">Go to portal <ChevronRight size={14} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-[#1B3A1A] text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(100deg, transparent 0 28px, white 28px 36px)`,
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold">Ready to grow smarter?</h2>
              <p className="text-white/80 text-sm mt-2 max-w-xl">Join Sablayan, Magsaysay, and San Jose farmers using AgriSmart for weather alerts, stage tracking, and Maya AI guidance — online or offline.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
              <Link href="/portal" className="bg-white text-[#1B3A1A] px-6 py-3.5 rounded-xl font-semibold inline-flex items-center justify-center gap-2 hover:bg-gray-50">Enter Platform <ArrowRight size={16} /></Link>
              <a href={GITHUB_RELEASE} target="_blank" rel="noopener noreferrer" className="bg-[#F9C84B] text-[#1B3A1A] px-6 py-3.5 rounded-xl font-semibold inline-flex items-center justify-center gap-2 hover:bg-[#F2B705]">Download APK <Download size={16} /></a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="/icon.svg" alt="AgriSmart" className="w-8 h-8 rounded-lg" />
              <div>
                <p className="text-sm font-semibold">AgriSmart</p>
                <p className="text-xs text-gray-500">DSS for Filipino onion farmers · Capstone · Built for Occidental Mindoro</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <Link href="/portal" className="hover:text-[#2E7D32]">Portal</Link>
              <a href="https://github.com/RuiKurumi/Agrismart" target="_blank" rel="noopener noreferrer" className="hover:text-[#2E7D32]">GitHub</a>
              <a href={GITHUB_RELEASE} target="_blank" rel="noopener noreferrer" className="hover:text-[#2E7D32]">Releases</a>
              <span>© 2026 AgriSmart</span>
            </div>
          </div>
          <p className="text-[11px] text-gray-400 mt-4 text-center sm:text-left">Farm imagery: PIA MIMAROPA & DA-MIMAROPA (Occidental Mindoro onion training/fields); field textures via Unsplash. Data: PSA, PIA, DA. Open-Meteo weather. Icon: AgriSmart barn/pin/field design.</p>
        </div>
      </footer>
    </div>
  );
}
