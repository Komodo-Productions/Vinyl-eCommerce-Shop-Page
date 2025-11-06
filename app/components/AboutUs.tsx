"use client";
import Link from 'next/link';
import '../style2.css';

export default function AboutUs() {
    return (

<div>
            <div className="container grid">
                
                <div  className="grid-wrapper-left white">
                    <div  className="content sticky-up_80px">
                        <div  className="wrapper-overflow_hidden">
                            <h2  className="h2-scroll_animat">About us</h2>
                        </div>
                    </div>
                </div>
                <div  className="grid-wrapper-right white">
                    <div  className="content">
                        <div  className="wrapper-overflow_hidden margin-bottom-24px">
                            <div  className="overline-scroll_animat overline">our story</div>
                        </div>
                        <div  className="wrapper-overflow_hidden margin-botton-16">
                            <h3  className="h3-scroll_animat">Komodo Productions
                            </h3>
                        </div>
                        <div  className="wrapper-overflow_hidden margin-botton-64">
                            <p  className="scroll_anim-text black-90">Born from a deep love for analog sound, our record store is a haven for vinyl collectors, audiophiles, and music dreamers. Whether you&apos;re chasing a first press of a jazz classic or discovering the raw energy of a punk debut, our curated selection spans decades, genres, and stories. What started in a small garage filled with crates of dusty records has grown into a community of music lovers who appreciate the warmth, texture, and ritual of vinyl. Every album we sell is handpicked, inspected, and shipped with care — because we know what it means to drop the needle on a song that moves you. We&apos;re not just a store — we&apos;re a celebration of timeless sound.</p>
                        </div>
                        <div  className="control-width-of-the-button">
                            <a href="/about-us"  className="second_button w-inline-block">
                                <div  className="wrap-button_text">
                                    <div  className="button_text">Learn More</div>
                                    <div  className="button_text hide-mobile">Learn More</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
