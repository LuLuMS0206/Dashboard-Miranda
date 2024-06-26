

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { NavbarComponent } from './components/navbarComponent/navbarComponent';
import { DashboardPage } from './pages/dashboardPage/dashboardPage';
import { ProtectedRoutes } from './components/utils/protectedRoutes';
import { useLocalStorage } from 'react-use';
import { BookingPage } from './pages/bookingPage/bookingPage';
import { UserPage } from './pages/userPage/userPage';
import { ContactPage } from './pages/contactPage/contactPage';
import { RoomPage } from './pages/roomPage/roomPage';

export const MainApp = () => {
  const [user] = useLocalStorage('user');

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route element={<ProtectedRoutes canActive={!user} redirectPath='/login' />}>
            <Route path='/' element={<DashboardPage />} />
            <Route path='/navbarComponent' element={<NavbarComponent />} />
            <Route path='/bookings' element={<BookingPage />} />
            <Route path='/users' element={<UserPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/rooms' element={<RoomPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<MainApp />);
