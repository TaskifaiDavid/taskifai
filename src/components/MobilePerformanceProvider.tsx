'use client';

import { useEffect, ReactNode } from 'react';
import { MobilePerformance } from '@/utils/performance';

interface MobilePerformanceProviderProps {
  children: ReactNode;
}

export default function MobilePerformanceProvider({ 
  children 
}: MobilePerformanceProviderProps) {
  useEffect(() => {
    // Only run on client side and mobile devices
    if (typeof window === 'undefined' || !MobilePerformance.isMobile()) {
      return;
    }

    // Preload critical resources
    MobilePerformance.preloadCriticalResources();

    // Optimize scrolling performance
    MobilePerformance.optimizeScrolling();

    // Add CSS class for reduced animations if needed
    if (MobilePerformance.shouldReduceAnimations()) {
      document.documentElement.classList.add('reduce-motion');
    }

    // Add mobile-specific CSS class
    document.documentElement.classList.add('mobile-device');

    // Cleanup on unmount
    return () => {
      document.documentElement.classList.remove('mobile-device', 'reduce-motion');
    };
  }, []);

  return <>{children}</>;
}