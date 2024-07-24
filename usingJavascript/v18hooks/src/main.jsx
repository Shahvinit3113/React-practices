import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import UseTransitionHook from './components/UseTransitionHook.jsx'
import Layout from './Layout.jsx'
import Axiosex1 from './components/Axiosex1.jsx'
import SearchPost from './SearchPost/SearchPost.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
    <Route path='/SearchPosts' element={<SearchPost />} />

    <Route path='useTransitionHook' element= {<UseTransitionHook />}/>
    <Route path='axios' element= {<Axiosex1 />}/>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
