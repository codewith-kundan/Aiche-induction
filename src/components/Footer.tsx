import { Code, Briefcase, Mail, Hexagon } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4 text-accent">
              <Hexagon className="h-6 w-6 stroke-[1.5]" />
              <span className="font-bold tracking-widest text-lg text-foreground">AIChE</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-sm mb-6 font-mono">
              AIChE STUDENT CHAPTER
              <br />
              "Building ideas. Engineering impact."
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-sm tracking-widest">CONNECT</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2 text-sm group">
                <Code className="h-4 w-4 group-hover:-rotate-12 transition-transform" />
                <span>GitHub</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2 text-sm group">
                <Briefcase className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2 text-sm group">
                <Mail className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                <span>Email</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-sm tracking-widest">DEPARTMENTS</h4>
            <div className="flex flex-col gap-3">
              <span className="text-muted-foreground text-sm hover:text-foreground transition-colors cursor-pointer">Executive</span>
              <span className="text-muted-foreground text-sm hover:text-foreground transition-colors cursor-pointer">Technical</span>
              <span className="text-muted-foreground text-sm hover:text-foreground transition-colors cursor-pointer">Events</span>
              <span className="text-muted-foreground text-sm hover:text-foreground transition-colors cursor-pointer">Design</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-mono">
            © {new Date().getFullYear()} AIChE Student Chapter. All rights reserved.
          </p>
          <div className="text-[10px] text-muted-foreground font-mono flex gap-4">
            <span>SYS.VER. 2.0.4</span>
            <span>OP: ONLINE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
