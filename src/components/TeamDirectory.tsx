"use client";

import { useState, useMemo } from "react";
import { members } from "@/data/members";
import { FilterBar } from "./FilterBar";
import { MemberCard } from "./MemberCard";
import { MemberModal } from "./MemberModal";
import { Member } from "@/types/member";

export function TeamDirectory() {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const departments = useMemo(() => {
    const depts = new Set(members.map((m) => m.department));
    return Array.from(depts);
  }, []);

  const filteredMembers = useMemo(() => {
    return members.filter((member) => {
      const matchesDept = selectedDepartment === "All" || member.department === selectedDepartment;
      const query = searchQuery.toLowerCase();
      const matchesSearch = 
        member.name.toLowerCase().includes(query) ||
        member.role.toLowerCase().includes(query) ||
        member.department.toLowerCase().includes(query);
      
      return matchesDept && matchesSearch;
    });
  }, [selectedDepartment, searchQuery]);

  return (
    <section id="team" className="py-24 relative">
      {/* Background Decor */}
      <div className="absolute left-0 top-40 w-1/3 h-1/2 bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs tracking-widest text-accent">01 /</span>
            <h2 className="text-sm font-bold tracking-widest text-foreground uppercase">The People</h2>
          </div>
          <h3 className="text-3xl md:text-5xl font-bold max-w-2xl leading-tight">
            Meet the team shaping our chapter's technical, creative, and community initiatives.
          </h3>
        </div>

        <FilterBar 
          departments={departments}
          selectedDepartment={selectedDepartment}
          onDepartmentSelect={setSelectedDepartment}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {filteredMembers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMembers.map((member) => (
              <MemberCard 
                key={member.id} 
                member={member} 
                onClick={setSelectedMember} 
              />
            ))}
          </div>
        ) : (
          <div className="py-32 flex flex-col items-center justify-center text-center border border-dashed border-border/50">
            <h4 className="text-xl font-bold tracking-widest uppercase mb-2">NO MEMBERS FOUND</h4>
            <p className="text-muted-foreground font-mono text-sm">Try another name or department.</p>
            <button 
              onClick={() => {
                setSearchQuery("");
                setSelectedDepartment("All");
              }}
              className="mt-6 text-xs tracking-widest font-mono text-accent uppercase border border-accent/50 px-4 py-2 hover:bg-accent hover:text-background transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {selectedMember && (
        <MemberModal 
          member={selectedMember} 
          onClose={() => setSelectedMember(null)} 
        />
      )}
    </section>
  );
}
