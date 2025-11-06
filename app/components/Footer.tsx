"use client";
import Link from 'next/link';
import '../style.css';

export default function Footer() {
    return (
        <footer>
        <div className='container-b'>
            <div className="container grid-footer">
                <div className="footer_column">
                    <p className="margin-bottom-24px">Remember to offer beautiful flowers from Kyiv Florist Studio Valentines Day, Mothers Day, Christmas... Reminds you 7 days before. No spam or sharing your address</p>
                    <div className="form-block w-form">
                        <form data-name="Email Form" method="get" className="flex-vertical-stretch-gap_16px">
                            <input className="text-field w-input" name="email-2" data-name="Email 2" placeholder="Your Email" type="email" id="email-2"/>
                            <a href="#" className="primary_button w-inline-block">
                                <div className="wrap-button_text">
                                    <div className="button_text">Remind</div>
                                    <div className="button_text hide-mobile">Remind</div>
                                </div>
                            </a>
                        </form>
                        <div className="w-form-done">
                            <div>Thank you! Your submission has been received!</div>
                        </div>
                        <div className="w-form-fail">
                            <div>Oops! Something went wrong while submitting the form.</div>
                        </div>
                    </div>
                </div>
                <div className="footer_column">
                    <h5 className="text-gray margin-bottom-24px">Contact Us</h5>
                    <div className="footer_colum-wrap_links margin-botton-16">
                        <p className="caption text-gray">Address</p>
                        <a href="#" className="links w-inline-block">
                            <div className="link-text">15/4 Khreshchatyk Street, Kyiv</div>
                            <div className="link-text">15/4 Khreshchatyk Street, Kyiv</div>
                        </a>
                    </div>
                    <div className="footer_colum-wrap_links margin-botton-16">
                        <p className="caption text-gray">Phone</p>
                        <a href="#" className="links w-inline-block">
                            <div className="link-text">+380980099777</div>
                            <div className="link-text">+380980099777</div>
                        </a>
                    </div>
                    <div className="footer_colum-wrap_links ">
                        <div className='margin-bottom-16'>
                            <p className="caption text-gray" >General Enquiry:</p>
                            <a href="#" className="links w-inline-block">
                            <div className="link-text">Kiev.Florist.Studio@gmail.com</div>
                            <div className="link-text">Kiev.Florist.Studio@gmail.com</div>
                        </a>
                        </div>
                    </div>
                    <h5 className="text-gray margin-bottom-24px margin-top-24px">Follow Us</h5>
                    <div className="flex_horizont-justify_start gap-32px">
                        <a href="#" className="link-block w-inline-block">
                            <img src="https://cdn.prod.website-files.com/6400d82951450021c2d1eb7b/6433f820e186e144ecf86c56_Instagram.svg" loading="lazy" width="24" height="24" alt="store photo" className="icon24"/>
                        </a>
                        <a href="#" className="link-block w-inline-block">
                            <img src="https://cdn.prod.website-files.com/6400d82951450021c2d1eb7b/6433f820e186e1d70bf86c58_Pinterest.svg" loading="lazy" width="24" height="24" alt="" className="icon24"/>
                        </a>
                        <a href="#" className="link-block w-inline-block">
                            <img src="https://cdn.prod.website-files.com/6400d82951450021c2d1eb7b/6433f820e186e16d07f86c59_Facebook.svg" loading="lazy" width="24" height="24" alt="" className="icon24"/>
                        </a>
                        <a href="#" className="link-block w-inline-block">
                            <img src="https://cdn.prod.website-files.com/6400d82951450021c2d1eb7b/6433f820e186e1cb4ef86c57_Twitter.svg" loading="lazy" width="24" height="24" alt="" className="icon24"/>
                        </a>
                        <a href="#" className="link-block-no-margin w-inline-block">
                            <img src="https://cdn.prod.website-files.com/6400d82951450021c2d1eb7b/6433f820e186e17d93f86c5a_Telegram.svg" loading="lazy" width="24" height="24" alt="" className="icon24"/>
                        </a>
                    </div>
                </div>
                <div className="footer_column">
                    <h5 className="text-gray margin-bottom-24px">Shop</h5>
                    <div className="footer_colum-wrap_links margin-bottom-24px">
                        <a href="/all-categories-products" className="links w-inline-block">
                            <div className="link-text">All Products</div>
                            <div className="link-text">All Products</div>
                        </a>
                        <a href="https://kyiv-luxebouquets.webflow.io/category/fresh-flowers" className="links w-inline-block">
                            <div className="link-text">Fresh Flowers</div>
                            <div className="link-text">Fresh Flowers</div>
                        </a>
                        <a href="https://kyiv-luxebouquets.webflow.io/category/dried-flowers" className="links w-inline-block">
                            <div className="link-text">Dried Flowers</div>
                            <div className="link-text">Dried Flowers</div>
                        </a>
                        <a href="https://kyiv-luxebouquets.webflow.io/category/live-plants" className="links w-inline-block">
                            <div className="link-text">Live Plants</div>
                            <div className="link-text">Live Plants</div>
                        </a>
                        <a href="https://kyiv-luxebouquets.webflow.io/category/aroma-candles" className="links w-inline-block">
                            <div className="link-text">Aroma Candles</div>
                            <div className="link-text">Aroma Candles</div>
                        </a>
                        <a href="#" className="links w-inline-block">
                            <div className="link-text">Designer Vases</div>
                            <div className="link-text">Designer Vases</div>
                        </a>
                        <a href="https://kyiv-luxebouquets.webflow.io/category/fresheners" className="links w-inline-block">
                            <div className="link-text">Freshener Diffuser</div>
                            <div className="link-text">Freshener Diffuser</div>
                        </a>
                    </div>
                    <h5 className="text-gray margin-bottom-24px">Service</h5>
                    <div className="footer_colum-wrap_links">
                        <a href="https://kyiv-luxebouquets.webflow.io/subscriptions" className="links w-inline-block">
                            <div className="link-text">Flower Subscription</div>
                            <div className="link-text">Flower Subscription</div>
                        </a>
                        <a href="#" className="links w-inline-block">
                            <div className="link-text">Wedding &amp;Event Decor</div>
                            <div className="link-text">Wedding &amp;Event Decor</div>
                        </a>
                    </div>
                </div>
                <div className="footer_column">
                    <h5 className="text-gray margin-bottom-24px">About Us</h5>
                    <div className="footer_colum-wrap_links margin-bottom-24px">
                        <a href="https://kyiv-luxebouquets.webflow.io/about-us" className="links w-inline-block">
                            <div className="link-text">Our Story</div>
                            <div className="link-text">Our Story</div>
                        </a>
                        <a href="#" className="links w-inline-block">
                            <div className="link-text">Blog</div>
                            <div className="link-text">Blog</div>
                        </a>
                    </div>
                    <div className="footer_colum-wrap_links">
                        <a href="#" className="links w-inline-block">
                            <div className="link-text">Shipping &amp;returns</div>
                            <div className="link-text">Shipping &amp;returns</div>
                        </a>
                        <a href="#" className="links w-inline-block">
                            <div className="link-text">Terms &amp;conditions</div>
                            <div className="link-text">Terms &amp;conditions</div>
                        </a>
                        <a href="#" className="links w-inline-block">
                            <div className="link-text">Privacy policy</div>
                            <div className="link-text">Privacy policy</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="modal-wrapper">
            <div className="modal_grid">
                <div className="pop-up-window">
                    <div className="content-small_padding">
                        <h2 className="margin-bottom-24px">Welcome !</h2>
                        <p className="margin-bottom-24px black90">This site was created for educational purposes to demonstrate design and functionality. Please keep in mind that not all features on this site are fully functional</p>
                        <div className="subtitle">Here &#x27;s what is available on the website:</div>
                        <ul role="list" className="list_big margin-botton-64">
                            <li>
                                Check the <span className="weight-bold">Homepage</span>
                                for an overview of the <span className="weight-bold">design and layout.</span>
                            </li>
                            <li>
                                Scroll through the homepage to observe the <span className="weight-bold">interactions.</span>
                            </li>
                            <li>
                                Evaluate the <span className="weight-bold">typography and hierarchy.</span>
                            </li>
                            <li>
                                Check out the <span className="weight-bold">states of buttons and links.</span>
                            </li>
                            <li>Explore the textual content throughout the website.</li>
                            <li>
                                Visit the <span className="weight-bold">Category Page</span>
                                to see the product listings. (CMS)
                            </li>
                            <li>
                                Explore <span className="weight-bold">Product Pages</span>
                                for interface and content details. (CMS)
                            </li>
                            <li>
                                Go to the <span className="weight-bold">&quot;About Us &quot;Page</span>
                            </li>
                            <li>
                                Open the <span className="weight-bold">&quot;Flower Subscription &quot;</span>
                                page, explore the building of subscriptions.
                            </li>
                        </ul>
                        <div className="control-width-of-the-button">
                            <a href="#" className="primary_button w-inline-block">
                                <div className="wrap-button_text">
                                    <div className="button_text">Continue to explore</div>
                                    <div className="button_text hide-mobile">Continue to explore</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-background"></div>
        </div>
        </footer> 
    );
}
