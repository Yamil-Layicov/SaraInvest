import React from 'react'
import Header from './todo/Header'
import { useState } from 'react'
import AddToDo from './todo/AddToDo'
import TodoList from './todo/TodoList'
import Modal from './todo/Modal'

const UserManage = () => {

    const [language,setLanguage] = useState('tr')
    const [dark,setDark] = useState(true)
    const [modal,setModal] = useState(false)

    const close = () => {
      setModal(false)
    }
  
  return ( 
    <div>
        {modal && <Modal close={close} name={modal.name} data={modal.data}/>}
        <Header/>
        <AddToDo/>
        <TodoList setModal={setModal}/>
    </div>
  )
}

export default UserManage