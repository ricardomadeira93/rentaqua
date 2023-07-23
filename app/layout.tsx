import Modal from './components/Modals/Modal';
import Navbar from './components/Navbar/Navbar';
import './globals.css';
import { Nunito } from 'next/font/google';

export const metadata = {
  title: 'Rentaqua',
  description: 'Rent Jetski',
};

const font = Nunito({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <Navbar />
        <Modal
          title='Placeholder TITLE'
          isOpen
        />
        {children}
      </body>
    </html>
  );
}
