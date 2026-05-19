import React, { useState, useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { trackThemeChange } from '../utils/analytics';

const MainLayout = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('2am-notes-theme') || 'midnight';
  });

  const isFirstRender = useRef(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('2am-notes-theme', theme);
    
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      trackThemeChange(theme);
    }
  }, [theme]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-theme overflow-x-hidden">
      <Navbar theme={theme} setTheme={setTheme} />
      
      <main className="flex-grow">
        <Outlet context={{ theme, setTheme }} />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
