import React from 'react';

export interface TourDate {
    _id: string;
    date: string;
    venue: string;
    city: string;
    ticketUrl?: string;
    soldOut?: boolean;
}

interface ConcertRowProps {
    date: TourDate;
    formatDate: (dateString: string) => string;
}

export const ConcertRow: React.FC<ConcertRowProps> = ({ date, formatDate }) => {
    return (
        <li className="bg-brand-black/30 p-6 rounded-lg border border-brand-black flex flex-col md:flex-row justify-between items-center gap-4 hover:bg-brand-black/50 transition-colors">
            <div className="text-center md:text-left">
                <time dateTime={date.date} className="text-brand-black font-bold uppercase tracking-widest text-sm block">
                    {formatDate(date.date)}
                </time>
                <div className="text-2xl font-bold text-brand-black">{date.venue}</div>
                <div className="text-brand-black">{date.city}</div>
            </div>
            {date.soldOut ? (
                <span className="px-6 py-2 bg-brand-black text-brand-black uppercase text-sm font-bold border border-transparent">
                    Utsolgt
                </span>
            ) : date.ticketUrl ? (
                <a
                    href={date.ticketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Les mer om konserten ${date.venue} i ${date.city}`}
                    className="px-6 py-2 bg-brand-red text-brand-black uppercase text-sm font-bold hover:bg-brand-black hover:text-black transition-colors"
                >
                    Billettinfo
                </a>
            ) : (
                <span className="px-6 py-2 border border-brand-black text-brand-black uppercase text-sm font-bold opacity-50 cursor-not-allowed">
                    Billetter kommer
                </span>
            )}
        </li>
    );
};
