
import { Menu } from '@/components/Menu/Menu'
import './globals.css'
import styles from './layout.module.css'
import { UserContextProvider } from '@/context/UserContext'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={styles.body}>
        <UserContextProvider>
          <main >{children}</main>
          <Menu />
        </UserContextProvider>
      </body>
    </html>
  )
}
