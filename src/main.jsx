import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx';
import MoveisPage from './pages/MoveisPage.jsx';
import BooksPage from './pages/BooksPage.jsx';
import EletronicsPage from './pages/EletronicsPage.jsx';

import Footer from './components/Footer.jsx';
import {
  BrowserRouter,
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
    path:'/cadastrar-se',
    element:<LoginPage/>
  },
  {
    path:'/entrar',
    element:<LogPage/>
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
  },
  {
    path:'/livros/compra',
    element:<ProductPage/>
  }
])
import { LogProvider } from './context/LogContext.jsx';
import ProductPage from './pages/ProductPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import LogPage from './pages/LogPage.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <LogProvider>
        <RouterProvider
        router={router}>
       </RouterProvider>
       <Footer/>
    </LogProvider>
  </React.StrictMode>
)
