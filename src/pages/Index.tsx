
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Testimonial = ({ quote, author, role, image }: { quote: string; author: string; role: string; image: string }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="mb-4 text-primary">
        <svg width="45" height="36" className="fill-current" viewBox="0 0 45 36" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.415.43c-2.523 0-4.741.498-6.652 1.492C4.853 2.917 3.29 4.23 2.075 5.857.86 7.485.253 9.294.253 11.286c0 2.473.822 4.479 2.467 6.015 1.645 1.535 3.744 2.304 6.297 2.304 1.003 0 2.068-.175 3.192-.525 1.124-.349 2.073-.698 2.847-1.048-.49 2.056-1.426 4.058-2.809 6.002-1.382 1.944-3.237 3.924-5.566 5.942L5.7 29.016l3.465 2.085c3.19-2.087 5.973-4.613 8.35-7.577 2.377-2.964 4.154-6.159 5.33-9.58 1.176-3.422 1.763-6.858 1.763-10.307V1.183h-1.133c-2.56 0-6.03.534-10.059 1.604L13.416.432V.43z" />
          <path d="M44.032.43c-2.523 0-4.74.498-6.652 1.492-1.91.995-3.472 2.307-4.687 3.935-1.216 1.628-1.823 3.437-1.823 5.429 0 2.473.822 4.479 2.467 6.015 1.645 1.535 3.744 2.304 6.297 2.304 1.003 0 2.068-.175 3.192-.525 1.124-.349 2.073-.698 2.847-1.048-.49 2.056-1.426 4.058-2.809 6.002-1.382 1.944-3.237 3.924-5.566 5.942l-1.981-.96 3.465 2.085c3.19-2.087 5.973-4.613 8.35-7.577 2.377-2.964 4.154-6.159 5.33-9.58 1.176-3.422 1.763-6.858 1.763-10.307V1.183h-1.133c-2.56 0-6.03.534-10.059 1.604L44.033.432V.43z" />
        </svg>
      </div>
      <p className="text-foreground mb-6">{quote}</p>
      <div className="flex items-center">
        <img
          src={image}
          alt={author}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-medium">{author}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const testimonials = [
    {
      quote: "EduVerse has completely transformed how I organize my classes. The interface is intuitive, and my students love using it too!",
      author: "Dr. Sarah Johnson",
      role: "Professor of Computer Science",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      quote: "As a student juggling multiple courses, EduVerse has been a game-changer. I can track all my assignments and communicate with professors in one place.",
      author: "Michael Chen",
      role: "Engineering Student",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      quote: "The collaborative features in EduVerse have made group projects so much more efficient. It's like it was designed specifically for higher education.",
      author: "Emily Rodriguez",
      role: "Digital Learning Coordinator",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        <Hero />
        <Features />
        
        {/* Testimonials Section */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Testimonials
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Loved by Educators and Students
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See what our users are saying about how EduVerse has transformed their academic experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Testimonial
                  key={index}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                  image={testimonial.image}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="glass-effect rounded-2xl p-10 md:p-16 text-center relative overflow-hidden">
              {/* Background elements */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
              
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 relative z-10">
                Ready to Transform Your Academic Experience?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 relative z-10">
                Join thousands of educators and students who are already using EduVerse to 
                create more engaging, organized, and collaborative learning environments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                <Button asChild className="rounded-full px-8 py-6 text-base bg-primary hover:bg-primary/90">
                  <Link to="/dashboard">Get Started</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full px-8 py-6 text-base">
                  <Link to="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
