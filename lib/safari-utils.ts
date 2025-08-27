/**
 * Safari Detection and Optimization Utilities
 */

// Detect if the browser is Safari
export const isSafari = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const userAgent = navigator.userAgent;
  const isSafariBrowser = /Safari/.test(userAgent) && !/Chrome/.test(userAgent);
  
  return isSafariBrowser;
};

// Detect if the device is iOS Safari
export const isIOSSafari = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const userAgent = navigator.userAgent;
  const isIOS = /iPad|iPhone|iPod/.test(userAgent);
  const isSafariBrowser = /Safari/.test(userAgent) && !/Chrome/.test(userAgent);
  
  return isIOS && isSafariBrowser;
};

// Safari-specific video optimization
export const optimizeVideoForSafari = (videoElement: HTMLVideoElement): void => {
  if (!isSafari()) return;
  
  // Force video reload for Safari
  videoElement.load();
  
  // Add Safari-specific attributes
  videoElement.setAttribute('webkit-playsinline', 'true');
  videoElement.setAttribute('playsinline', 'true');
  
  // Handle Safari autoplay restrictions
  const playPromise = videoElement.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      // Auto-play was prevented, but video is still loaded
      console.log('Video autoplay prevented by Safari');
    });
  }
};

// Safari font loading optimization
export const optimizeFontsForSafari = (): void => {
  if (typeof document === 'undefined' || !isSafari()) return;
  
  // Preload critical fonts for Safari
  const fontFiles = [
    '/fonts/Jost-Regular.ttf',
    '/fonts/Jost-Light.ttf',
    '/fonts/Jost-Medium.ttf',
  ];
  
  fontFiles.forEach(font => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.type = 'font/ttf';
    link.href = font;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

// Safari scroll optimization
export const optimizeScrollForSafari = (): void => {
  if (typeof document === 'undefined' || !isSafari()) return;
  
  // Add momentum scrolling for iOS Safari
  const bodyStyle = document.body.style as CSSStyleDeclaration & {
    webkitOverflowScrolling?: string;
  };
  bodyStyle.webkitOverflowScrolling = 'touch';
};

// Safari-specific CSS classes
export const getSafariClasses = (): string => {
  if (!isSafari()) return '';
  
  return 'safari-optimized';
};

// Initialize Safari optimizations
export const initSafariOptimizations = (): void => {
  if (typeof window === 'undefined') return;
  
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      optimizeFontsForSafari();
      optimizeScrollForSafari();
      
      // Optimize all videos on the page
      const videos = document.querySelectorAll('video');
      videos.forEach(video => optimizeVideoForSafari(video as HTMLVideoElement));
    });
  } else {
    optimizeFontsForSafari();
    optimizeScrollForSafari();
    
    // Optimize all videos on the page
    const videos = document.querySelectorAll('video');
    videos.forEach(video => optimizeVideoForSafari(video as HTMLVideoElement));
  }
};

// Export utilities as named exports
const safariUtils = {
  isSafari,
  isIOSSafari,
  optimizeVideoForSafari,
  optimizeFontsForSafari,
  optimizeScrollForSafari,
  getSafariClasses,
  initSafariOptimizations,
};

export default safariUtils;
