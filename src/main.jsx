import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './styles.css';
import { store } from './store/store';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { NavbarComponent } from './components/navbarComponent/navbarComponent';
import { DashboardPage } from './pages/dashboardPage/dashboardPage';
import { ProtectedRoutes } from './components/utils/protectedRoutes';
import { useLocalStorage } from 'react-use';
import { BookingPage } from './pages/booking/bookingPage/bookingPage';
import { UserPage } from './pages/userPage/userPage';
import { ContactPage } from './pages/contactPage/contactPage';
import { RoomPage } from './pages/roomPage/roomPage';
import { UserContextProvider } from './context/userContext';
import { BookingDetailPage } from './pages/booking/bookingDetailPage/bookingDetailPage';
import { BookingEditPage } from './pages/booking/bookingFormPage/bookingFormPage';
import { NewBookingPage } from './pages/booking/newBookingPage/newBookingPage';
import { RoomEditPage } from './pages/roomPage/roomEditPage';
import { NewRoomPage } from './pages/roomPage/newRoomPage';


export const MainApp = () => {
  const [user] = useLocalStorage('user');

  return (
    <React.StrictMode>
      <Provider store={store}>
        <UserContextProvider> 
          <BrowserRouter>
            <Routes>
              <Route path='/login' element={<LoginPage />} />
              <Route element={<ProtectedRoutes canActive={!user} redirectPath='/login' />}>
                <Route path='/' element={<DashboardPage />} />
                <Route path='/navbarComponent' element={<NavbarComponent />} />
                <Route path='/bookings' element={<BookingPage />} />
                <Route path='/bookingsDetail/:id' element={<BookingDetailPage />} />
                <Route path='/bookingsEdit/:id' element={<BookingEditPage />} />
                <Route path='/newBooking' element={<NewBookingPage />} />
                <Route path='/users' element={<UserPage />} />
                <Route path='/contact' element={<ContactPage />} />
                <Route path='/rooms' element={<RoomPage />} />
                <Route path='/roomsEdit/:id' element={<RoomEditPage />} />
                <Route path='/newRooms' element={<NewRoomPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </UserContextProvider>
      </Provider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<MainApp />);
