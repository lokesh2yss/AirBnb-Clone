import React from 'react';
import BookingCard from './booking-card';
import { Separator } from '@/components/ui/separator';
import useGetBookingHistory from './use-get-booking-history';
import { LoadingSpinner } from '@/components/ui/loader';

const BookingHistory = () => {
  const { data, error, pending } = useGetBookingHistory();
  if (pending)
    return <LoadingSpinner containerClassName="min-h-[calc(100vh-120px)]" />;
  return (
    <section>
      <div className="space-y-0.5">
        <h1 className="text-xl font-bold">My Booking History</h1>
        <p className="text-muted-foreground">
          View, update, or cancel your bookings with ease.
        </p>
      </div>
      <Separator className="mt-4 mb-6" />
      <div className="space-y-4">
        {data.map((booking) => (
          <BookingCard key={booking.id} {...booking} />
        ))}
      </div>
    </section>
  );
};

export default BookingHistory;
