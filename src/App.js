import React, { useState } from 'react'
import LoginPage from './login/LoginPage'
import {Routes,Route} from 'react-router-dom'
import MainPage from './main/MainPage'
import Selector from './selector/Selector'
import { createContext } from 'react'
import {data} from './buildData/data'
import Bina1 from './bina1/Bina1'
import Bina2 from './bina2/Bina2'
import Parmetr from './parametrlerUzre/Parmetr'
import AdminLogin from './admin/adminLogin/AdminLogin'
import FloorOne from './admin/pages/floor1/FloorOne'
import FloorTwo from './admin/pages/floor2/FloorTwo'
import AdminLayout from './admin/pages/dasborad/AdminLayout'
import Admin from './admin/pages/dasborad/Admin'
import AddUSer from './admin/pages/addUserAdmin/AddUSer'
import ModalUser from './admin/pages/addUserAdmin/ModalUser/ModalUser'

export const BuildContext = createContext();

const App = () => {

  const[state,setState] = useState({
    buildList:data,
    buildText:''
  })  

  const addToBuildText = text => setState({
      buildText:state.buildText.find(item => item.id === text.id),
  })

  return (
    <BuildContext.Provider value={{state,addToBuildText}}>
       <div>
         <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/selector' element={<Selector/>}/>
          <Route path='/main' element={<MainPage/>}/>
          <Route path='/parametr' element={<Parmetr/>}/>
          <Route path ='/Bina-1' element={<Bina1/>}/>
          <Route path='/Bina-2' element={<Bina2/>}/>
          <Route path='/admin' element={<AdminLayout/>}>
              <Route index={true} element={<Admin/>}/>
              <Route path='mertebe-1' element={<FloorOne/>}/>
              <Route path='mertebe-2' element={<FloorTwo/>}/>
              <Route path='addUser' element={<AddUSer/>}/>
              <Route path='modalUser' element={<ModalUser/>}/>
          </Route> 
          <Route path='/adminLogin' element={<AdminLogin/>}/>
         </Routes>
       </div>
    </BuildContext.Provider>
  )
}

export default App
