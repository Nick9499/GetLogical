import { Sora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme/themeRegistry";
import GetLogicCallNavbar from "./components/Navbar";
import Footer from "./components/Footer";



const sora = Sora({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '600', '700', '800'],
  variable: '--font-sora',
  display: 'swap',
});



export const metadata = {
  title: "GetLogicall",
  description: "The fastest and surest way to sell your home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={sora.variable}>
      <ThemeProvider>
        <body className="font-sora">
          <GetLogicCallNavbar />
          {children}
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
