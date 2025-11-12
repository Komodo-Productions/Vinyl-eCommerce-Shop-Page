"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import CheckoutButton from "../../components/CheckoutButton";
import "../../style.css";
import "../../globals.css";

import { getProductById } from "../../services/productService";
import QuantitySelector from "@/app/components/QuantitySelector";

interface Product {
  id_product: number;
  name: string;
  artist: string;
  description?: string;
  price: number;
  publication_date?: string;
}

export default function ProductDetail() {
  const params = useParams();
  const id = Number(params?.id);
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (err) {
        setError("Error al cargar el producto.");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  if (loading)
    return <p data-testid="loading-product">Cargando producto...</p>;
  if (error)
    return <p data-testid="error-product">{error}</p>;
  if (!product)
    return <p data-testid="notfound-product">No se encontró el producto.</p>;

  return (
    <>
      <div
        className="container grid"
        data-testid="product-detail-container"
      >
        <div
          className="grid-wrapper-left"
          data-testid="product-image-section"
        >
          <img
            src="https://vinyl.sonymusic.com/cdn/shop/files/X3LPAC22.jpg?v=1726500451"
            alt={product.name}
            className="img_100x100-fit_cover"
            data-testid="product-image"
          />
        </div>

        <div
          className="grid-wrapper-right"
          data-testid="product-info-section"
        >
          <div className="content-small_padding">
            <div className="flex_horizont-justify_start margin-bottom-24px">
              <a
                href="/collection-product/bouquets-fresh-flowers-blue-harmony"
                aria-current="page"
                className="overline text-gray w--current"
                data-testid="product-collection"
              >
                Blue Harmony
              </a>
            </div>

            <div
              className="flex_horizont-justify_start margin-botton-16"
              data-testid="product-main-info"
            >
              <h3 role="heading" data-testid="product-name">
                {product.name}
              </h3>
              <p className="margin-l-r-8px h3-className">-</p>
              <p className="h3-className-2" role="precio" data-testid="product-price">
                ${product.price}
              </p>
            </div>

            <div
              className="margin-botton-16 w-richtext"
              data-testid="product-description"
            >
              <p>{product.description || "Sin descripción disponible."}</p>
            </div>

            <div data-testid="quantity-selector">
              <QuantitySelector onChange={setQuantity} />
            </div>

            <div data-testid="checkout-button">
              <CheckoutButton product={product} quantity={quantity} />
            </div>
          </div>
        </div>
      </div>

      <div data-testid="related-products-section">
        <div className="container">
          <div className="content flex-vertical-center">
            <h3>You may also like…</h3>
          </div>
        </div>

        <div className="container">
          <div className="w-dyn-list">
            <div
              role="list"
              className="wrapper_grid-cms w-dyn-items"
              data-testid="related-products-list"
            >
              <div className="w-dyn-item" data-testid="related-product-card">
                <a
                  href="/collection-product/rattan-grapefruit-candle"
                  className="wrapper_link-card_product w-inline-block"
                  data-testid="related-product-link"
                >
                  <div className="card-product">
                    <div className="label">
                      <h6 data-testid="related-product-name">
                        Rattan Grapefruit
                      </h6>
                      <div className="display-flex_horizontal_center text-gray">
                        <p className="margin-right-4px caption">Price</p>
                        <p className="caption" data-testid="related-product-price">
                          $48
                        </p>
                      </div>
                    </div>
                    <div className="card_img" data-testid="related-product-image">
                      <img
                        src="https://tigervaultrecords.com/cdn/shop/files/6F88C41F-BB7D-4628-B58F-30950F7B8187.webp?v=1718791366"
                        loading="lazy"
                        alt=""
                        className="img_100x100-fit_cover"
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
