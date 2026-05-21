import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Startup Metrics Alert System — Get alerts when startup metrics hit danger zones',
  description: 'Connect analytics tools, set smart thresholds for churn/growth/revenue, get Slack alerts before problems become crises. For startup founders and growth teams.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="edf105e1-deaf-4c94-9bba-ff0250c4b3da"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
