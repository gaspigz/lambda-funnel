import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackStandardEvent } from '../utils/pixel';

/**
 * Component to track PageViews in a React SPA
 */
export const PixelTracker = () => {
    const location = useLocation();

    useEffect(() => {
        // Track PageView on route change
        trackStandardEvent('PageView');
    }, [location]);

    return null; // This component doesn't render anything
};
