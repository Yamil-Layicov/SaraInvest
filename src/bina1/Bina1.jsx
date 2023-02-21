import React from "react";
import style from "./Bina1.module.css";
import { useState, useEffect } from "react";
import con from "./connect.png";

const Bina1 = () => {
  const [floor, setFloor] = useState([]);
  const [room, setRoom] = useState("");
  const [img, setImg] = useState(true);
  const [roomDetail, setRoomDetail] = useState([]);

  const buttons = [
    { id: 1, title: "Mertebe-1" },
    { id: 2, title: "Mertebe-2" },
    { id: 3, title: "Mertebe-3" },
  ];

  const handleClick = (button) => {
    setImg(false);
    setRoom(button.id);
    fetch(`http://localhost:3001/Mertebe-${button.id}`)
      .then((res) => res.json())
      .then((res2) => setFloor(res2));
  };

  const handleRoomDetail = (flo) => {
    setRoomDetail(flo);
  };

  console.log(roomDetail);

  return (
    <div className={style.content}>
      <div className={style.mainContent}>
        <div className={style.headerContent}>
          {buttons.map((button) => (
            <button onClick={() => handleClick(button)}>{button.title}</button>
          ))}
        </div>
        <div className={style.footerContent}>
          {floor.map((flo) => (
              <div style={{display:"block",width:"200px"}} onClick={() => handleRoomDetail(flo)}>
               <button style={{ width: `${flo.width}`,height:`${flo.height}` }}> Otaq No: {flo.roomNo}</button>
              </div>
          ))} 
          {img && (
            <img style={{ width: "100%", height: "630px" }} src={con} alt="" />
          )}
        </div>
      </div>
      <div className={style.detailContent}>
        <div>
          {
            <ul>
              <li>
                {roomDetail.roomNo}
              </li>
              <li>
                {roomDetail.company}
              </li>
              <li>
                {roomDetail.sahe}
              </li>
              <li>
                {roomDetail.roomType}
              </li>
            </ul>
          }
        </div>
      </div>
    </div>
  );
};

export default Bina1;
