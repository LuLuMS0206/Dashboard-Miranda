// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import './styles.css'
// import { LoginPage } from './pages/LoginPage/LoginPage'
// import { NavbarComponent } from './components/navbarComponent/navbarComponent'
// import { DashboardPage } from './pages/dashboardPage/dashboardPage'
// import { ProtectedRoutes } from './components/utils/protectedRoutes'
// import { useLocalStorage } from 'react-use'

// ReactDOM.createRoot(document.getElementById('root')).render(

//   const [user, setUser] useLocalStorage = ('user')

//   <React.StrictMode>
//   <BrowserRouter>
//         <Routes>
//             <Route path='/login' element={<LoginPage />} />

//             <Route path='/navbarComponent' element={<NavbarComponent />} />

//             <Route element={<ProtectedRoutes canActive={user} />}>
//           <Route path='/' element={<DashboardPage />} />
//         </Route>
//         </Routes>
//       </BrowserRouter>
//   </React.StrictMode>,
// )


import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { NavbarComponent } from './components/navbarComponent/navbarComponent';
import { DashboardPage } from './pages/dashboardPage/dashboardPage';
import { ProtectedRoutes } from './components/utils/protectedRoutes';
import { useLocalStorage } from 'react-use';

export const MainApp = () => {
  const [user] = useLocalStorage('user');

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/navbarComponent' element={<NavbarComponent />} />
          <Route element={<ProtectedRoutes canActive={!!user} redirectPath = '/login'/>}>
            <Route path='/' element={<DashboardPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<MainApp />);
