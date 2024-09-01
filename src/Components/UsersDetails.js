import React from 'react';
import { useParams } from 'react-router-dom';


const UsersDetails = () => {
  const UserID = useParams()
  const id = UserID.id;
  return (
     <h2>Users Details Page is Here-- {id}</h2>
   
  )
}

export default UsersDetails;