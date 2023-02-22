import React from "react";
import style from "./Admin.module.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminLayout = () => {
  const [users, setUsers] = useState([]);
  const [ownerName,setOwnerName] = useState('')
  const [ownerPosition,setOwnerPosition] = useState('')

  const navigate = useNavigate()
  const handleLoginPage = e =>{
    e.preventDefault()
    navigate('/adminLogin')
    localStorage.clear();
  }
  
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then((res) => setUsers(res));
      
      const stringifiedPerson = localStorage.getItem("userDate")
      const personAsObjectAgain = JSON.parse(stringifiedPerson)
      const ownerName = personAsObjectAgain.name
      const ownerPosition = personAsObjectAgain.position
      setOwnerName(ownerName)
      setOwnerPosition(ownerPosition)
    }, 100);
  }, []); 

  return (
    <div>
      <div className={style.adminContent}>
        <div className={style.leftAdminContent}>
          <div className={style.ortala}>
            <div className={style.logoImg}>
              <img
                src="https://busy.az/storage/companies/16759546031670909454457.jpg"
                alt=""
              />
            </div>
          </div>
          <Link to="/admin">Esas sehife</Link>
          <Link to="/admin/mertebe-1">Mertebe-1</Link>
          <Link to="/admin/mertebe-2">Mertebe-2</Link>
          <div>Mertebe-3</div>
          <Link to="/admin/userManage">Idarəetmə</Link>
          <Link to="/admin/addUser">Add user</Link>
        </div>
        <div className={style.rightAdminContent}>
          <div className={style.headerContent}>
            <div className={style.leftHeaderContent}>
              <input type="text" placeholder="search..." />
            </div>
            <div className={style.rightHeaderContent}>
             {ownerName}({ownerPosition})
             <button onClick={handleLoginPage}>Cixis</button>
            </div>
          </div>
          <div className={style.footerContent}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
