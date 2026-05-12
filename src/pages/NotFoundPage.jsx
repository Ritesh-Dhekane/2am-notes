import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="container mx-auto px-4 py-32 text-center">
      <div className="bg-destructive/10 inline-flex p-4 rounded-full text-destructive mb-6">
        <AlertCircle size={48} />
      </div>
      <h1 className="text-4xl font-bold mb-4">404 - Knowledge Not Found</h1>
      <p className="text-muted-foreground mb-8 max-w-md mx-auto">
        The page you are looking for might have been moved, deleted, or never existed in the first place.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
      >
        <Home size={18} />
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
