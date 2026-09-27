import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <section className="py-24 container mx-auto px-4 text-center max-w-4xl animate-fade-in">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
          ENGINEERING THE FUTURE
        </h2>
        <p className="text-muted-foreground leading-relaxed text-lg mb-10">
          The AIChE Student Chapter is a community of driven individuals dedicated to bridging the gap between theoretical knowledge and practical engineering. We foster innovation, professional development, and community impact.
        </p>
        <a href="/about" className="inline-block border border-accent text-accent px-6 py-3 font-mono tracking-widest text-sm hover:bg-accent hover:text-background transition-colors">
          LEARN MORE ABOUT US
        </a>
      </section>
    </div>
  );
}
