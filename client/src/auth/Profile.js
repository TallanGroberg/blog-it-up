import React from 'react';
import {withAuth} from '../context/AuthProvider'

const Profile = (props) => {
  console.log(props)
  return (
    <div>
      
    </div>
  );
};

export default withAuth(Profile);