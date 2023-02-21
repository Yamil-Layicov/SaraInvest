import React from 'react'
import style from './Admin.module.css'
import {Link} from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div>
      <div className={style.adminContent}>
        <div className={style.leftAdminContent}>
          <div className={style.ortala}>
            <div className={style.logoImg}>
              <img src="https://busy.az/storage/companies/16759546031670909454457.jpg" alt="" />
            </div>
          </div>
          <Link to='/admin'>Esas sehife</Link>
          <Link to='/admin/mertebe-1'>Mertebe-1</Link>
          <Link to='/admin/mertebe-2'>Mertebe-2</Link>
          <div>Mertebe-3</div>
          <Link to='/admin/userManage'>Idarəetmə</Link>
        </div>
        <div className={style.rightAdminContent}>
          <div className={style.headerContent}>
            <div className={style.leftHeaderContent}>
              <input type="text" placeholder='search...'/>
            </div>
            <div className={style.rightHeaderContent}>
              user
            </div>
          </div>
          <div className={style.footerContent}>
          <Outlet/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLayout