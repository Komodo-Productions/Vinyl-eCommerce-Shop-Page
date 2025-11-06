// app/ClientLayout.tsx
"use client";
import { AuthProvider } from "./context/AuthContext";
import Header1 from "./components/Header";
import Footer from "./components/Footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <Header1 />
      <div className="flex justify-center border border-black mx-auto min-h-screen">
        <div className="w-full">{children}</div>
      </div>
      <Footer />
    </AuthProvider>
  );
}

