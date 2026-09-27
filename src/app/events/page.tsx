export default function EventsPage() {
  const events = [
    {
      id: 1,
      title: "Chem-E-Car Workshop",
      date: "OCTOBER 15, 2024",
      description: "Hands-on session building chemical-powered vehicles.",
      type: "Technical"
    },
    {
      id: 2,
      title: "Industry Networking Night",
      date: "NOVEMBER 02, 2024",
      description: "Connect with alumni and professionals in the chemical engineering sector.",
      type: "Networking"
    },
    {
      id: 3,
      title: "Process Safety Seminar",
      date: "NOVEMBER 18, 2024",
      description: "Guest lecture on modern process safety management in industrial plants.",
      type: "Seminar"
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen container mx-auto px-4 max-w-5xl">
      <div className="flex items-center gap-3 mb-6">
        <span className="font-mono text-xs tracking-widest text-accent">03 /</span>
        <h2 className="text-sm font-bold tracking-widest text-foreground uppercase">Events</h2>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-16">
        UPCOMING <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/50">CALENDAR</span>
      </h1>
      
      <div className="flex flex-col gap-6">
        {events.map((event) => (
          <div key={event.id} className="bg-card border border-border p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-center justify-between group hover:border-accent transition-all hover:translate-x-2">
            <div>
              <div className="text-xs font-mono text-accent tracking-widest uppercase mb-2">{event.date}</div>
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-2 group-hover:text-accent transition-colors">{event.title}</h3>
              <p className="text-muted-foreground">{event.description}</p>
            </div>
            <div className="flex-shrink-0">
              <span className="px-3 py-1 border border-border text-xs font-mono tracking-widest uppercase">{event.type}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
