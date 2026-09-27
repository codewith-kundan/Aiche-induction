"use client";

import { Search, SlidersHorizontal } from "lucide-react";

interface FilterBarProps {
  departments: string[];
  selectedDepartment: string;
  onDepartmentSelect: (dept: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function FilterBar({
  departments,
  selectedDepartment,
  onDepartmentSelect,
  searchQuery,
  onSearchChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 animate-fade-in border-b border-border pb-6">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onDepartmentSelect("All")}
          className={`px-4 py-2 text-sm font-mono tracking-wider transition-all border ${
            selectedDepartment === "All"
              ? "bg-foreground text-background border-foreground"
              : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground"
          }`}
        >
          ALL
        </button>
        {departments.map((dept) => (
          <button
            key={dept}
            onClick={() => onDepartmentSelect(dept)}
            className={`px-4 py-2 text-sm font-mono tracking-wider uppercase transition-all border ${
              selectedDepartment === dept
                ? "bg-foreground text-background border-foreground"
                : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground"
            }`}
          >
            {dept}
          </button>
        ))}
      </div>

      <div className="relative w-full md:w-auto min-w-[280px] group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-muted-foreground group-focus-within:text-accent transition-colors" />
        </div>
        <input
          type="text"
          placeholder="Search members..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full bg-background border border-border pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all rounded-none"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <SlidersHorizontal className="h-4 w-4 text-border" />
        </div>
      </div>
    </div>
  );
}
