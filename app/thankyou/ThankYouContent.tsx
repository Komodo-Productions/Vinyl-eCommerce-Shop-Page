"use client";

import Head from "next/head";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { FC } from "react";
import "./ThankYou.css";

const ThankYouPage: FC = () => {
  const searchParams = useSearchParams();

  const name = searchParams?.get("name") || "Unknown Product";
  const price = Number(searchParams?.get("price")) || 0;
  const quantity = Number(searchParams?.get("quantity")) || 1;
  const total = (price * quantity).toFixed(2);

  return (
    <>
      <Head>
        <title>Gracias por tu compra – Vinyl Store</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="container grid" data-testid="thankyou-container">
        <div className="grid-wrapper-left" data-testid="thankyou-image-section">
          <div className="content-sticky-up_80px">
            <div className="image-bg2" />
          </div>
        </div>

        <div
          className="grid-wrapper-right"
          data-testid="thankyou-summary-section"
        >
          <aside className="panel" data-testid="thankyou-panel">
            <div className="kicker" data-testid="thankyou-kicker">
              Purchase completed
            </div>

            <h1 id="thanks-heading" data-testid="thankyou-heading">
              Thank you for your purchase!
            </h1>

            <div className="price" data-testid="thankyou-order-summary">
              Order # <strong>VG-2025-0098</strong> — Paid ${total}
            </div>

            <div className="line" aria-hidden="true"></div>

            <div
              className="summary"
              aria-live="polite"
              data-testid="thankyou-product-summary"
            >
              <div className="meta">
                <div>Product</div>
                <div className="details" data-testid="thankyou-product-name">
                  Vinyl — {name}
                </div>
              </div>
              <div className="value" data-testid="thankyou-product-price">
                ${price}
              </div>
            </div>

            <div
              className="order-card"
              aria-label="Resumen del pedido"
              data-testid="thankyou-order-card"
            >
              <div className="order-thumb" data-testid="thankyou-order-image">
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcontents.sixshop.com%2FuploadedFiles%2F99047%2Fproduct%2Fimage_1658223947137.png&f=1&nofb=1"
                  alt="Mini vinilo"
                />
              </div>
              <div className="order-info">
                <div className="title" data-testid="thankyou-order-title">
                  {name}
                </div>
                <div className="small">
                  Color: Black / Includes protective case
                </div>
              </div>
              <div className="qty-price" data-testid="thankyou-order-quantity">
                <div>Quantity: {quantity}</div>
                <div
                  style={{
                    color: "var(--muted)",
                    fontWeight: 500,
                    fontSize: "13px",
                  }}
                >
                  Shipping: Standard
                </div>
              </div>
            </div>

            <p className="thank" data-testid="thankyou-message">
              We&apos;re glad you chose vinyl!
            </p>

            <p className="notice" data-testid="thankyou-notice">
              Your order has been confirmed and is being prepared for shipping.
              Please keep an eye on your email with tracking information—it will
              arrive as soon as we ship it. If you need to make any changes,
              please reply to the confirmation email or contact us at
              komodosoporte@gmail.com.
            </p>

            <div className="tracking" data-testid="thankyou-delivery">
              <strong>Delivery address:</strong>
              <div className="small">123rd Street, Guatemala City</div>
            </div>

            <div className="cta" data-testid="thankyou-buttons">
              <Link
                href="/"
                className="btn btn-primary"
                data-testid="thankyou-back-button"
              >
                <div className="button_text">Back to Start</div>
              </Link>
              <Link
                href="/history"
                className="btn btn-ghost"
                data-testid="thankyou-orders-link"
              >
                See my orders
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default ThankYouPage;

