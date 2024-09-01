import React from 'react'
import { Link } from 'react-router-dom'
import Service from './Service'


const Users = () => {
  return (
    <>
    <h1>Users Details is Here</h1>
     <h2>
      <Link to='Users/1' >user 1 </Link>
     </h2>

     <h2>
      <Link to='/Users/3'>user 2 </Link>
     </h2>

     <h2>
      <Link  to='/Users/3'> user 3 </Link>
     </h2>
  </>
  )
}

export default Users