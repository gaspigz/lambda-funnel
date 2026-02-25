/**
 * Utility to interact with Meta Pixel (fbq)
 */

interface FbqWindow extends Window {
    fbq?: (...args: any[]) => void;
}

export const pixel = (event: string, action: string, data?: Record<string, any>) => {
    const win = window as unknown as FbqWindow;
    if (typeof win.fbq === 'function') {
        if (data) {
            win.fbq(event, action, data);
        } else {
            win.fbq(event, action);
        }

        if (import.meta.env.DEV) {
            console.log(`[Meta Pixel] ${event}: ${action}`, data || '');
        }
    } else {
        if (import.meta.env.DEV) {
            console.warn('[Meta Pixel] fbq not found. Event skipped:', action);
        }
    }
};

export const trackStandardEvent = (action: string, data?: Record<string, any>) => {
    pixel('track', action, data);
};

export const trackCustomEvent = (action: string, data?: Record<string, any>) => {
    pixel('trackCustom', action, data);
};
