import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

// Import Pages

import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';

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
])

function App() {
  return (
    <main>
      <RouterProvider router={router}> </RouterProvider>
    </main>
  );
}

export default App;
