import React, { useState, } from 'react';
import { withAuth, } from '../context/AuthProvider'
import {Route, Redirect} from 'react-router-dom'


const ProtectedRoute = (props) => {
  // console.log('protected route', props)
const {component: Component, ...rest} = props

console.log(Component)

  return (


    <div>
      test
    </div>
  );
};

export default withAuth(ProtectedRoute);