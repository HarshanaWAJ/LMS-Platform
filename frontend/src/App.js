import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

// Import Pages

import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import ResetPassword from './pages/ResetPassword';


/* *root Routes* */
const router = createBrowserRouter([
  {
    path:'/',
    element: <Login/>
  },
  {
    path: '/admindashboard', 
    element: <AdminDashboard/>
  }, 
  {
    path: '/register',
    element: <Register/>
  },
  {
    path :'/forgot-password',
    element: <ResetPassword/>
  }
])

function App() {
  return (
    <main>
      <RouterProvider router={router}> </RouterProvider>
    </main>
  );
}

export default App;
