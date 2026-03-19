import React, { useEffect, useState } from 'react';
import { client } from '../../lib/sanity';
import { ConcertRow, type TourDate } from './ConcertRow';
import { EmptyConcerts } from './EmptyConcerts';

export const Concerts: React.FC = () => {
    const [dates, setDates] = useState<TourDate[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDates = async () => {
            try {
                if (client.config().projectId) {
                    const result = await client.fetch<TourDate[]>(
                        `*[_type == "tourDate" && date >= now()] | order(date asc)`
                    );
                    setDates(result);
                }
            } catch (error) {
                console.error('Failed to fetch tour dates:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchDates();
    }, []);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        });
    };

    return (
        <section className="flex flex-col items-center py-12 px-4 animate-in fade-in slide-in-from-bottom-4 duration-500 bg-brand-red">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-brand-black mb-12">
                Konserter
            </h2>
            <ul className="w-full max-w-4xl space-y-4">
                {loading ? (
                    <p className="text-center text-brand-black animate-pulse">
                        Laster datoer...
                    </p>
                ) : dates.length > 0 ? (
                    dates.map((date) => (
                        <ConcertRow key={date._id} date={date} formatDate={formatDate} />
                    ))
                ) : (
                    <EmptyConcerts />
                )}
            </ul>
        </section>
    );
};
