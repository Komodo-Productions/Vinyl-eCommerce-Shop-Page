"use client";
import React, { useEffect, useState } from "react";
import { getOrdersByCustomerId } from "../services/orderService";
import { getCustomerIdByEmail } from "../services/userService";

interface Order {
  id_order_header: number;
  customer_id: number;
  total: number;
  order_date: string;
  created_at: string;
  updated_at: string;
}

export default function OrderHistory() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("No se encontró token de autenticación");

        const payload = JSON.parse(atob(token.split(".")[1]));
        const email: string = payload.email;

        const customerId: number = await getCustomerIdByEmail(email);

        const ordersResponse: Order[] = await getOrdersByCustomerId(customerId);
        setOrders(ordersResponse);
      } catch (err: any) {
        console.error(err);
        setError("Error al cargar el historial de órdenes");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <p>Cargando órdenes...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="grid-wrapper-copy">
      {orders.map((o) => (
        <div className="w-dyn-item" key={o.id_order_header}>
          <a
            href={`/order/${o.id_order_header}`}
            className="wrapper_link-card_product w-inline-block"
          >
            <div className="card-order">
              <div className="label">
                <h5>Orden #{o.id_order_header}</h5>
                <div className="display-flex_horizontal_center text-gray">
                  <p className="margin-right-4px caption">Total:</p>
                  <p className="margin-right-4px caption">${o.total}</p>
                </div>
                <div className="display-flex_horizontal_center text-gray">
                  <p className="margin-right-4px caption">
                    Fecha: {new Date(o.order_date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
