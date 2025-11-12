"use client";
import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/app/context/AuthContext";
import styles from "../login/Login.module.css";

const Login = () => {
  const [email, setEmail] = useState<string>(""); 
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const { login } = useAuth();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Error al iniciar sesión");
      }

      login(data.user);

      //alert("Inicio de sesión exitoso");
      router.push("/");

      //console.log("Token:", data.token);

    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.videoContainer}>
          <video autoPlay muted loop className={styles.video}>
            <source src="/Vinylretro.mp4" type="video/mp4" />
            <div className={styles.videoFallback}></div>
          </video>
          <div className={styles.videoOverlay}></div>
        </div>

        <div className={styles.formContainer}>
          <div className={styles.loginForm}>
            <div className={styles.formHeader}>
              <h2 className={styles.formTitle}>Sign In</h2>
              <p className={styles.formSubtitle}>Welcome back to Komodo Productions</p>
            </div>

            <form onSubmit={handleSubmit} className={styles.form} data-testid="login-form">
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Correo electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.input}
                  placeholder="Enter your email"
                  required
                  data-testid = "email-input"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="password" className={styles.label}>
                  Contraseña
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={styles.input}
                  placeholder="Enter your password"
                  required
                  data-testid="password-input"
                />
              </div>

              {error && <p style={{ color: "red" }} data-testid="login-error">{error}</p>}

              <button
                type="submit"
                className={styles.submitButton}
                disabled={loading}
                data-testid="login-button"
              >
                {loading ? "Ingresando..." : "Ingresar"}
              </button>
            </form>

            <div className={styles.divider}>
              <div className={styles.dividerLine}></div>
              <span className={styles.dividerText}>or</span>
              <div className={styles.dividerLine}></div>
            </div>

            <div className={styles.registerSection} data-testid="register-section">
              <p className={styles.registerText}>Don’t have an account?</p>
              <Link href="/register" className={styles.registerButton} data-testid="register-link">
                Registrarse
              </Link>
            </div>

            <div className={styles.forgotPassword}>
              <Link href="/forgot-password" className={styles.forgotPasswordLink} data-testid="forgot-password-link">
                Forgot your password?
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
