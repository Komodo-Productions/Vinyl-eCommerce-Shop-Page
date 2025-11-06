"use client";
import React, { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import Link from "next/link";

interface Product {
  id_product: number;
  name: string;
  artist: string;
  price: number;
}

export default function ProductListP() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError("No se pudieron cargar los productos");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
  <>
    {products.map((p: Product) => (
      <div className="w-dyn-item" key={p.id_product}>
        <Link href={`/product/${p.id_product}`} className="wrapper_link-card_product w-inline-block">
          <div className="card-product">
            <div className="label">
              <h6>{p.name}</h6>
              <div className="display-flex_horizontal_center text-gray">
                <p className="margin-right-4px caption">Price</p>
                <p className="caption">${p.price}</p>
              </div>
            </div>
            <div className="card_img">
              <img
                src="https://cdn.prod.website-files.com/6400d82951450087c6d1eba8/64342f32e6dcecbc89f1519a_6408c011b8c50c3437263eb4_nestnewyork_rattan_grapefruit_candle_classic_1_540x.webp"
                loading="lazy"
                alt=""
                className="img_100x100-fit_cover"
              />
            </div>
          </div>
        </Link>
      </div>
    ))}
  </>
);
}
