import React from 'react';
import { Globe, Share2 } from 'lucide-react';

const Footer = () => {
  const handleShare = async () => {
    const shareData = {
      title: '2AM Notes',
      text: 'Check out these academic notes and PYQ solutions!',
      url: window.location.origin,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.origin);
        alert('Link copied to clipboard!');
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  return (
    <footer className="border-t bg-muted/30 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} 2AM Notes. Built for students, by AI.
        </p>
        <div className="mt-4 flex justify-center gap-6 text-muted-foreground">
          <a 
            href={window.location.origin} 
            className="hover:text-primary transition-colors"
            title="Website"
          >
            <Globe size={20} />
          </a>
          <button 
            onClick={handleShare}
            className="hover:text-primary transition-colors cursor-pointer"
            title="Share Platform"
          >
            <Share2 size={20} />
          </button>
          <a 
            href="https://github.com/Ritesh-Dhekane" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-primary transition-colors"
            title="Github Profile"
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
