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
      <button disabled>
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
      <button onClick={handleCheckout}>
        <a className="primary_button w-inline-block">
          <div className="wrap-button_text">
            <div className="button_text">Buy</div>
          </div>
        </a>
      </button>

      {showCheckout && (
        <div className="overlay">
          <div className="overlay-content">
            <button className="close-button" onClick={handleClose}>
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
