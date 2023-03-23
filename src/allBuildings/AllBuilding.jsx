import style from "./style.module.css";
import img from "./build.png";
import img2 from "./img2-removebg-preview.png";
import img3 from "./img3.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineDoubleRight } from "react-icons/ai";

const AllBuilding = () => {
  const arr = [
    { id: 1, name: "Bina-1", title: "Connect", roomNo: "42",floorNo:"3" },
    { id: 2, name: "Bina-2", title: "Sara Invest-2" },
    { id: 3, name: "Bina-3", title: "Sara Invest-3" },
    { id: 4, name: "Bina-4", title: "Sara Invest-4" },
    { id: 5, name: "Bina-5", title: "Sara Invest-5" },
    { id: 6, name: "Bina-6", title: "Sara Invest-6" },
    { id: 7, name: "Bina-7", title: "Sara Invest-7" },
    { id: 8, name: "Bina-8", title: "Sara Invest-8" },
    { id: 9, name: "Bina-9", title: "Sara Invest-9" },
    { id: 10, name: "Bina-10", title: "Sara Invest-10" },
  ];

  const [buildBtn, setBuildBtn] = useState({});
  const [isBuild, setisBuild] = useState(false);

  const handleBuildData = (id) => {
    setBuildBtn(id);
    setisBuild(true);
  };

  const navigate = useNavigate();

  const handleParams = () => {
    if(buildBtn.name != null){
     navigate(`/${buildBtn.name}`)
    }
 }


  return (
    <div>
      <div className={style.mainContnet}>
        <div className={style.leftContnet}>
          {arr.map((build) => (
            <div key={build.id} className={style.imgContent}>
              <img src={img} alt="" />
              <div
                onClick={() => handleBuildData(build)}
                className={style.buildDiv}
              >
                {build.name}
              </div>
            </div>
          ))}
        </div>
        <div className={style.rightContnet}>
          {isBuild ? (
            <div style={{textAlign:"center", paddingTop:"40%"}}>
              <h4 style={{color:"gray"}}>{buildBtn.name}</h4>  
              <h1 style={{marginTop:"6%"}}>{buildBtn.title}</h1>
              <h5 style={{marginTop:"10%"}}> <span style={{color:"gray"}}>Otaq sayi:</span> {buildBtn.roomNo}</h5>
              <h5 style={{marginTop:"10%"}}> <span style={{color:"gray"}}>Mertebe sayi :</span> {buildBtn.floorNo}</h5>
            </div>
          ) : (
            <>
              <div className={style.nextBuildImg}>
                <h3 style={{ marginBottom: "12%" }}>
                  Xerite uzerinde binani secin
                </h3>
                <h5>Baki seheri dernegul yolu</h5>
                <img src={img3} alt="" />
              </div>
            </>
          )}
          <div className={style.nextBtn} onClick={handleParams}>
            <span>Novbeti</span>
            <AiOutlineDoubleRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBuilding;
