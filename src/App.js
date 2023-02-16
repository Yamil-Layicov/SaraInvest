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
import Admin from './admin/Admin'

export const BuildContext = createContext();

const App = () => {

  const[state,setState] = useState({
    buildList:data,
    buildText:''
  })  

  const addToBuildText = text => setState({
      buildText:state.buildText.find(item => item.id === text.id),
      changeColor:state.changeColor.find(item => item.id === text.id)
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
          <Route path='/admin' element={<Admin/>}/>
         </Routes>
       </div>
    </BuildContext.Provider>
  )
}

export default App
