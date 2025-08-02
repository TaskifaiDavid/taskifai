'use client';

// Performance utilities for mobile optimization
export class MobilePerformance {
  static isMobile(): boolean {
    return typeof window !== 'undefined' && window.innerWidth <= 768;
  }

  static isSlowConnection(): boolean {
    if (typeof navigator === 'undefined' || !('connection' in navigator)) {
      return false;
    }
    
    const connection = (navigator as any).connection;
    return connection && (
      connection.effectiveType === 'slow-2g' ||
      connection.effectiveType === '2g' ||
      connection.saveData === true
    );
  }

  static shouldReduceAnimations(): boolean {
    if (typeof window === 'undefined') return false;
    
    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Reduce animations on slow connections or mobile with low performance
    return prefersReducedMotion || (this.isMobile() && this.isSlowConnection());
  }

  static preloadCriticalResources(): void {
    if (typeof document === 'undefined' || !this.isMobile()) return;

    // Preload critical fonts for mobile
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.as = 'font';
    fontLink.type = 'font/woff2';
    fontLink.crossOrigin = 'anonymous';
    fontLink.href = '/fonts/inter-var.woff2'; // Adjust path as needed
    document.head.appendChild(fontLink);
  }

  static setupIntersectionObserver(
    callback: IntersectionObserverCallback,
    options?: IntersectionObserverInit
  ): IntersectionObserver | null {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return null;
    }

    const defaultOptions: IntersectionObserverInit = {
      threshold: this.isMobile() ? 0.1 : 0.25,
      rootMargin: this.isMobile() ? '50px' : '100px',
      ...options,
    };

    return new IntersectionObserver(callback, defaultOptions);
  }

  static debounce<T extends (...args: any[]) => void>(
    func: T,
    wait: number
  ): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  }

  static throttle<T extends (...args: any[]) => void>(
    func: T,
    limit: number
  ): (...args: Parameters<T>) => void {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }

  // Optimize scroll performance on mobile
  static optimizeScrolling(): void {
    if (typeof document === 'undefined' || !this.isMobile()) return;

    // Add passive event listeners for better scroll performance
    const passiveSupported = this.supportsPassive();

    document.addEventListener(
      'touchstart',
      () => {},
      passiveSupported ? { passive: true } : false
    );

    document.addEventListener(
      'touchmove',
      () => {},
      passiveSupported ? { passive: true } : false
    );
  }

  private static supportsPassive(): boolean {
    let passiveSupported = false;
    try {
      const options = {
        get passive() {
          passiveSupported = true;
          return false;
        },
      } as EventListenerOptions;
      const testHandler = () => {};
      window.addEventListener('test' as any, testHandler, options);
      window.removeEventListener('test' as any, testHandler, options);
    } catch (err) {
      passiveSupported = false;
    }
    return passiveSupported;
  }
}