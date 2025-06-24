import { Sora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme/themeRegistry";
import GetLogicCallNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import GoogleAnalytics from "./components/GA";

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata = {
  title: "Upsales",
  description:
    "UpSales works to service the customers who bought and convert the customers who didn’t. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={sora.variable}>
      <ThemeProvider>
        <body className="font-sora">
          <GoogleAnalytics />
          <GetLogicCallNavbar />
          {children}
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
