import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Moon, Sun, BookOpen } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
