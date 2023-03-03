import React from "react";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const RoomList = () => {
  const [datas,setDatas] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch("http://localhost:3001/Mertebe-1")
    .then(res => res.json())
    .then(res => setDatas(res))
  },[])

  const handleEditRoomNo = (id) => {
    navigate("/admin/mertebe-1/" + id);
  }

  return (
    <>
      <div className="cardContent">
        <div className="card cardContent tbodyFloor1">
          <div className="card-title">
          </div>
          <div className="card-body">
            <table border='1' className="table table-bordered ">
              <thead className="bg-dark text-white">
                <tr>
                  <td>Otaq No:</td>
                  <td>Müəssəsənin adı</td>
                  <td>Sahibkar</td>
                  <td>Sahəsi m<sup>2</sup></td>
                  <td>Məkan növü</td>
                  <td>Düzəlişlər</td>
                </tr>
              </thead>
              <tbody className="tbodyFloor1">
                    {
                      datas.map((data)=> <tr key={data.id}>
                        <td>{data.roomNo}</td>
                        <td>{data.company}</td>
                        <td>{data.owner}</td>
                        <td>{data.sahe}</td>
                        <td>{data.roomType}</td>
                        <td className="">
                          <Button
                          onClick={() => handleEditRoomNo(data.id)}
                          className=""
                          variant="contained"
                        >
                          Redakte et
                        </Button>
                        </td>
                      </tr>)
                    }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomList;