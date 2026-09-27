"use client";

import { Member } from "@/types/member";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface MemberCardProps {
  member: Member;
  onClick: (member: Member) => void;
}

export function MemberCard({ member, onClick }: MemberCardProps) {
  return (
    <div 
      onClick={() => onClick(member)}
      className="group relative bg-card border border-border p-5 cursor-pointer hover:border-accent transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] flex flex-col h-full overflow-hidden"
    >
      {/* Abstract technical corner accent */}
      <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[2px] h-4 bg-accent translate-x-full group-hover:translate-x-0 transition-transform duration-300 delay-100"></div>
        <div className="absolute top-0 right-0 w-4 h-[2px] bg-accent -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
      </div>

      <div className="relative mb-6 aspect-square w-full overflow-hidden bg-muted">
        {/* We use unoptimized for pravatar or external mock images */}
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="absolute bottom-3 right-3 bg-background/90 backdrop-blur-sm px-2 py-1 text-[10px] font-mono tracking-widest text-foreground uppercase border border-border/50 group-hover:border-accent/50 transition-colors">
          {member.department}
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <h3 className="text-xl font-bold uppercase tracking-tight mb-1 group-hover:text-accent transition-colors">
          {member.name}
        </h3>
        <p className="text-sm font-mono text-muted-foreground mb-4 border-b border-border/50 pb-4">
          {member.role}
        </p>
        
        <p className="text-sm text-foreground/80 line-clamp-2 mt-auto">
          {member.bio}
        </p>
      </div>

      <div className="mt-6 flex justify-between items-center pt-4 border-t border-border">
        <span className="text-[10px] tracking-widest font-mono text-muted-foreground group-hover:text-foreground transition-colors uppercase">
          ID: {member.id.padStart(4, '0')}
        </span>
        <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-background transition-all duration-300">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
