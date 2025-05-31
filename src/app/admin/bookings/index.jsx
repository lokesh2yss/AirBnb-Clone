import ApiError from '@/components/api-error';
import { LoadingSpinner } from '@/components/ui/loader';
import useQuery from '@/lib/hooks/useQuery';
import React from 'react';
import { useParams } from 'react-router';
import BookingsTable from './bookings-table';

const Bookings = () => {
  const { hotelId } = useParams();
  const { data, pending, error } = useQuery({
    url: `/admin/hotels/${hotelId}/bookings`,
  });

  if (pending)
    return <LoadingSpinner containerClassName="min-h-[calc(100vh-56px)]" />;

  if (error)
    return <ApiError errorMessage={error} className="h-[calc(100vh-124px)]" />;

  return (
    <div className="container p-4 max-w-[1536px] space-y-8">
      <section className="space-y-1">
        <h1 className="text-base font-semibold">Bookings</h1>
        <p className="text-sm">View all your Bookings</p>
      </section>
      <section>
        <BookingsTable bookings={data || []} />
      </section>
    </div>
  );
};

export default Bookings;
