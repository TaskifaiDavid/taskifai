'use client';

// Haptic feedback utility for mobile devices
export class HapticFeedback {
  private static isSupported(): boolean {
    return typeof window !== 'undefined' && 'vibrate' in navigator;
  }

  private static isMobile(): boolean {
    return typeof window !== 'undefined' && window.innerWidth <= 768;
  }

  // Light tap feedback for general interactions
  static light(): void {
    if (!this.isSupported() || !this.isMobile()) return;
    navigator.vibrate(10);
  }

  // Medium feedback for button presses
  static medium(): void {
    if (!this.isSupported() || !this.isMobile()) return;
    navigator.vibrate(25);
  }

  // Heavy feedback for important actions
  static heavy(): void {
    if (!this.isSupported() || !this.isMobile()) return;
    navigator.vibrate(50);
  }

  // Success feedback pattern
  static success(): void {
    if (!this.isSupported() || !this.isMobile()) return;
    navigator.vibrate([25, 50, 25]);
  }

  // Error feedback pattern
  static error(): void {
    if (!this.isSupported() || !this.isMobile()) return;
    navigator.vibrate([100, 50, 100, 50, 100]);
  }

  // Notification feedback
  static notification(): void {
    if (!this.isSupported() || !this.isMobile()) return;
    navigator.vibrate([50, 100, 50]);
  }

  // Selection feedback for menu items
  static selection(): void {
    if (!this.isSupported() || !this.isMobile()) return;
    navigator.vibrate(15);
  }

  // Custom vibration pattern
  static custom(pattern: number | number[]): void {
    if (!this.isSupported() || !this.isMobile()) return;
    navigator.vibrate(pattern);
  }
}

// React hook for easy haptic feedback integration
export const useHapticFeedback = () => {
  return {
    light: HapticFeedback.light,
    medium: HapticFeedback.medium,
    heavy: HapticFeedback.heavy,
    success: HapticFeedback.success,
    error: HapticFeedback.error,
    notification: HapticFeedback.notification,
    selection: HapticFeedback.selection,
    custom: HapticFeedback.custom,
  };
};