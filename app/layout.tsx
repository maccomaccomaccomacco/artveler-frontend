// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
import { Inter, Open_Sans, Jost } from 'next/font/google'
import Header from '@/components/header'
import { cn } from '@/lib/utils'
import './globals.css'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const OpenSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

const JostFont = Jost({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

const fontHeading = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body 
        className={cn(
          'antialiased',
          OpenSans.variable
        )}
      >
          <Header />
          {children}
      </body>
    </html>
  )
}