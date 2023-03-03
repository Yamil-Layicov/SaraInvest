import React, { useState } from "react";
import LoginPage from "./login/LoginPage";
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

export const BuildContext = createContext();

const App = () => {
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
          <Route path="/" element={<LoginPage />} />
          <Route path="/selector" element={<Selector />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/parametr" element={<Parmetr />} />
          <Route path="/Bina-1" element={<Bina1 />}>

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
