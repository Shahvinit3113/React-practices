import React from 'react'
import { Outlet, Link } from 'react-router-dom'


function Layout() {
  return (
    <div>
      <div className='nav'>
      <Link to="useTransitionHook" >
        useTransition Hook
      </Link>
      
      
      <Link to="axios" >
        Axios example 1
      </Link>
     
      
      <Link to="SearchPosts" >
      Search Posts
      </Link>
      </div>

      <Outlet />
    </div>
  )
}

export default Layout
