import React from 'react';
import { Globe, Share2, Users } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} 2AM Notes. Built for students, by AI.
        </p>
        <div className="mt-4 flex justify-center gap-4 text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors"><Globe size={18} /></a>
          <a href="#" className="hover:text-primary transition-colors"><Share2 size={18} /></a>
          <a href="#" className="hover:text-primary transition-colors"><Users size={18} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
