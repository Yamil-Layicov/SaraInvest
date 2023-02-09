import React from 'react'
import {useNavigate} from 'react-router-dom'
import style from './login.module.css'
import { useState } from 'react'

const LoginPage = () => {

    const[name,setName] = useState('')
    const[password,setPassword] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name == "yamil" || password == "12345"){
            navigate('/selector')
        }else{
            console.log('duzgun daxil ele')
        }
    }

  return (
    <>
        <div className={style.loginContent}>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='ad' onChange={(e)=>setName(e.target.value)}/>
                <input type="password" placeholder='sifre' onChange={(e)=>setPassword(e.target.value)}/>
                <button type='submit' className={style.loginBtn}>Daxil ol</button>
            </form> 
        </div>
    </>
  )
}

export default LoginPage