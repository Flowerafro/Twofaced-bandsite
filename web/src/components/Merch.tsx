import React, { useEffect, useState } from 'react';
import { client, urlFor } from '../lib/sanity';

interface MerchItem {
    _id: string;
    title: string;
    price: number;
    images: { asset: any }[];
    description?: string;
}

export const Merch: React.FC = () => {
    const [merch, setMerch] = useState<MerchItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedItem, setSelectedItem] = useState<MerchItem | null>(null);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    useEffect(() => {
        const query = `*[_type == "merch"]{
            _id,
            title,
            price,
            images,
            description
        }`;

        client.fetch(query)
            .then((data) => {
                setMerch(data);
                setLoading(false);
            })
            .catch(console.error);
    }, []);

    if (loading) return <div className="text-brand-black text-center py-20 font-black uppercase tracking-tighter bg-brand-red w-full">Laster merch...</div>;

    return (
        <section className="flex flex-col items-center py-12 px-4 animate-in fade-in duration-700 bg-brand-red">
            <h2 className="text-4xl md:text-6xl font-black uppercase z-100 text-brand-black mb-12">
                Merch
            </h2>

            <ul className="grid grid-cols-1 md:grid-cols-1 gap-12 w-full max-w-2xl">
                {merch.map((item) => (
                    <li key={item._id} className="group flex flex-col">
                        <div
                            className="relative bg-transparent aspect-square overflow-hidden border-brand-black rounded-sm cursor-pointer mb-4"
                            onClick={() => {
                                setSelectedItem(item);
                                setActiveImageIndex(0);
                            }}
                        >
                            <img
                                src={urlFor(item.images[0]).width(800).url()}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110"
                            />

                            <div className="hidden md:flex absolute inset-0 bg-brand-red/40 opacity-0 group-hover:opacity-100 transition-opacity items-center justify-center">
                                <button className="px-8 py-4 border-2 border-brand-black rounded-sm text-brand-black font-black uppercase tracking-widest text-sm backdrop-blur-sm">
                                    Se detaljer
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-between items-start px-1 z-100">
                            <div className="flex flex-col">
                                <h3 className="text-brand-black font-black text-2xl md:text-3xl uppercase tracking-tighter leading-none mb-1 group-hover:text-brand-black transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-brand-black font-bold text-lg md:text-xl">
                                    {item.price ? `${item.price},-` : 'TBA'}
                                </p>
                            </div>

                            <button
                                onClick={() => setSelectedItem(item)}
                                className="md:hidden bg-brand-black text-brand-white px-4 py-2 font-black uppercase text-[10px] tracking-tighter"
                            >
                                Detaljer
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            {selectedItem && (
                <article className="fixed inset-0 z-150 bg-brand-red/95 flex items-center justify-center p-4 md:p-12 overflow-y-auto">
                    <button
                        onClick={() => setSelectedItem(null)}
                        className="absolute top-6 right-6 text-brand-black text-5xl font-light hover:text-brand-black transition-colors z-[60]"
                    >
                        &times;
                    </button>

                    <section className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 bg-brand-red p-6 rounded-sm relative">
                        <div className="flex flex-col gap-4">
                            <img
                                src={urlFor(selectedItem.images[activeImageIndex]).width(1000).url()}
                                className="w-full h-[400px] object-contain bg-brand-red transition-all duration-300"
                                alt={selectedItem.title}
                            />

                            <div className="grid grid-cols-4 gap-2">
                                {selectedItem.images.map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={urlFor(img).width(200).url()}
                                        onClick={() => setActiveImageIndex(idx)}
                                        className={`cursor-pointer h-20 w-full object-cover transition-all ${activeImageIndex === idx ? 'opacity-100 border-2 border-brand-black' : 'opacity-40 hover:opacity-70'}
                                            }`}
                                        alt={`thumbnail ${idx}`}
                                    />
                                ))}
                            </div>
                        </div>

                        <aside aria-model="true" role='dialog' className="flex flex-col justify-center text-brand-black">
                            <h3 className="text-4xl md:text-6xl font-black uppercase mb-2 leading-none tracking-tighter">
                                {selectedItem.title}
                            </h3>
                            <p className="text-2xl text-brand-black font-bold mb-6 italic">
                                {selectedItem.price ? `${selectedItem.price} NOK` : 'Pris kommer'}
                            </p>
                            <p className="mb-8 text-brand-black whitespace-pre-wrap leading-relaxed">
                                {selectedItem.description || "Ingen beskrivelse tilgjengelig."}
                            </p>
                            <p className="border-2 border-brand-black/20 p-4 text-center font-bold uppercase tracking-widest text-sm">
                                Kjøp på konsert
                            </p>
                        </aside>
                    </section>
                </article>
            )}
        </section>
    );
};