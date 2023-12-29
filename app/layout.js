import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme/themeRegistry";
import GetLogicCallNavbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GetLogicall",
  description: "The fastest and surest way to sell your home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={inter.className}>
          <GetLogicCallNavbar />
          {children}
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
