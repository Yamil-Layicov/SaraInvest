import React, { useState } from 'react'
import style from './ModalUser.module.css'
import Button from "@mui/material/Button";
import {useSelector} from 'react-redux'
import { useDispatch} from "react-redux";



const ModalUser = ({setShow}) => {
  const dispatch = useDispatch()
  const {userEdit} = useSelector(state => state.editUser) 
  console.log()

  const [modalName, setmodalName] = useState(userEdit.name);
  const [modalemail, setmodalEmail] = useState(userEdit.email);
  const [modalposition, setmodalPostition] = useState(userEdit.position);

  const [error, setError] = useState(false);

  const editUserData={
    name:modalName,
    email:modalemail,
    position:modalposition
  }


  const closeModalBtn=(e)=>{
    setShow(false);
  }

  const inputChange=(e)=>{
    if (e.target.name=="nameInput") {
      setmodalName(e.target.value);
      console.log(modalName);
    }
    if (e.target.name=="emailInput") {
      setmodalEmail(e.target.value)
      console.log(modalemail);
    }
    e.target.value?setError(false):setError(true)
   
  }

  const handleEditUser = (e) => {
    e.preventDefault();
    if (editUserData.name=="" || editUserData.email=="" || editUserData.position=="" ) {
     setError(true)
    }
    else {  
      fetch("http://localhost:3001/users/" + userEdit.id, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(editUserData),
      });
      window.location.reload();
  
    }
   
  }

  return (
    <div>
        <div  className={style.modalContent}>
          <form className={style.formContent} >  
            <input
              type="text"
              name="nameInput"
              value={modalName}
              onChange={(e) => inputChange(e)}
              placeholder="Ad"
              required
            />
            <input
              type="text"
              value={modalemail}
              name="emailInput"
              onChange={(e) => inputChange(e)}
              placeholder="E-poçt"
              required
            />
            <select value={modalposition} onChange={(e) => setmodalPostition(e.target.value)}>
              <option selected disabled value=''>
                Vezife sec
              </option>
              <option value="admin">Admin</option>
              <option value="manager">Manager</option>
            </select>

            {error?<span style={{
              color:"red"
            }}>Xanalar doldurulmalidir</span>:""}
            <Button
              onClick={handleEditUser}
              className={style.addBtn}
              style={{ marginTop: "10px" }}
              variant="contained"
              type="submit"
            >
              Yadda saxla
            </Button>
            <div onClick={closeModalBtn} className={style.closeModalBtn}>X</div>
          </form>
        </div>
    </div>
  )
}

export default ModalUser