import React from 'react';
import PublicRoutes from './PublicRoutes'
import PrivateRoutes from './PrivateRoutes'

const Route = () => {
    const isAuthenticated = false
  return isAuthenticated? <PrivateRoutes/> : <PublicRoutes/>
   
  
}

export default Route;
