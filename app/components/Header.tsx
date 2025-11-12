"use client";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation"; 
import "../style2.css";
import { useAuth } from "@/app/context/AuthContext"; // 👈 importamos el contexto

const Header1: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout, isLoading } = useAuth(); // 👈 usamos contexto
  const isLoggedIn = !!user;
  const router = useRouter();
  const pathname = usePathname(); 

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  const isShopPage = pathname === "/shop";

  if (isLoading) return null; // evita parpadeo mientras se verifica la sesión

  return (
    <div data-animation="default" className="navbar w-nav" role="banner" data-duration="400" data-testid="header-container">
      <div className="nav-content-grid">
        <div className="nav-link-left" data-testid="header-left">
          <div className="menu-button-lower-desktop w-nav-button" onClick={toggleMenu} data-testid="menu-toggle">
            <div className={`hamburger ${menuOpen ? "active" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="nav-link-wrap desktop-links">
            <div className="link-block-wrap border-r">
              <a href={isShopPage ? "/" : "/shop"} className="links w-inline-block">
                <div className="link-text">{isShopPage ? "Home" : "Shop"}</div>
                <div className="link-text">{isShopPage ? "Home" : "Shop"}</div>
              </a>
            </div>

            <aside className="link-block-wrap">
              <a href="#contacts-SECTION" className="links w-inline-block" data-testid="contact-link">
                <div className="link-text">Contact</div>
                <div className="link-text">Contact</div>
              </a>
            </aside>
          </div>

          <div className="plug-w100"></div>
        </div>

        <div className="nav-link-right" data-testid="header-right">
          <div className="plug-w100"></div>

          <div className="cart-button-lower-desktop" data-testid="cart-icon">
            <img
              src="https://cdn.prod.website-files.com/6400d82951450021c2d1eb7b/649c824defd18fb4cfaba780_svg.svg"
              loading="lazy"
              height="Auto"
              width="Auto"
              alt="Cart"
              className="icon24"
            />
          </div>

          <nav role="navigation" className="nav-link-wrap w-nav-menu desktop-links">
            {isLoggedIn ? (
              <div className="link-block-wrap">
                <button
                  onClick={handleLogout}
                  className="links w-inline-block"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <div className="link-text">Sign out</div>
                  <div className="link-text">Sign out</div>
                </button>
              </div>
            ) : (
              <div className="link-block-wrap">
                <a href="/login" className="links w-inline-block" data-testid="login-link">
                  <div className="link-text">Sign in</div>
                  <div className="link-text">Sign in</div>
                </a>
              </div>
            )}

            <div className="link-block-wrap border-l">
              <a href="/checkout-page" className="links w-inline-block">
                <div className="link-text">Cart</div>
                <div className="link-text">Cart</div>
              </a>
            </div>
          </nav>

          <div className={`hide-2 ${menuOpen ? "show" : ""}`}>
            {isLoggedIn ? (
              <a
                onClick={() => {
                  handleLogout();
                  closeMenu();
                }}
                href="#"
                className="nav-link-copy-100 burger_mobile w-nav-link"
              >
                Sign out
              </a>
            ) : (
              <a
                onClick={closeMenu}
                href="/login"
                className="nav-link-copy-100 burger_mobile w-nav-link"
                data-testid="login-link-mobile"
              >
                Sign in
              </a>
            )}

            <a
              onClick={closeMenu}
              href={isShopPage ? "/" : "/shop"}
              className="nav-link-copy-100 burger_mobile w-nav-link"
            >
              {isShopPage ? "Home" : "Shop"}
            </a>

            <a onClick={closeMenu} href="#" className="nav-link-copy-100 burger_mobile w-nav-link">
              Service
            </a>
            <a onClick={closeMenu} href="#" className="nav-link-copy-100 burger_mobile w-nav-link">
              Contact
            </a>
            <a onClick={closeMenu} href="/about-us" className="nav-link-copy-100 burger_mobile w-nav-link">
              About us
            </a>

            <div className="wrap-hide-desktop">
              <a href="#" className="caption">Shipping & returns</a>
              <a href="#" className="caption">Terms & conditions</a>
              <a href="#" className="caption">Privacy policy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header1;
