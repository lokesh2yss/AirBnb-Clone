import React from 'react'
import PropertyViewCarousel from './property-view-carousel'
import HotelMetaDetails from './hotel-meta-details'
import HotelRoomsPicker from './hotel-rooms-picker'
import HotelPolicy from './hotel-policy'
import HotelCheckoutCard from './hotel-checkout-card'

const HotelDetails = () => {
  return (
    <div className='container'>
        <PropertyViewCarousel />
        <div>
            <div>
                <HotelMetaDetails />
                <HotelRoomsPicker />
                <HotelPolicy />
            </div>
            <HotelCheckoutCard />
        </div>
    </div>
  )
}

export default HotelDetails