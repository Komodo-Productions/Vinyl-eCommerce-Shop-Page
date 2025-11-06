"use client";
import React, { useState, FormEvent } from "react";
import Link from "next/link";
import styles from "../register/Register.module.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log("Input changed:", name, value);
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    console.log("Form submitted", formData);

    // Validar contraseñas iguales
    if (formData.password !== formData.confirmPassword) {
    setError("Las contraseñas no coinciden");
    console.log("Passwords no coinciden"); 
    return;
  }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:4000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          last_name: formData.last_name,
          phone: formData.phone,
          email: formData.email,
          password: formData.password,
        }),
        credentials: "include",
      });

      console.log("Fetch enviado");
      console.log("Status:", res.status);
      const data = await res.json();
      console.log("Respuesta del servidor:", data);
      console.log("Form submitted", formData);


      if (!res.ok) {
        throw new Error(data.message || "Error al registrarse");
      }

      // Guardar token para mantener sesión iniciada (opcional)
      localStorage.setItem("token", data.token);

      alert("Registro exitoso. Bienvenido a Komodo Productions");

      
      window.location.href = "/shop";

    } catch (err: any) {
      console.error("Error al registrarse:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      
      {/* Sección principal con video de fondo */}
      <main className={styles.main}>
        {/* Video de fondo */}
        <div className={styles.videoContainer}>
          <video
            autoPlay
            muted
            loop
            className={styles.video}
          >
            <source src="/Vinylretro.mp4" type="video/mp4" />
            {/* Fallback en caso de que el video no cargue */}
            <div className={styles.videoFallback}></div>
          </video>
          {/* Overlay para mejorar legibilidad */}
          <div className={styles.videoOverlay}></div>
        </div>

        {/* Contenedor del formulario */}
        <div className={styles.formContainer}>
          <div className={styles.registerForm}>
            
            {/* Layout de dos columnas */}
            <div className={styles.formLayout}>
              
              {/* Columna izquierda - IMAGEN DE FONDO con texto */}
              <div className={styles.leftColumn}>
                <div className={styles.imageBackground}></div>
                <div className={styles.leftContent}>
                  <h2 className={styles.leftTitle}>Create your Account</h2>
                  <p className={styles.leftSubtitle}>
                    Discover rare vinyl treasures and build your music collection!
                  </p>
                </div>
              </div>

              {/* Columna derecha - Formulario */}
              <div className={styles.rightColumn}>
                <div className={styles.formContent}>
                  <form onSubmit={handleSubmit} className={styles.form}>
                    
                    {/* Campos del formulario */}
                    {/* Campo Nombre Completo */}
                    <div className={styles.formGroup}>
                      <label htmlFor="name" className={styles.label}>
                        First Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="Enter your first name"
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="last_name" className={styles.label}>
                        Last Name
                      </label>
                      <input
                        id="last_name"
                        name="last_name"
                        type="text"
                        value={formData.last_name}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="Enter your last name"
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="phone" className={styles.label}>
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="text"
                        value={formData.phone}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>

                    {/* Campo Email */}
                    <div className={styles.formGroup}>
                      <label htmlFor="email" className={styles.label}>
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    {/* Campo Contraseña */}
                    <div className={styles.formGroup}>
                      <label htmlFor="password" className={styles.label}>
                        Password
                      </label>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="Create a password"
                        required
                      />
                    </div>

                    {/* Campo Confirmar Contraseña */}
                    <div className={styles.formGroup}>
                      <label htmlFor="confirmPassword" className={styles.label}>
                        Confirm Password
                      </label>
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="Confirm your password"
                        required
                      />
                    </div>

                    {/* Botón Sign Up */}
                    <button
                      type="submit"
                      className={styles.submitButton}
                    >
                      Sign Up
                    </button>

                    <div className={styles.divider}>
                      <div className={styles.dividerLine}></div>
                      <span className={styles.dividerText}>or</span>
                      <div className={styles.dividerLine}></div>
                    </div>

                    {/* Botón Sign Up  */}
                    <button
                      type="button"
                      className={styles.googleButton}
                    >
                      <svg className={styles.googleIcon} viewBox="0 0 24 24" width="20" height="20">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      Sign up with Google
                    </button>
                  </form>

                  {/* Enlace para login */}
                  <div className={styles.loginSection}>
                    <p className={styles.loginText}>Already have an account?</p>
                    <Link
                      href="/login"
                      className={styles.loginButton}
                    >
                      Sign In
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;