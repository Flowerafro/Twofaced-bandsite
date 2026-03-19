import React from 'react';
import { FaInstagram, FaYoutube, FaSpotify } from "react-icons/fa6";

export const Contact: React.FC = () => {
    return (
        <section className="flex flex-col items-center py-12 px-4 animate-in fade-in slide-in-from-bottom-4 duration-500 bg-brand-red">'
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-brand-black mb-12">
                Contact
            </h2>

            <div className="w-full max-w-2xl text-center space-y-8">
                <div className="prose prose-invert prose-lg mx-auto">
                    <p className="text-brand-black leading-relaxed">
                        TWOFACED HK: Drum and Bass Noise Duo from Norway.
                    </p>
                </div>

                <div className="flex justify-center gap-8 pt-8">
                    <a href="https://www.instagram.com/twofacedhk/" target='_blank' className="text-brand-black hover:text-brand-black transition-all transform hover:scale-110" aria-label="TwofacedBand on Instagram">
                        <FaInstagram size={40} />
                    </a>
                    <a href="https://www.youtube.com/@TwofacedNetwerks" target='_blank' className="text-brand-black hover:text-brand-black transition-all transform hover:scale-110" aria-label="TwofacedBand on YouTube">
                        <FaYoutube size={40} />
                    </a>
                    <a href="https://open.spotify.com/artist/5rEeDPABJRtWEuvCQlMHtY?si=b8mOMGFbRTKLNJ6c5OYc4Q" target='_blank' className="text-brand-black hover:text-brand-black transition-all transform hover:scale-110" aria-label="TwofacedBand on Spotify">
                        <FaSpotify size={40} />
                    </a>
                </div>

                <address className="pt-12 border-t border-brand-black mt-12 not-italic">
                    <h3 className="text-xl font-bold uppercase text-brand-black mb-4">Booking & Inquiries</h3>
                    <a href="mailto:twofacedbandhk@gmail.com" className="text-xl md:text-3xl font-black text-brand-black hover:text-brand-black transition-colors break-all">
                        twofacedbandhk@gmail.com
                    </a>
                </address>
            </div>
        </section>
    );
};
