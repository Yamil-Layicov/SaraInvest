import React from "react";
import { useState} from "react";
import { nanoid } from "nanoid";
import style from "./AddUser.module.css";
import ModalUser from "./ModalUser/ModalUser";
import Button from "@mui/material/Button";
import UserList from "./UserList";
import {useSelector} from 'react-redux'

const AddUSer = () => {

  const {userEdit} = useSelector(state => state.editUser) 
  console.log(userEdit)

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPostition] = useState("");
  const [editData, setEditData] = useState(false); 

  const [editDetail,setEditDeatil] = useState({})

  const handleEdit = (u) => {
    setEditData(true)
    setEditDeatil(u)
  };

  const addNewUser = (e) => {
    e.preventDefault()
    const newUser = {
      id: nanoid(),
      name,
      email,
      position
    };

      if (userPosData.position !== "admin") {
        alert("Yalnizca admin elave ede biler");
      } else {
        fetch("http://localhost:3001/users", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(newUser),
        });
        setTimeout(() => {
          window.location.reload();
        }, 600);
    }

  };

  const userPosData = JSON.parse(localStorage.getItem("userDate"));
  const handleDelete = (u) => {
    const userId = u.id;

    if (userPosData.position !== "admin") {
      alert("Yalnizca admin sile biler");
    } else {
      if (window.confirm("Silmek istedyine eminsen?")) {
        fetch(`http://localhost:3001/users/${userId}/`, {
          method: "DELETE",
        })
          .then((res) => {
            window.location.reload();
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
    }
  };

  return (
    <div style={{ marginTop: "20px", marginLeft: "20px" }}>
      <h3 style={{color:"gray",marginBottom:"20px"}}>İstifadəçi əlavə edin</h3>
      <div className={style.mainFormContent}>
        <form className={style.formContent} onSubmit={addNewUser}>  
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ad"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-poçt"
            required={true}
          />
          <select onChange={(e) => setPostition(e.target.value)}>
            <option selected disabled value='asdsad'>
              Vezife sec
            </option>
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
          </select>
          <Button
            className={style.addBtn}
            style={{ marginTop: "10px" }}
            variant="contained"
            type="submit"
          >
            Elave et
          </Button>
        </form>
      </div>
      <UserList handleDelete={handleDelete} handleEdit={handleEdit}/>
    </div>
  );
};

export default AddUSer;
