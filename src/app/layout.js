import './globals.css'
import { Inter } from 'next/font/google'
// import ProgressBar from "@badrap/bar-of-progress";
// import Router from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'airbnb',
  description: 'Generated by create next app',
}

// const progress = new ProgressBar({
//   size: 4,
//   color: "#FD5B61",
//   className:'z-50',
//   delay:100
// });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
