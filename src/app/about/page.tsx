export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen container mx-auto px-4 max-w-4xl">
      <div className="flex items-center gap-3 mb-6">
        <span className="font-mono text-xs tracking-widest text-accent">02 /</span>
        <h2 className="text-sm font-bold tracking-widest text-foreground uppercase">About Us</h2>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12">
        PIONEERING <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/50">INNOVATION</span>
      </h1>
      
      <div className="space-y-8 text-lg text-muted-foreground leading-relaxed border-l border-border pl-6 relative">
        <div className="absolute top-0 -left-[5px] w-2 h-2 bg-accent"></div>
        <p>
          The American Institute of Chemical Engineers (AIChE) Student Chapter is dedicated to promoting professional development, academic excellence, and community engagement among students.
        </p>
        <p>
          We organize technical workshops, industry seminars, networking events, and competitions like Chem-E-Car, ensuring our members are well-equipped for the future of engineering.
        </p>
        <p>
          Our mission is to create a vibrant ecosystem where chemical engineering students can thrive, innovate, and make meaningful contributions to society.
        </p>
      </div>

      <div className="mt-20 grid md:grid-cols-2 gap-8">
        <div className="bg-card border border-border p-8 hover:border-accent transition-colors group">
          <h3 className="text-xl font-bold tracking-widest uppercase mb-4 group-hover:text-accent transition-colors">Our Vision</h3>
          <p className="text-muted-foreground">To be the premier student organization fostering the next generation of chemical engineering leaders and innovators.</p>
        </div>
        <div className="bg-card border border-border p-8 hover:border-accent transition-colors group">
          <h3 className="text-xl font-bold tracking-widest uppercase mb-4 group-hover:text-accent transition-colors">Our Mission</h3>
          <p className="text-muted-foreground">To provide resources, network opportunities, and practical experiences that bridge the gap between classroom theory and real-world application.</p>
        </div>
      </div>
    </div>
  );
}
