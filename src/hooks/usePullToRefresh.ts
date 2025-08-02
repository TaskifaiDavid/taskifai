'use client';

import { useState, useEffect, TouchEvent, useRef } from 'react';

interface PullToRefreshOptions {
  onRefresh: () => Promise<void> | void;
  threshold?: number;
  resistance?: number;
  enabled?: boolean;
}

export const usePullToRefresh = ({
  onRefresh,
  threshold = 80,
  resistance = 2.5,
  enabled = true
}: PullToRefreshOptions) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [pullDistance, setPullDistance] = useState(0);
  const [isPulling, setIsPulling] = useState(false);
  
  const startY = useRef(0);
  const currentY = useRef(0);
  const isDragging = useRef(false);

  const handleTouchStart = (e: TouchEvent) => {
    if (!enabled || isRefreshing) return;
    
    // Only trigger if user is at the top of the page
    if (window.pageYOffset > 0) return;
    
    startY.current = e.touches[0].clientY;
    isDragging.current = true;
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!enabled || isRefreshing || !isDragging.current) return;
    
    currentY.current = e.touches[0].clientY;
    const distance = currentY.current - startY.current;
    
    // Only pull down
    if (distance > 0) {
      // Prevent default scrolling when pulling
      if (window.pageYOffset === 0) {
        e.preventDefault();
      }
      
      const calculatedDistance = distance / resistance;
      setPullDistance(calculatedDistance);
      setIsPulling(calculatedDistance > 20);
    }
  };

  const handleTouchEnd = async () => {
    if (!enabled || isRefreshing || !isDragging.current) return;
    
    isDragging.current = false;
    
    if (pullDistance > threshold) {
      setIsRefreshing(true);
      try {
        await onRefresh();
      } finally {
        setIsRefreshing(false);
      }
    }
    
    setPullDistance(0);
    setIsPulling(false);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      setIsRefreshing(false);
      setPullDistance(0);
      setIsPulling(false);
    };
  }, []);

  return {
    isRefreshing,
    pullDistance,
    isPulling,
    pullToRefreshHandlers: {
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd,
    },
    pullIndicatorStyle: {
      transform: `translateY(${Math.min(pullDistance, threshold)}px)`,
      opacity: Math.min(pullDistance / threshold, 1),
    }
  };
};