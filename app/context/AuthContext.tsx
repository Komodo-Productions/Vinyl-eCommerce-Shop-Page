"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AuthContextType {
  user: any;
  login: (userData: any) => void;
  logout: () => Promise<void>;
  isLoading: boolean,
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/auth/check", {
          method: "GET",
          credentials: "include", // incluye la cookie
        });

        const data = await res.json();
        if (data.success) {
          setUser(data.user);
        } else {
          setUser(null);
        }
      } catch (err) {
        console.error("Error al verificar sesión:", err);
      } finally {
        setIsLoading(false);
      }
    };

     checkSession();
  }, []);

  const login = (userData: any) => {
    setUser(userData);
  };

  const logout = async () => {
    await fetch("http://localhost:4000/api/auth/logout", {
      method: "POST",
      credentials: "include", // para borrar cookie
    });
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
