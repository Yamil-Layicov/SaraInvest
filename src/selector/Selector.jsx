import React from 'react'
import style from './selector.module.css'
import {useNavigate} from 'react-router-dom'

const Selector = () => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/main')
    }   

  return (
    <div>
        <div className={style.selectorText}>
            <span onClick={handleNavigate} className={style.span}>Xerite uzerinde</span>
            <span>Paramterler uzre</span>
        </div>
    </div>
  )
}

export default Selector