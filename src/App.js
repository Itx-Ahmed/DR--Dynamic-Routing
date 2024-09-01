import React from 'react'
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Service from './Components/Service';
import Users from './Components/Users';
import UsersDetails from './Components/UsersDetails';


const App = () => {
  return (
    <div className='App'>
     
     
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Service' element={<Service/>}/>
        <Route path='/Users' element={<Users/>}/>
        <Route path='/UsersDetails' element={<UsersDetails/>}/>
        <Route path='/Users/:id' element={<UsersDetails/>}/>
         
        
       
      </Routes>


    
    </div>
    
  )
}

export default App