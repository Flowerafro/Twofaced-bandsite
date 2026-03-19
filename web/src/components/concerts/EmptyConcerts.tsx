import React from 'react';

export const EmptyConcerts: React.FC = () => {
    return (
        <>
            <p className="text-brand-black text-center text-lg mb-8">
                No upcoming dates announced yet.
            </p>
            <div className="bg-brand-black/30 p-6 rounded-lg border border-brand-black flex justify-between items-center opacity-50">
                <div>
                    <div className="text-brand-black font-bold uppercase tracking-widest text-sm">
                        Example
                    </div>
                    <div className="text-2xl font-bold text-brand-black">Venue Name</div>
                    <div className="text-brand-black">City, Country</div>
                </div>
                <button
                    className="px-6 py-2 border border-brand-black text-brand-black uppercase text-sm font-bold"
                    disabled
                >
                    More Info
                </button>
            </div>
        </>
    );
};
