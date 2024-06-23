import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MoveisPage from './pages/MoveisPage.jsx';
import BooksPage from './pages/BooksPage.jsx';
import EletronicsPage from './pages/EletronicsPage.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css'
const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/moveis',
    element:<MoveisPage/>
  },
  {
    path:'/eletronicos',
    element:<EletronicsPage/>
  },
  {
    path:'/livros',
    element:<BooksPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <RouterProvider router={router}/>
    <Footer/>
  </React.StrictMode>
)
