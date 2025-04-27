import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './home';
import Header from '@/components/layouts/header.layout';
import Footer from '@/components/layouts/footer.layout';
import SearchPage from './search';
import HotelDetails from './hotel-details';
import { SignInPage, SignUpPage } from './auth';
import { PATHS } from '@/config/path.config';
import WithSearchLayout from '@/components/layouts/with-search-layout';
import CheckoutPage from './checkout';
import { WithAuthProvider } from '@/lib/providers/auth-context-provider';
import PaymentStatus from './payments';
import SettingsLayout from './settings/settings-layout';
import Profile from './settings/profile';
import BookingHistory from './settings/booking-history';
import TravellersManagement from './settings/travellers';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<WithSearchLayout />}>
          <Route path={PATHS.SEARCH} element={<SearchPage />} />
          <Route path={PATHS.HOTEL} element={<HotelDetails />} />
        </Route>

        <Route path={PATHS.SIGN_IN} element={<SignInPage />} />
        <Route path={PATHS.SIGN_UP} element={<SignUpPage />} />

        <Route element={<WithAuthProvider />}>
          <Route path={PATHS.CHECKOUT} element={<CheckoutPage />} />
          <Route path={PATHS.PAYMENTS_STATUS} element={<PaymentStatus />} />

          <Route element={<SettingsLayout />}>
            <Route path={PATHS.SETTINGS.PROFILE} element={<Profile />} />
            <Route
              path={PATHS.SETTINGS.BOOKING_HISTORY}
              element={<BookingHistory />}
            />
            <Route
              path={PATHS.SETTINGS.TRAVELERS_MANAGEMENT}
              element={<TravellersManagement />}
            />
          </Route>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
