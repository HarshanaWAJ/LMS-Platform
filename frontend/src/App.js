import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

// Import Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

/* *root Routes* */
const router = createBrowserRouter([
  {
    path:'/',
    element: <Login/>
  },
  {
    path: '/home', 
    element: <Home/>
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
