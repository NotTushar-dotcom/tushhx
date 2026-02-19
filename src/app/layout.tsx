import { ViewTransitions } from 'next-view-transitions';
import './globals.css';
import Navbar from '@/components/common/Navbar';

// export const metadata = getMetadata('/');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body className={`font-hanken-grotesk antialiased`}>
          <Navbar/>  
        </body>
      </html>
    </ViewTransitions>
  );
}