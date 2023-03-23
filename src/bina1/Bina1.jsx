import style from "./Bina1.module.css";
import { Link, Outlet } from "react-router-dom";
import "./allFloor.css";
import { useState,useRef } from "react";
import { useSelector } from "react-redux";

const Bina1 = () => {
  const { roomDetail } = useSelector((state) => state.floorsRoomDetail);

  return (
    <div>
      <div className={style.mainContent}>
        <div className={style.leftContent}>
          <div className={style.leftHeaderContent}>
            <Link
              style={{ textDecoration: "none" }}
              to="/Bina-1"
            >
              <span className={style.linkStyle}>MƏRTƏBƏ-1</span>
            </Link>
            <Link
              className={style.linkStyle}
              style={{ textDecoration: "none", margin: "0 3%" }}
              to="/Bina-1/mertebeIki"
            >
              <span className={style.linkStyle}>MƏRTƏBƏ-2</span>
            </Link>
            <Link
              className={style.linkStyle}
              style={{ textDecoration: "none" }}
              to="/Bina-1/mertebeUc"
            > 
              <span className={style.linkStyle}>MƏRTƏBƏ-3</span>
            </Link>
          </div>
          <div className={style.leftFooterContent}>
            <Outlet />
          </div>
        </div>
        <div className={style.rightContent}>
          <div style={{ padding: "10%" }}>
            <h1 style={{ paddingTop: "13%" }}>Sara Invest</h1>
            <p>
              <span style={{ fontWeight: "bold", color: "gray" }}>Otaq No</span>
              : {roomDetail.roomNo}
            </p>
            <p>
              <span style={{ fontWeight: "bold", color: "gray" }}>
                Muessenin adi
              </span>
              : {roomDetail.company}
            </p>
            <p>
              <span style={{ fontWeight: "bold", color: "gray" }}>
                Sahesi m<sup>2</sup>
              </span>{" "}
              : {roomDetail.sahe}
            </p>
            <p>
              <span style={{ fontWeight: "bold", color: "gray" }}>
                Mekan novu
              </span>
              : {roomDetail.roomType}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bina1;
