import React, {useState,} from 'react';
import {withAuth} from '../context/AuthProvider'
import EditUser from './EditUser'

const Profile = (props) => {
  const [toggle, setToggle] = useState(false)
    const currentUser = [props.user]
  
  const toggler = () => {
    setToggle(prev => (!prev))
  }
  
  return (
    <div>
      {currentUser.map( you => {
        return <>{!toggle ?

          <>

          <h1>Your Profile</h1>
                <h2 key={you._id}>your name: {you.name}</h2>
                  <h4> your email:{you.email}</h4>
                    <button onClick={toggler}>edit profile.</button>
                    </>
                    :
                    <EditUser toggler={toggler} />
        }
              </>
      })}
      
    </div>
  );
};

export default withAuth(Profile);