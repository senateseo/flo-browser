import { Toaster } from 'sonner';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '../components/providers/theme-provider'
import { ConvexClientProvider } from '../components/providers/convex-provider'
import { ModalProvider } from '../components/providers/modal-provider';
import { EdgeStoreProvider } from '../lib/edgestore';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FLO',
  description: 'Create your own FLO',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <EdgeStoreProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="sotion-theme-2"
        >
          <Toaster position="bottom-center" />
          <ModalProvider />
        {children}
        </ThemeProvider>
        </EdgeStoreProvider>
        </ConvexClientProvider>
      </body>
    </html>
  )
}
