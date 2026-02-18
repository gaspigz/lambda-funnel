import { useEffect, useRef } from 'react'

interface CalendlyWidgetProps {
    url: string
    onEventScheduled: () => void
}

declare global {
    interface Window {
        Calendly: any
    }
}

export const CalendlyWidget = ({ url, onEventScheduled }: CalendlyWidgetProps) => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleCalendlyEvent = (e: MessageEvent) => {
            if (e.data.event === 'calendly.event_scheduled') {
                onEventScheduled()
            }
        }

        window.addEventListener('message', handleCalendlyEvent)

        let checkInterval: ReturnType<typeof setInterval>

        const initWidget = () => {
            if (window.Calendly && containerRef.current) {
                // Clear the container first to avoid duplicate widgets
                containerRef.current.innerHTML = ''

                window.Calendly.initInlineWidget({
                    url: `${url}?hide_landing_page=1&hide_gdpr_banner=1`,
                    parentElement: containerRef.current,
                    prefill: {},
                    utm: {}
                })
                if (checkInterval) clearInterval(checkInterval)
            }
        }

        // Try to initialize or wait for script
        if (window.Calendly) {
            initWidget()
        } else {
            checkInterval = setInterval(initWidget, 100)
        }

        return () => {
            window.removeEventListener('message', handleCalendlyEvent)
            if (checkInterval) clearInterval(checkInterval)
        }
    }, [url, onEventScheduled])

    return (
        <div
            ref={containerRef}
            className="w-full h-[700px]"
            style={{ minWidth: '320px', position: 'relative' }}
        />
    )
}
