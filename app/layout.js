import { Roboto } from "next/font/google";
import "./globals.css";
import SmothScroling from "./components/SmothScroll";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";


const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Home Page",
  description: "Generated by create Home Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar/>
        <SmothScroling>
        {children}
        </SmothScroling> 
      <Footer/>
      <ScrollToTop/>
      
      </body>
    </html>
  );
}
