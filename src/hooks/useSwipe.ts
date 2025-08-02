'use client';

import { useState, useEffect, TouchEvent } from 'react';

interface SwipeInput {
  onSwipedLeft?: () => void;
  onSwipedRight?: () => void;
  onSwipedUp?: () => void;
  onSwipedDown?: () => void;
  delta?: number;
}

interface SwipeOutput {
  onTouchStart: (e: TouchEvent) => void;
  onTouchMove: (e: TouchEvent) => void;
  onTouchEnd: () => void;
}

export const useSwipe = (input: SwipeInput): SwipeOutput => {
  const [touchStart, setTouchStart] = useState({ x: 0, y: 0 });
  const [touchEnd, setTouchEnd] = useState({ x: 0, y: 0 });

  const minSwipeDistance = input.delta || 50;

  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd({ x: 0, y: 0 }); // otherwise the swipe is fired even with usual touch events
    setTouchStart({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    });
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    });
  };

  const onTouchEnd = () => {
    if (!touchStart.x || !touchEnd.x) return;
    
    const distanceX = touchStart.x - touchEnd.x;
    const distanceY = touchStart.y - touchEnd.y;
    
    const isLeftSwipe = distanceX > minSwipeDistance;
    const isRightSwipe = distanceX < -minSwipeDistance;
    const isUpSwipe = distanceY > minSwipeDistance;
    const isDownSwipe = distanceY < -minSwipeDistance;

    if (isLeftSwipe && input.onSwipedLeft) {
      input.onSwipedLeft();
    }
    if (isRightSwipe && input.onSwipedRight) {
      input.onSwipedRight();
    }
    if (isUpSwipe && input.onSwipedUp) {
      input.onSwipedUp();
    }
    if (isDownSwipe && input.onSwipedDown) {
      input.onSwipedDown();
    }
  };

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };
};