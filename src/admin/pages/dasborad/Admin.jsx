import style from './AdminHome.module.css'
import {BsArrowRight} from 'react-icons/bs'
import {FiUserCheck} from 'react-icons/fi'
import {BsDoorOpen} from 'react-icons/bs'
import {BsDoorClosed} from 'react-icons/bs'
import {IoLocationOutline} from 'react-icons/io5'

const Admin = () => {
  return (
    <div>
      <div className={style.homeContent}>
        <div style={{width:"25%"}} className={`${style.usersContent} ${style.contentBox}`}>
          <div className={style.boxColumns}>
            <p className={style.first}>İstifadəçilərin sayı</p>
            <p className={style.userNumber}>6</p>
            <p >Bütün istifadəçilər <span><BsArrowRight/></span> </p>
          </div>
          <div className={style.userIcon}><FiUserCheck/></div>
        </div>
        <div style={{width:"25%"}} className={`${style.usersContent} ${style.contentBox}`}>
          <div className={style.boxColumns}>
            <p className={style.first}>Otaqların sayı</p>
            <p className={style.userNumber}>72</p>
            <p >Bütün otaqlar <span><BsArrowRight/></span> </p>
          </div>
          <div className={style.userIconFirst}><BsDoorClosed/></div>
        </div>
        <div style={{width:"25%"}} className={`${style.usersContent} ${style.contentBox}`}>
          <div className={style.boxColumns}>
            <p className={style.first}>Boş otaqların sayı</p>
            <p className={style.userNumber}>1</p>
            <p >Bütün boş otaqlar <span><BsArrowRight/></span> </p>
          </div>
          <div className={style.userIconSecond}><BsDoorOpen/></div>
        </div>
        <div style={{width:"25%"}} className={`${style.usersContent} ${style.contentBox}`}>
          <div className={style.boxColumns}>
            <p className={style.first}>Boş otaqların sahesi</p>
            <p className={style.userNumber}>42 m<sup>2</sup></p>
            <p >Boş otaq sahesi <span><BsArrowRight/></span> </p>
          </div>
          <div className={style.userIconThird}><IoLocationOutline/></div>
        </div>
      </div>
    </div>
  )
}

export default Admin