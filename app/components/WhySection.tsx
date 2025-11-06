"use client";
import Link from 'next/link';
import '../style2.css';

export default function WhySection() {
    return ( 
        <div>
            <div  className="container grid">
                <div  className="grid-wrapper-left">
                    <div  className="content sticky-up_80px">
                        <div  className="wrapper-overflow_hidden">
                            <h2  className="h2-scroll_animat">Why choose us ?</h2>
                        </div>
                    </div>
                </div>
                <div  className="grid-wrapper-right">
                    <div  className="grid-row">
                        <div className="content white">
                            <div className="wrapper-overflow_hidden margin-botton-16">
                                <h3 className="h3-scroll_animat">Curated Vinyl for Every Collector</h3>
                            </div>
                            <div className="wrapper-overflow_hidden">
                                <p className="scroll_anim-text black-90">At our record shop, we hand-pick a diverse and quality selection of LPs, from essential classics to rare finds and new releases across all genres. Our passionate team knows music, ensuring you&apos;ll find the best pressing quality for your turntable. Rediscover the warmth of analog sound and complete your collection with us. Stop by for a spin!</p>
                            </div>
                        </div>
                        <div  className="content white">
                            <div className="wrapper-overflow_hidden margin-botton-16">
                                <h3 className="h3-scroll_animat">Secure & Speedy Shipping</h3>
                            </div>
                            <div className="wrapper-overflow_hidden">
                                <p className="scroll_anim-text black-90">Your new records deserve the best protection. We use heavy-duty, custom-fit mailers and protective corner inserts to ensure your vinyl arrives without bends, dents, or seam splits. Every order is handled with care and shipped quickly, so you can drop the needle sooner. Mint condition guaranteed.</p>
                            </div>
                        </div>
                        <div  className="content white">
                            <div className="wrapper-overflow_hidden margin-botton-16">
                                <h3 className="h3-scroll_animat">Secure Checkout</h3>
                            </div>
                            <div className="wrapper-overflow_hidden">
                                <p className="scroll_anim-text black-90">Shop for your next favorite record with complete peace of mind. We use SSL encryption and industry-leading security to protect your credit card and personal details. Your transaction is 100% safe and hassle-free, so you can focus on finding that perfect spin.</p>
                            </div>
                        </div>
                        <div  className="content white">
                            <div className="wrapper-overflow_hidden margin-botton-16">
                                <h3 className="h3-scroll_animat">Curated Vinyl Subscriptions</h3>
                            </div>
                            <div className="wrapper-overflow_hidden">
                                <p className="scroll_anim-text black-90">Expand your collection effortlessly with a monthly vinyl subscription tailored to your favorite genres and artists. Discover hand-picked new releases, essential classics, or rare reissues delivered right to your door. Our flexible service ensures you always have fresh wax for your turntable. It&apos;s the simplest way to find your next favorite record!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}