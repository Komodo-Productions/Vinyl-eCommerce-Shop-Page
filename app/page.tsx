import Head from "next/head";
import { FC } from "react";
import './style.css';
import './globals.css';
import ProductDisplay from "./components/ProductDisplay";
import HeroSection from "./components/Hero";
import AboutUs from "./components/AboutUs";
import WhySection from "./components/WhySection";
import ContactSection from "./components/ContactUs";
import ServiceSection from "./components/ServiceSection";

const Home: FC = () => {
  return (
    <>
    <Head>
       
            <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"/>
            <meta charSet="UTF-8"/>
            <meta name="viewport" 
            content="width=device-width, initial-scale=1.0"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
            <title>Vinyl Store - Premium Vinyl Store</title>
    </Head>

   <div className='container-grid'>
            <div className='grid-wraper-left'>
                <HeroSection/>
            </div>
            <div className='grid-wraper-right'>
              <ProductDisplay/>
            </div>
        </div>

     {/*<!-- About us -->*/}
     <AboutUs/>

     <WhySection/>

    {/*<!-- Contact Us section -->*/}
     <ContactSection/>
    <ServiceSection/>
       
    {/*<!-- Subscription Section -->*/}
    <div className="container-grid">
      <div className="grid-wraper-left">
        <div className="fix-height">
         <div className="img_w-h-100-bg_black35">

          </div>
        </div>
      </div>
      <div className="grid-wrapper-right">
        <div className="height-100">
          <div className="content">
            <div className="flex-vertical-center">
              <div className="wrapper-overflow_hidden">
                <div className="margin-bottom-24px">
                  <div className="overline">
                    service
                  </div>
                </div>
                <div className="wrapper-overflow-hidden">
                  <div className="margin-botton-16">
                    <h2>Vinyl Subscriptions</h2>
                  </div>
                  <div className="wrapper-overflow-hidden">
                    <div className="margin-botton-64">
                      <div className="text-dark-gray">
                        <p>Don&apos;t miss a beat! Subscribe for the finest in vinyl culture. Reminds you 7 days before. No spam or sharing your address.</p>
                      </div>
                    </div>
                    <div className="control-widht-of-the-button">
                        <a href="/subscriptions">
                          <div className="second_button">
                            <div className="w-inline-block">
                              <div className="wrap-button_text">
                                <div className="button_text">Subscribe Now</div>
                                <div className="button_text hide-mobile">Subscribe Now</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/*<!-- Reviews Section -->*/}
    {/*<section className="reviews-section">
      <div className="container">
        <div className="content">
          <div className="slider_rewiews">
            <div className="w-slider">
              <div className="margin-bottom-8px">
                <img alt="google logo" loading="lazy" src="https://cdn.prod.website-files.com/6400d82951450021c2d1eb7b/644c14578243042ce032ac85_google%20logo.png"></img>
              </div>
              <div className="margin-bottom-24px">
              </div>
              <div className="margin-botton-16">
                <h2>Our Clients Say</h2>
              </div>
              <div className="slider_mask-reviws">
                <div className="w-slider-mask">
                  <div className="w-slide">
                    <div className="flex-vertical-center">
                      <div className="margin-botton-40">
                        <div className="h3-class italic">
                          <p>“Ordered flowers online and they were the best bouquet! Impressed everyone around. Highly recommend this flower shop!”</p>
                          <div className="subtitle">– Ronald Richards</div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>*/}

    </>
    );
};

export default Home;