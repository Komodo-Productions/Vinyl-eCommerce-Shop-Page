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

      <div className="container grid">
        <div className="grid-wrapper-left">
          <div className="content-sticky-up_80px">
            <div className="image-bg2" />
          </div>
        </div>

        <div className="grid-wrapper-right">
          <aside className="panel">
            <div className="kicker">Purchase completed</div>
            <h1 id="thanks-heading">Thank you for your purchase!</h1>
            <div className="price">
              Order # <strong>VG-2025-0098</strong> — Paid ${total}
            </div>

            <div className="line" aria-hidden="true"></div>

            <div className="summary" aria-live="polite">
              <div className="meta">
                <div>Product</div>
                <div className="details">Vinyl — {name}</div>
              </div>
              <div className="value">${price}</div>
            </div>

            <div className="order-card" aria-label="Resumen del pedido">
              <div className="order-thumb">
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcontents.sixshop.com%2FuploadedFiles%2F99047%2Fproduct%2Fimage_1658223947137.png&f=1&nofb=1"
                  alt="Mini vinilo"
                />
              </div>
              <div className="order-info">
                <div className="title">{name}</div>
                <div className="small">
                  Color: Black / Includes protective case
                </div>
              </div>
              <div className="qty-price">
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

            <p className="thank">We&apos;re glad you chose vinyl!</p>

            <p className="notice">
              Your order has been confirmed and is being prepared for shipping.
              Please keep an eye on your email with tracking information—it will
              arrive as soon as we ship it. If you need to make any changes,
              please reply to the confirmation email or contact us at
              komodosoporte@gmail.com.
            </p>

            <div className="tracking">
              <strong>Delivery address:</strong>
              <div className="small">123rd Street, Guatemala City</div>
            </div>

            <div className="cta">
              <Link href="/" className="btn btn-primary">
                <div className="button_text">Back to Start</div>
              </Link>
              <Link href="/history" className="btn btn-ghost">
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
