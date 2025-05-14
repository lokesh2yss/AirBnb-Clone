import BackNavigation from '@/components/back-navigate';
import React from 'react';
import { useParams } from 'react-router';
import CreateRoomForm from './create-room-form';

const CreateRoom = () => {
  const { hotelId } = useParams();
  return (
    <div className="container py-4 space-y-8">
      <BackNavigation
        text="Back to rooms"
        href={`/admin/hotels/${hotelId}/rooms`}
      />
      <div className="flex flex-col gap-1">
        <h1 className="text-lg font-semibold">Create Room</h1>
        <p className="text-sm text-muted-foreground">
          Fill room information to create new room
        </p>
      </div>
      <CreateRoomForm />
    </div>
  );
};

export default CreateRoom;
