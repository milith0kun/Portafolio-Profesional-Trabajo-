import './globals.css'
import './layout.css'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="html-root">
      <body className="body-container">{children}</body>
    </html>
  )
}

