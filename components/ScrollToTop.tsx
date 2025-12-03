import { useEffect, useRef } from "react";

export default function ScrollToTop() {
  // Track the previous path to only scroll when path changes (not just anchor hash)
  const prevPathRef = useRef(window.location.hash.split('?')[0].split('#')[0]);

  useEffect(() => {
    const handleHashChange = () => {
      // Get current path from hash (e.g. #/page from #/page#section)
      const fullHash = window.location.hash || '';
      // Remove leading # if present, then get path part before any secondary # or ?
      const pathPart = fullHash.replace(/^#/, '').split('?')[0].split('#')[0];

      if (pathPart !== prevPathRef.current) {
        window.scrollTo(0, 0);
        prevPathRef.current = pathPart;
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Also scroll on mount
    window.scrollTo(0, 0);

    return () => {
        window.removeEventListener('hashchange', handleHashChange);
    }
  }, []);

  return null;
}