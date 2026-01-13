import "@/styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Nike Pulse – AI-Powered Experience",
  description: "A modern Nike experience with AI-driven personalization, performance, and storytelling.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#050509] text-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}