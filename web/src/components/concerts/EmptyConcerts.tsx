import React from 'react';

export const EmptyConcerts: React.FC = () => {
    return (
        <>
            <p className="text-brand-light-gray text-center text-lg mb-8">
                No upcoming dates announced yet.
            </p>
            {/* Fallback Static Example for Preview if no data */}
            <div className="bg-brand-dark-gray/30 p-6 rounded-lg border border-brand-dark-gray flex justify-between items-center opacity-50">
                <div>
                    <div className="text-brand-red font-bold uppercase tracking-widest text-sm">
                        Example
                    </div>
                    <div className="text-2xl font-bold text-brand-white">Venue Name</div>
                    <div className="text-brand-light-gray">City, Country</div>
                </div>
                <button
                    className="px-6 py-2 border border-brand-white text-brand-white uppercase text-sm font-bold"
                    disabled
                >
                    More Info
                </button>
            </div>
        </>
    );
};
