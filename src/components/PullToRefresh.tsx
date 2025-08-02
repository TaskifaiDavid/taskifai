'use client';

import { ReactNode } from 'react';
import { usePullToRefresh } from '@/hooks/usePullToRefresh';

interface PullToRefreshProps {
  children: ReactNode;
  onRefresh: () => Promise<void> | void;
  enabled?: boolean;
}

export default function PullToRefresh({ 
  children, 
  onRefresh, 
  enabled = true 
}: PullToRefreshProps) {
  const {
    isRefreshing,
    pullDistance,
    isPulling,
    pullToRefreshHandlers,
    pullIndicatorStyle
  } = usePullToRefresh({
    onRefresh,
    enabled: enabled && typeof window !== 'undefined' && window.innerWidth <= 768
  });

  return (
    <div 
      className="relative min-h-screen"
      {...pullToRefreshHandlers}
    >
      {/* Pull to refresh indicator */}
      <div 
        className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none md:hidden"
        style={pullIndicatorStyle}
      >
        <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-gray-200">
          {isRefreshing ? (
            <div className="animate-spin h-6 w-6 border-2 border-blue-600 border-t-transparent rounded-full" />
          ) : (
            <svg
              className={`h-6 w-6 text-blue-600 transition-transform duration-200 ${
                isPulling ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          )}
        </div>
      </div>

      {/* Content */}
      <div style={{ transform: `translateY(${Math.min(pullDistance * 0.5, 40)}px)` }}>
        {children}
      </div>
    </div>
  );
}