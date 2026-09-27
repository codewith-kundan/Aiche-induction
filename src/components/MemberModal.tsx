"use client";

import { useEffect } from "react";
import { Member } from "@/types/member";
import { X, Code, Briefcase, Mail, Target, Hexagon } from "lucide-react";
import Image from "next/image";

interface MemberModalProps {
  member: Member;
  onClose: () => void;
}

export function MemberModal({ member, onClose }: MemberModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    
    // Prevent background scrolling
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEsc);
    
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card border border-border shadow-2xl animate-[fadeIn_0.3s_ease-out] flex flex-col md:flex-row"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-background/50 backdrop-blur text-foreground border border-border hover:border-accent hover:text-accent transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column - Image */}
        <div className="md:w-2/5 relative min-h-[300px] md:min-h-full bg-muted">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover grayscale"
            sizes="(max-width: 768px) 100vw, 40vw"
            unoptimized
          />
          {/* Decorative overlay */}
          <div className="absolute inset-0 bg-accent/10 mix-blend-overlay"></div>
          <div className="absolute bottom-4 left-4 bg-background/90 px-3 py-1.5 text-xs font-mono tracking-widest uppercase border border-border">
            {member.department}
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="md:w-3/5 p-8 md:p-12 flex flex-col relative overflow-hidden">
          {/* Subtle background tech pattern */}
          <div className="absolute -bottom-20 -right-20 opacity-5 pointer-events-none">
            <Hexagon className="w-64 h-64 text-foreground" />
          </div>

          <div className="mb-2">
            <span className="text-xs font-mono text-accent tracking-widest uppercase">
              ID: {member.id.padStart(4, '0')} // OP_ACTIVE
            </span>
          </div>

          <h2 id="modal-title" className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-2">
            {member.name}
          </h2>
          
          <p className="text-lg font-mono text-muted-foreground mb-8 pb-8 border-b border-border/50">
            {member.role}
          </p>

          <div className="space-y-6 flex-1">
            <div>
              <h3 className="text-xs font-bold tracking-widest text-foreground uppercase mb-3 flex items-center gap-2">
                <Target className="w-4 h-4 text-accent" />
                Biography
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {member.bio}
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-4">
            {member.github && (
              <a href={member.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-mono px-4 py-2 border border-border hover:border-accent hover:text-accent transition-colors">
                <Code className="w-4 h-4" /> GITHUB
              </a>
            )}
            {member.linkedin && (
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-mono px-4 py-2 border border-border hover:border-accent hover:text-accent transition-colors">
                <Briefcase className="w-4 h-4" /> LINKEDIN
              </a>
            )}
            {member.email && (
              <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-sm font-mono px-4 py-2 border border-border hover:border-accent hover:text-accent transition-colors">
                <Mail className="w-4 h-4" /> EMAIL
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
