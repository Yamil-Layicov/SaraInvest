import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { roomDetails } from "../../stores/floorsRoomDetail";

const MertebeBir = () => {

  const [roomStyleId,setRoomStyleId] = useState("")

  const [floorOneData, setFloorOneData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3001/Mertebe-1")
      .then((res) => res.json())
      .then((res2) => setFloorOneData(res2));
  }, []);

  const handleRoomDetail = (data) => {
    dispatch(roomDetails(data));
    setRoomStyleId(data.id)
    console.log(data)
  };

  return (
    <div>
      {floorOneData.map((data) => (
        <div
          style={{ boxShadow: data.company === "" && "inset 0px 0px 16px 1px  red",fontSize:data.id === roomStyleId && "32px"}}
          onClick={() => handleRoomDetail(data)}
          className={`${data.roomStyle} ${data.id === roomStyleId && "roomStyleClickId"}`}
          key={data.id}
        >
          <div style={{ paddingLeft: "2px"}}>{data.roomNo}</div>
        </div>
      ))}
    </div>
  );
};

export default MertebeBir;