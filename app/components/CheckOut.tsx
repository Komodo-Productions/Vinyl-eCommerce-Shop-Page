import { useAuth } from "@/app/context/AuthContext";
import Link from "next/link";
import "../style2.css";
import { useSearchParams, useRouter } from "next/navigation";

export default function CheckOut({ onClose }: { onClose: () => void }) {
  const { user, isLoading } = useAuth();
  const isLoggedIn = !!user;
  const router = useRouter();
  const searchParams = useSearchParams();

  const name = searchParams.get("name") || "";
  const price = Number(searchParams.get("price")) || 0;
  const quantity = Number(searchParams.get("quantity")) || 1;
  const total = (price * quantity).toFixed(2);

  const handlePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(
      `/thankyou?name=${encodeURIComponent(name)}&price=${price}&quantity=${quantity}&total=${total}`
    );
  };

  if (isLoading) return <p data-testid="checkout-loading-message">Cargando...</p>;

  if (!isLoggedIn) {
    return (
      <div className="containerx" data-testid="checkout-login-required">
        <div className="content border-b white">
          <h2 className="h2-scroll_animat">Inicia sesión para continuar</h2>
          <p className="subtitle weight-regular scroll_anim-text">
            Debes iniciar sesión para realizar tu compra.
          </p>
          <div className="flex gap-2" data-testid="checkout-login-options">
            <Link
              href="/login"
              className="primary_button w-inline-block"
              data-testid="checkout-login-link"
            >
              <div className="wrap-button_text">
                <div className="button_text">Iniciar sesión</div>
              </div>
            </Link>
            <button
              onClick={onClose}
              className="second_button w-inline-block"
              data-testid="checkout-cancel-button"
            >
              <div className="wrap-button_text">
                <div className="button_text">Cancelar</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="containerx" data-testid="checkout-container">
      <div className="content white" data-testid="checkout-content">
        <h2 className="h2-scroll_animat">Payment</h2>
        <p className="subtitle weight-regular scroll_anim-text">
          Pay by card. Your payment is secure.
        </p>

        <div
          className="order-summary margin-bottom-16px"
          data-testid="checkout-summary"
        >
          <p>Product: {name}</p>
          <p>Quantity: {quantity}</p>
          <p>Total: ${total}</p>
        </div>

        <form
          onSubmit={handlePurchase}
          className="flex-vertical-stretch-gap_16px margin-top-16"
          data-testid="checkout-form"
        >
          <input
            className="text-field w-input"
            placeholder="Card Number"
            type="tel"
            required
            data-testid="card-number-input"
          />
          <div className="flex">
            <input
              className="text-field w-input"
              placeholder="MM / YY"
              type="tel"
              required
              data-testid="expiry-input"
            />
            <input
              className="text-field w-input"
              placeholder="CVV code"
              type="tel"
              required
              data-testid="cvv-input"
            />
          </div>

          <button
            type="submit"
            className="primary_button w-inline-block"
            data-testid="confirm-purchase-button"
          >
            <div className="wrap-button_text">
              <div className="button_text">Make a purchase</div>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}
