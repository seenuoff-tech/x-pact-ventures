import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use setTimeout to ensure scroll happens after page render
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    }, 0);
  }, [pathname]);

  return null;
}
