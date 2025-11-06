"use client"
import Head from "next/head";
import { FC } from "react";
import '../style.css';
import '../globals.css';
import Header from '../components/Header'
import ProductList from "../components/ProductList";


const shop: FC = () => {
    return (
        <>

            <Head>
                
                <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"/>
                <meta charSet="UTF-8"/>
                <meta name="viewport" 
                content="width=device-width, initial-scale=1.0"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
                <title>Vinyl - Store Product Page</title>
            </Head>
            
            {/*<!-- Product Display -->*/}
            <div className="container-grid">
                <div className = "grid-wrapper-left">
                        <div className = "content-sticky-up_80px">
                            <div className="image-bg" />
                        </div>
                    </div>
                <div className="grid-wrapper-right">
                    <div className="w-dyn-list">
                            <div role="listitem" className="w-dyn-item">
                                <ProductList />
                            </div>
                    </div>
                </div>
            </div>
            
            
        </>
    );
}
export default shop;
