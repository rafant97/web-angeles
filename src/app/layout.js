import './globals.css'

export const metadata = {
  title: 'Mentora de Emprendedoras | Angeles Conejero',
  description: 'Como mentora de emprendedoras ayudo a conseguir tus objetivos profesionales y vitales desde tu equilibrio personal.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={''}>{children}</body>
    </html>
  )
}
