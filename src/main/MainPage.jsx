import React from "react";
import { useContext, useState } from "react";
import Bottons from "./Bottons";
import style from "./main.module.css";
import { BuildContext } from "../App";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate()
  const context = useContext(BuildContext);

  const [text, setText] = useState([]);
  const [buildImg,setbuildImg] = useState(true)

  const handleClick = (id) => {
    setText(id);
    setbuildImg(false)
  };

  const handleParams = () => {
     if(text.title != null){
      navigate(`/${text.title}`)
     }
  }

  return (
    <div className={style.main}>
      <div className={style.mainContent}>
        <div className={style.imgContent}>
          <div className={style.imgDivTag}>
            { 
              context.state.buildList.map(btn => {
                return <div  key={btn.id} onClick={() => handleClick(btn)}>
                  <Bottons btn={btn}/>
                </div>
              })
            }   
          </div>
        </div>
        <div className={style.detailContent}>
          <div className={style.detailContentInto}>
            <p className={style.addressText}>Baki seheri dernegul yolu</p>
            <div className={style.buildApiContent}>
              {
                buildImg ? <div className={style.rightImg}><img src="https://i.postimg.cc/jjDZtgJN/buildImg.png" 
                 alt="" /></div> : <>
                <h3>{text.name}</h3>
                <p>{text.title}</p>
                <p>{text.allRommsNum}</p>
              </>
              }
            </div>
            {
              buildImg ? <p className={style.mapSelectorText}>
              Xerite uzerinde binani secin
            </p> : ''
            }
          </div>
          <div onClick={handleParams} className={style.nextBtn}>Novbeti</div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
