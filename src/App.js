import React, { useState } from "react";
import LoginPage from "./mainLogin/LoginPage";
import { Routes, Route } from "react-router-dom";
import MainPage from "./main/MainPage";
import Selector from "./selector/Selector";
import { createContext } from "react";
import { data } from "./buildData/data";
import Bina1 from "./bina1/Bina1";
import Bina2 from "./bina2/Bina2";
import Parmetr from "./parametrlerUzre/Parmetr";
import AdminLogin from "./admin/adminLogin/AdminLogin";
import FloorOne from "./admin/pages/floor1/FloorOne";
import FloorTwo from "./admin/pages/floor2/FloorTwo";
import FloorThree from './admin/pages/floor3/FloorThree';
import AdminLayout from "./admin/pages/dasborad/AdminLayout";
import AddUSer from "./admin/pages/addUserAdmin/AddUSer";
import DataTable from "./admin/pages/materialUser/DataTable";
import RoomEdit from "./admin/pages/floor1/FloorOneEdit";
import MertebeBir from './bina1/floorOne/MertebeBir'
import MertebeIki from "./bina1/floorTwo/MertebeIki";
import MertebeUc from "./bina1/floorThree/MertebeUc";
import AllBuilding from "./allBuildings/AllBuilding";

export const BuildContext = createContext();


const App = () => {
const [authUser,setAuthUser] = useState(false)

  const [state, setState] = useState({
    buildList: data,
    buildText: "",
  });

  const addToBuildText = (text) =>
    setState({
      buildText: state.buildText.find((item) => item.id === text.id),
    });

  return (
    <BuildContext.Provider value={{ state, addToBuildText }}>
      <div>
         <Routes>
          <Route path="/" element={<LoginPage setAuthUser={setAuthUser} />} />
            <Route path="/selector" element={<Selector />} />
          <Route path="/maina" element={<MainPage/>} />
          <Route path="/main" element={<AllBuilding/>} />
          <Route path="/parametr" element={<Parmetr />} />
          <Route path="/Bina-1" element={<Bina1 />}>
            <Route index={true} element={<MertebeBir/>}/>
            <Route path="mertebeIki" element={<MertebeIki/>}/>
            <Route path="mertebeUc" element={<MertebeUc/>}/>
          </Route>
          <Route path="/Bina-2" element={<Bina2 />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index={true} element={<DataTable/>}/>
            <Route path="mertebe-1" element={<FloorOne />} />
            <Route path='mertebe-1/:roomid' element={<RoomEdit/>}/> 
            <Route path="mertebe-2" element={<FloorTwo />} />
            <Route path="mertebe-3" element={<FloorThree/>}/>           
            <Route path="addUser" element={<AddUSer />} />
          </Route>
          <Route path="/adminLogin" element={<AdminLogin />} />
        </Routes>
      </div>
    </BuildContext.Provider>
  );
};

export default App;
