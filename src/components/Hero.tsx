import { ArrowRight, Hexagon, Activity, Network } from "lucide-react";
import { members } from "@/data/members";

export function Hero() {
  const departments = Array.from(new Set(members.map(m => m.department)));
  
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-border">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/5 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-accent/10 rounded-full blur-[120px]"></div>
        
        {/* Technical Decor */}
        <div className="absolute top-20 right-10 opacity-20 hidden md:block">
          <svg width="200" height="200" viewBox="0 0 100 100" className="animate-float">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <path d="M 50 10 L 50 90 M 10 50 L 90 50" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 4" />
            <circle cx="50" cy="50" r="2" fill="currentColor" className="text-accent" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start max-w-3xl animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-accent"></span>
            <span className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
              AIChE Student Chapter
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
            MEET THE<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/50">
              MINDS BEHIND
            </span><br />
            <span className="relative">
              AIChE
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent"></span>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl font-light leading-relaxed border-l-2 border-border pl-6 py-2">
            Discover the executive body and core team members driving technical excellence, creative design, and community initiatives in our chapter.
          </p>
          
          <a href="/team" className="group relative inline-flex items-center gap-4 bg-foreground text-background px-8 py-4 overflow-hidden transition-transform hover:scale-105">
            <span className="absolute inset-0 w-full h-full bg-accent -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            <span className="relative font-bold tracking-widest text-sm z-10 group-hover:text-foreground transition-colors duration-300">EXPLORE THE TEAM</span>
            <ArrowRight className="relative z-10 w-4 h-4 group-hover:text-foreground transition-all duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="bg-card border border-border p-6 flex flex-col justify-between aspect-square group hover:border-accent transition-colors">
            <Hexagon className="w-8 h-8 text-accent mb-4 stroke-1 group-hover:scale-110 transition-transform" />
            <div>
              <div className="text-4xl md:text-6xl font-bold font-mono tracking-tighter">{members.length.toString().padStart(2, '0')}</div>
              <div className="text-xs text-muted-foreground tracking-widest uppercase mt-2">Core Members</div>
            </div>
          </div>
          <div className="bg-card border border-border p-6 flex flex-col justify-between aspect-square mt-8 group hover:border-accent transition-colors">
            <Network className="w-8 h-8 text-accent mb-4 stroke-1 group-hover:scale-110 transition-transform" />
            <div>
              <div className="text-4xl md:text-6xl font-bold font-mono tracking-tighter">{departments.length.toString().padStart(2, '0')}</div>
              <div className="text-xs text-muted-foreground tracking-widest uppercase mt-2">Teams</div>
            </div>
          </div>
          <div className="bg-accent/5 border border-accent/20 p-6 flex flex-col justify-between aspect-square md:-mt-8 group hover:bg-accent/10 transition-colors">
            <Activity className="w-8 h-8 text-accent mb-4 stroke-1 group-hover:scale-110 transition-transform" />
            <div>
              <div className="text-4xl md:text-6xl font-bold font-mono tracking-tighter text-accent">01</div>
              <div className="text-xs text-foreground tracking-widest uppercase mt-2 font-bold">Shared Mission</div>
            </div>
          </div>
          <div className="hidden md:flex p-6 flex-col justify-end">
            <div className="w-full h-px bg-border relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-accent"></div>
            </div>
            <div className="font-mono text-[10px] text-muted-foreground mt-4 text-right">
              INIT::SYS.OP.2024<br/>
              GEO::34.05.118.24
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-widest font-mono text-muted-foreground rotate-90 mb-6">Scroll</span>
        <div className="w-px h-12 bg-border relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-accent animate-[bounce_2s_infinite]"></div>
        </div>
      </div>
    </section>
  );
}
