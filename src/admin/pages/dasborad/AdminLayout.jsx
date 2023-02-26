import React from "react";
import style from "./Admin.module.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineSettings } from "react-icons/md";
import { BiMessage } from "react-icons/bi";
import { TfiWorld } from "react-icons/tfi";
import { BiSearch } from "react-icons/bi";
import { TbLayoutDashboard } from "react-icons/tb";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { IoBuildOutline } from "react-icons/io5";

const AdminLayout = () => {
  const [users, setUsers] = useState([]);
  const [ownerName, setOwnerName] = useState("");
  const [ownerPosition, setOwnerPosition] = useState("");
  const [activeBtn, setActiveBtn] = useState(true);

  const navigate = useNavigate();
  const handleLoginPage = (e) => {
    e.preventDefault();
    navigate("/adminLogin");
    localStorage.clear();
  };

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:3001/users")
        .then((res) => res.json())
        .then((res) => setUsers(res));

      const stringifiedPerson = localStorage.getItem("userDate");
      const personAsObjectAgain = JSON.parse(stringifiedPerson);
      const ownerName = personAsObjectAgain.name;
      const ownerPosition = personAsObjectAgain.position;
      setOwnerName(ownerName);
      setOwnerPosition(ownerPosition);
    }, 100);
  }, []);

  return (
    <div>
      <div className={style.adminContent}>
        <div className={style.leftAdminContent}>
          <div className={style.ortala}>
            <div className={style.userPos}> 
              {ownerName} - {ownerPosition}
            </div>
          </div>
          <div className={style.leftSections}>
            <span className={style.sectionIcons}><TbLayoutDashboard /></span>
            <Link style={{textDecoration:"none",color:"gray"}} to="/admin">Esas sehife</Link>
          </div>
          <div className={style.leftSections}>
            <span className={style.sectionIcons}><HiOutlineOfficeBuilding /></span>
            <Link style={{textDecoration:"none",color:"gray"}} to="/admin/mertebe-1">Mertebe-1</Link>
          </div>
          <div className={style.leftSections}>
            <span className={style.sectionIcons}><HiOutlineOfficeBuilding /></span>
            <Link style={{textDecoration:"none",color:"gray"}} to="/admin/mertebe-2">Mertebe-2</Link>
          </div>
          <div className={style.leftSections}>
            <span className={style.sectionIcons}><HiOutlineOfficeBuilding /></span>
            <Link style={{textDecoration:"none",color:"gray"}} to="/admin/mertebe-3">Mertebe-3</Link>
          </div>
          <div className={style.leftSections}>
            <span className={style.sectionIcons}><IoBuildOutline /></span>
            <Link style={{textDecoration:"none",color:"gray"}} to="/admin/addUser">Idarəetmə</Link>
          </div>
        </div>
        <div className={style.rightAdminContent}>
          <div className={style.headerContent}>
            <div className={style.leftHeaderContent}>
              <div className={style.searchInput}>
                <input type="text" placeholder="Axtarış..." />
                <BiSearch />
              </div>
            </div>
            <div className={style.rightHeaderContent}>
              <div className={style.langIcon}>
                <span style={{ paddingTop: "15px" }}>AZ</span>{" "}
                <span className={style.icons}>
                  <TfiWorld />
                </span>
              </div>
              <div>
                <span className={style.icons}>
                  <BiMessage />
                </span>
              </div>
              <div className={style.userImg}>
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/002/002/257/small_2x/beautiful-woman-avatar-character-icon-free-vector.jpg"
                  alt=""
                />
              </div>
              <div className={style.settingExit}>
                <span
                  onClick={() => setActiveBtn(!activeBtn)}
                  className={`${style.icons} ${style.settingIcon}`}
                >
                  <MdOutlineSettings />
                </span>
                <button
                  className={`${style.settingExitBtn} ${
                    activeBtn && style.active
                  }`}
                  onClick={handleLoginPage}
                >
                  Cixis
                </button>
              </div>
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
