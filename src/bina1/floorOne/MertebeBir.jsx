import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { roomDetails } from "../../stores/floorsRoomDetail";
import style from "./MertebeBir.module.css";

const MertebeBir = () => {
  const [floorOneData, setFloorOneData] = useState([]);
  const dispatch = useDispatch();
  const [roomId,setRoomId] = useState('')

  useEffect(() => {
    fetch("http://localhost:3001/Mertebe-1")
      .then((res) => res.json())
      .then((res2) => setFloorOneData(res2));
  }, []);

  const handleRoomDetail = (data) => {
    dispatch(roomDetails(data));
    setRoomId(data.id);
  };

  return (
    <div>
      {floorOneData.map((data) => (
        <div
          style={{ boxShadow: data.company === "" && "3px 3px 3px red"}}
          onClick={() => handleRoomDetail(data)}
          className={data.roomStyle}
          key={data.id}
        >
          <div style={{ paddingLeft: "2px" }}>{data.roomNo}</div>
        </div>
      ))}
    </div>
  );
};

export default MertebeBir;
