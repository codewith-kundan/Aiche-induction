"use client";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen container mx-auto px-4 max-w-4xl">
      <div className="flex items-center gap-3 mb-6">
        <span className="font-mono text-xs tracking-widest text-accent">04 /</span>
        <h2 className="text-sm font-bold tracking-widest text-foreground uppercase">Contact</h2>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12">
        GET IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/50">TOUCH</span>
      </h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-muted-foreground mb-8">
            Whether you have a question about our upcoming events, want to partner with us, or are interested in joining the chapter, we'd love to hear from you.
          </p>
          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-mono tracking-widest text-accent uppercase mb-2">Email</h4>
              <p className="font-mono">contact@aiche-chapter.edu</p>
            </div>
            <div>
              <h4 className="text-xs font-mono tracking-widest text-accent uppercase mb-2">Location</h4>
              <p className="font-mono">Engineering Building, Room 402<br/>University Campus</p>
            </div>
          </div>
        </div>

        <form className="bg-card border border-border p-8 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs font-mono tracking-widest uppercase mb-2">Name</label>
            <input type="text" className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-accent transition-colors" placeholder="John Doe" />
          </div>
          <div>
            <label className="block text-xs font-mono tracking-widest uppercase mb-2">Email</label>
            <input type="email" className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-accent transition-colors" placeholder="john@example.com" />
          </div>
          <div>
            <label className="block text-xs font-mono tracking-widest uppercase mb-2">Message</label>
            <textarea className="w-full bg-background border border-border px-4 py-3 min-h-[120px] focus:outline-none focus:border-accent transition-colors" placeholder="How can we help you?"></textarea>
          </div>
          <button type="submit" className="bg-foreground text-background px-8 py-4 font-bold tracking-widest text-sm hover:bg-accent transition-colors">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
}
