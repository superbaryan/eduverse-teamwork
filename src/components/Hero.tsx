
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div 
        ref={heroRef}
        className="max-w-7xl mx-auto px-6 transition duration-700 transform opacity-0 translate-y-10"
      >
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Reimagining Education
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
            Your College Workspace Reimagined
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance">
            EduVerse brings together students and teachers in one unified digital space.
            Simplify assignments, enhance collaboration, and elevate your academic experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="rounded-full px-8 py-6 text-base bg-primary hover:bg-primary/90">
              <Link to="/dashboard">Get Started</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-8 py-6 text-base">
              <Link to="/demo">View Demo</Link>
            </Button>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="relative mx-auto max-w-5xl">
          <div className="glass-effect rounded-2xl shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1571260899304-425eee4c7efd?q=80&w=2070&auto=format&fit=crop" 
              alt="EduVerse Dashboard" 
              className="w-full h-auto rounded-2xl transition-transform duration-500 hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
