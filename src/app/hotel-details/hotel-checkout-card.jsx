import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import Icon from '@/components/ui/icon';
import React from 'react';

const CancellationPolicy = ({cancellationPolicy}) => {
  return (
    <HoverCard openDelay="100">
      <HoverCardTrigger>
        <div className='flex gap-1 text-rose-600 items-center cursor-pointer'>
          <span>Cancellation Policy</span>
          <Icon icon="info" size="16"/>
        </div>
      </HoverCardTrigger>
      <HoverCardContent align='center' side="left" className="w-[350px] space-y-3 border-border">
        <h3 className='text-base font-semibold'>Cancellation Policy</h3>
        <ul className='pl-4 space-y-3 list-disc'>
          {cancellationPolicy.map((policy, index) => (
            <li key={index}>{policy}</li>
          ))}
        </ul>
      </HoverCardContent>
    </HoverCard>
  )
}

const HotelCheckoutCard = ({ rooms, cancellationPolicy }) => {
  const rupee = '₹';
  const selectedRoom = rooms.find((item) => item.isSelected);
  const price = selectedRoom.price;

  return (
    <div className="space-y-6 p-2">
      <div className="flex-1 flex gap-2 items-center">
        <span className="text-2xl font-bold">
          {rupee}
          {`${price.toLocaleString()}`}
        </span>
        <span className="text-base text-muted-foreground line-through">
          {rupee}
          {`${(price * 1.5).toLocaleString()}`}
        </span>
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm">Your savings</span>
          <span className="text-sm font-bold">
            {rupee}
            {`${(price * 0.5).toLocaleString()}`}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm">Total price</span>
          <span className="text-sm font-bold">
            {rupee}
            {`${price.toLocaleString()}`}
          </span>
        </div>
      </div>
      <Button
        className="w-full h-12 text-base font-semibold"
        aria-label="Continue to Book">
        Continue to Book
      </Button>
      <div className="flex gap-1">
        <Icon
          icon="zap"
          size="16"
          className="mt-[3px] shrink-0 fill-rose-600 text-rose-600"
        />
        <p className="text-sm font-medium text-rose-600">
          1k+ people booked this OYO in last 6 months
        </p>
      </div>
      <CancellationPolicy cancellationPolicy={cancellationPolicy} />
    </div>
  );
};

export default HotelCheckoutCard;
