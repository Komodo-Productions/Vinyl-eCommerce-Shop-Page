"use client";
import React, { useState, useEffect } from "react";

interface QuantitySelectorProps {
  onChange?: (quantity: number) => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ onChange }) => {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity(prev => prev + 1);
  const decrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  useEffect(() => {
    if (onChange) onChange(quantity);
  }, [quantity, onChange]);

  return (
    <div className="flex_horizont-justify_start-copy margin-bottom-24px">
      <p className="subtitle margin-right-16px no-margin-on-desktop">Quantity</p>

      <div className="input-stepper w-inline-block">
        {/* Botón menos */}
        <button
          onClick={decrease}
          className="stepper-butom border-r"
          aria-label="Disminuir cantidad"
        >
          <img
            src="https://cdn.prod.website-files.com/6400d82951450021c2d1eb7b/6433f7632c448e7ff1bf3c5a_remove_FILL0_wght300_GRAD0_opsz24.svg"
            alt="Menos"
          />
        </button>

        {/* Cantidad actual */}
        <div className="quantity">
          <p>{quantity}</p>
        </div>

        {/* Botón más */}
        <button
          onClick={increase}
          className="stepper-butom border-l"
          aria-label="Aumentar cantidad"
        >
          <img
            src="https://cdn.prod.website-files.com/6400d82951450021c2d1eb7b/6433f7632c448e3ce2bf3c59_add_FILL0_wght300_GRAD0_opsz24.svg"
            alt="Más"
          />
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;

