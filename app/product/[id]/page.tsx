"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import CheckoutButton from "../../components/CheckoutButton";
import '../../style.css';
import '../../globals.css';

import { getProductById } from "../../services/productService";
import ProductList2 from "@/app/components/ProductList2";
import ProductListP from "@/app/components/ProductList2";
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

  if (loading) return <p>Cargando producto...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>No se encontró el producto.</p>;

  return (
    <>
      <div className="container grid">

        <div className="grid-wrapper-left">
          <img
            src="https://vinyl.sonymusic.com/cdn/shop/files/X3LPAC22.jpg?v=1726500451"
            alt={product.name}
            className="img_100x100-fit_cover"
          />
        </div>



        <div className="grid-wrapper-right">
          <div className="content-small_padding">
            <div className="flex_horizont-justify_start margin-bottom-24px">
                <a href="/collection-product/bouquets-fresh-flowers-blue-harmony" aria-current="page" className="overline text-gray w--current"> Blue Harmony</a>
            </div>
            <div className="flex_horizont-justify_start margin-botton-16">
                <h3 role='heading'>{product.name}</h3>
                <p className="margin-l-r-8px h3-className">-</p>
                <p className="h3-className-2" role='precio'>${product.price}</p>
            </div>
            <div className="margin-botton-16 w-richtext">
                <p>{product.description || "Sin descripción disponible."}</p>
            </div>

                
            
            <QuantitySelector onChange={setQuantity} />
            <CheckoutButton product={product} quantity={quantity} />
          </div>
        </div>
      </div>

      <div>
        <div className="container">
          <div className="content flex-vertical-center">
            <h3>You may also like…</h3>
          </div>
        </div>
      </div>

      <div>
        <div className="container">
          <div className="w-dyn-list">
            <div role="list" className="wrapper_grid-cms w-dyn-items">
              <div className="w-dyn-item">
                <a
                  href="/collection-product/rattan-grapefruit-candle"
                  className="wrapper_link-card_product w-inline-block"
                >
                  <div className="card-product">
                    <div className="label">
                      <h6>Rattan Grapefruit</h6>
                      <div className="display-flex_horizontal_center text-gray">
                        <p className="margin-right-4px caption">Price</p>
                        <p className="caption">$48</p>
                      </div>
                    </div>
                    <div className="card_img">
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
              <div className="w-dyn-item">
                <a
                  href="/collection-product/rattan-grapefruit-candle"
                  className="wrapper_link-card_product w-inline-block"
                >
                  <div className="card-product">
                    <div className="label">
                      <h6>Rattan Grapefruit</h6>
                      <div className="display-flex_horizontal_center text-gray">
                        <p className="margin-right-4px caption">Price</p>
                        <p className="caption">$48</p>
                      </div>
                    </div>
                    <div className="card_img">
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
              <div className="w-dyn-item">
                <a
                  href="/collection-product/rattan-grapefruit-candle"
                  className="wrapper_link-card_product w-inline-block"
                >
                  <div className="card-product">
                    <div className="label">
                      <h6>Rattan Grapefruit</h6>
                      <div className="display-flex_horizontal_center text-gray">
                        <p className="margin-right-4px caption">Price</p>
                        <p className="caption">$48</p>
                      </div>
                    </div>
                    <div className="card_img">
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
              <div className="w-dyn-item">
                <a
                  href="/collection-product/rattan-grapefruit-candle"
                  className="wrapper_link-card_product w-inline-block"
                >
                  <div className="card-product">
                    <div className="label">
                      <h6 >Rattan Grapefruit</h6>
                      <div className="display-flex_horizontal_center text-gray">
                        <p className="margin-right-4px caption">Price</p>
                        <p className="caption">$48</p>
                      </div>
                    </div>
                    <div className="card_img">
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
