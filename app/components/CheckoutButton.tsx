"use client";
import "../style2.css";
import React, { useState } from "react";
import CheckOut from "./CheckOut";
import { useAuth } from "@/app/context/AuthContext";

interface CheckoutButtonProps {
  product: { name: string; price: number };
  quantity: number;
}

const CheckoutButton = ({ product, quantity }: CheckoutButtonProps) => {
  const { user, isLoading } = useAuth();
  const isLoggedIn = !!user;
  const [showCheckout, setShowCheckout] = useState(false);

  const handleCheckout = () => {
    const query = new URLSearchParams({
      name: product.name,
      price: product.price.toString(),
      quantity: quantity.toString(),
    }).toString();

    window.history.pushState({}, "", `/checkout?${query}`);
    setShowCheckout(true);
  };

  const handleClose = () => setShowCheckout(false);

  if (isLoading) {
    return (
      <button disabled data-testid="checkout-loading">
        <a className="primary_button w-inline-block">
          <div className="wrap-button_text">
            <div className="button_text">Loading...</div>
          </div>
        </a>
      </button>
    );
  }

  return (
    <>
      <button
        onClick={handleCheckout}
        data-testid="buy-button"
        disabled={!isLoggedIn && !isLoading}
      >
        <a className="primary_button w-inline-block">
          <div className="wrap-button_text">
            <div className="button_text">Buy</div>
          </div>
        </a>
      </button>

      {showCheckout && (
        <div className="overlay" data-testid="checkout-overlay">
          <div className="overlay-content" data-testid="checkout-modal">
            <button
              className="close-button"
              onClick={handleClose}
              data-testid="close-checkout"
            >
              ✕
            </button>
            <CheckOut onClose={handleClose} />
          </div>
        </div>
      )}
    </>
  );
};

export default CheckoutButton;
