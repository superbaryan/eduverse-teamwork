
import React, { useEffect, useRef } from 'react';
import { BookOpen, Calendar, MessageSquare, Users, FileText, Bell } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, delay }) => {
  const featureRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }, delay);
        }
      },
      { threshold: 0.1 }
    );
    
    if (featureRef.current) {
      observer.observe(featureRef.current);
    }
    
    return () => {
      if (featureRef.current) {
        observer.unobserve(featureRef.current);
      }
    };
  }, [delay]);
  
  return (
    <div 
      ref={featureRef} 
      className="glass-effect rounded-xl p-6 transition duration-500 transform opacity-0 translate-y-10 hover:shadow-md"
    >
      <div className="bg-primary/10 p-3 rounded-lg w-12 h-12 flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <BookOpen size={20} />,
      title: "Course Management",
      description: "Organize courses, materials, and resources in one centralized place for easy access.",
      delay: 0,
    },
    {
      icon: <FileText size={20} />,
      title: "Assignment Tracking",
      description: "Create, distribute, and grade assignments with intuitive tools and clear deadlines.",
      delay: 100,
    },
    {
      icon: <Users size={20} />,
      title: "Collaborative Learning",
      description: "Foster teamwork with built-in collaboration tools for group projects and discussions.",
      delay: 200,
    },
    {
      icon: <Calendar size={20} />,
      title: "Academic Calendar",
      description: "Keep track of important dates, deadlines, and events with a unified calendar system.",
      delay: 300,
    },
    {
      icon: <MessageSquare size={20} />,
      title: "Discussion Forums",
      description: "Engage in meaningful conversations with dedicated spaces for course discussions.",
      delay: 400,
    },
    {
      icon: <Bell size={20} />,
      title: "Smart Notifications",
      description: "Stay updated with timely alerts for upcoming deadlines and important announcements.",
      delay: 500,
    },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 overflow-hidden" id="features">
      <div className="max-w-7xl mx-auto px-6">
        <div 
          ref={sectionRef}
          className="text-center mb-16 transition duration-700 opacity-0"
        >
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Key Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Everything You Need in One Place
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            EduVerse provides a comprehensive set of tools designed specifically for academic environments, 
            making education more connected, efficient, and engaging.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Feature 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
