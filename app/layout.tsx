import type { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return children
}

export const metadata = {
  title: 'Suzaa Docs',
  description: 'Documentation for Suzaa'
}
