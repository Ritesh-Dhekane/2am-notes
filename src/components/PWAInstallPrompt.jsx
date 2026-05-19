import React, { useState, useEffect } from 'react';
import { Download, X, Calendar } from 'lucide-react';

const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has permanently dismissed the installation prompt
    const isDismissed = localStorage.getItem('pwa-install-dismissed') === 'true';
    if (isDismissed) return;

    // Check if the user opted to "Remind Later" and check if 24 hours have elapsed
    const remindLaterTime = localStorage.getItem('pwa-remind-later');
    if (remindLaterTime) {
      const hoursPassed = (Date.now() - parseInt(remindLaterTime, 10)) / (1000 * 60 * 60);
      if (hoursPassed < 24) return; // Prompt remains snoozed
    }

    const handleBeforeInstallPrompt = (e) => {
      // Prevent browser's default installation infobar from prompting
      e.preventDefault();
      // Store the event object to prompt the user later
      setDeferredPrompt(e);
      // Wait 3 seconds after load to present the PWA banner for premium UX
      setTimeout(() => {
        setIsVisible(true);
      }, 3000);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Close prompt cleanly once installed successfully
    const handleAppInstalled = () => {
      setDeferredPrompt(null);
      setIsVisible(false);
      console.log('2AM Notes successfully installed as a PWA app.');
    };

    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    
    // Launch native PWA installer prompt dialog
    deferredPrompt.prompt();
    
    // Review choice made by the user
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`PWA installation prompt decision outcome: ${outcome}`);
    
    // Clear prompt registry and hide card layout
    setDeferredPrompt(null);
    setIsVisible(false);
  };

  const handleRemindLaterClick = () => {
    localStorage.setItem('pwa-remind-later', Date.now().toString());
    setIsVisible(false);
  };

  const handleDismissClick = () => {
    localStorage.setItem('pwa-install-dismissed', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-4 right-4 md:left-auto md:right-6 z-[100] max-w-md bg-card/90 backdrop-blur-xl border border-border rounded-2xl p-5 shadow-2xl animate-in slide-in-from-bottom-5 duration-300 transition-theme">
      <div className="flex items-start gap-4">
        <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0 transition-theme">
          <Download size={24} />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <h4 className="font-bold text-base text-foreground">Install 2AM Notes</h4>
            <button 
              onClick={() => setIsVisible(false)} 
              className="text-muted-foreground hover:text-foreground p-1 rounded-full transition-colors"
              title="Close prompt"
            >
              <X size={16} />
            </button>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Add 2AM Notes to your home screen for quick, offline access to exam materials and notes anytime.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleInstallClick}
              className="px-4 py-2 bg-primary text-primary-foreground text-xs font-bold rounded-xl hover:opacity-90 transition-opacity flex items-center gap-1.5 shadow-md shadow-primary/15"
            >
              Install App
            </button>
            <button
              onClick={handleRemindLaterClick}
              className="px-3 py-2 bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground text-xs font-medium rounded-xl transition-all flex items-center gap-1"
            >
              <Calendar size={12} />
              Remind Later
            </button>
            <button
              onClick={handleDismissClick}
              className="px-3 py-2 text-muted-foreground/60 hover:text-destructive text-xs font-medium rounded-xl hover:bg-destructive/5 transition-all"
            >
              No need
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PWAInstallPrompt;
