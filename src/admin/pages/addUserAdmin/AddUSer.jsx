import React from "react";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import style from "./AddUser.module.css";
import { useNavigate } from "react-router-dom";
import ModalUser from "./ModalUser/ModalUser";

const AddUSer = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPostition] = useState("");

  const [editModal, setEditModal] = useState(false);
  const [editData, setEditData] = useState({});

  // const [editNewNameData, setEditNewName] = useState("");
  // const [editNewEmailData, setEditEamilName] = useState("");
  // const [editNewPosition,setNewPosition] = useState('')
  // const [editModalId,setEditModalId] = useState("")

  const navigate = useNavigate();
  const handleEdit = (u) => {
    console.log(u)
    setEditData(u)
    navigate('/admin/modalUser')
  };

  // const saveModalData = (e) => {
  //   e.preventDefault();
  //   const newUserData = {editNewNameData,editNewEmailData,editNewPosition}
  //   fetch(`http://localhost:3001/users/${editModalId}`,{
  //     method:"PUT",
  //     headers:{"content-type":"application/json"},
  //     body:JSON.stringify(newUserData)
  //   })
  //   window.location.reload();
  // };

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then((res) => setUsers(res));
  }, []);

  const addNewUser = (e) => {
    e.preventDefault();
    const newUser = {
      id: nanoid(),
      name,
      email,
      position,
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
        setName("");
        setEmail("");
        setPostition("");
        window.location.reload();
      }, 500);
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
      <form onSubmit={addNewUser}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="adi"
        />
        <br />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <br />
        <select onChange={(e) => setPostition(e.target.value)}>
          <option value="none">Vezife sec</option>
          <option value="admin">admin</option>
          <option value="manager">manager</option>
        </select>
        <br />
        <button>Add</button>
      </form>
      {users.map((u) => (
        <div style={{ borderBottom: "1px solid white" }} key={u.id}>
          <div>
            <span style={{ color: "gray",paddingRight:"3px" }}>Name</span>:{u.name}
          </div>
          <div>
            <span style={{ color: "gray",paddingRight:"3px" }}>Email</span>:{u.email}
          </div>
          <div>
            <span style={{ color: "gray",paddingRight:"3px" }}>Position</span>:{u.position}
          </div>
          <button
            disabled={u.name == "Yamil" && u.position == "admin"}
            onClick={() => handleDelete(u)}
            className="btn btn-danger"
          >
            Sil
          </button>
          <button
            onClick={() => handleEdit(u)}
            disabled={u.name == "Yamil" && u.position == "admin"}
            className="btn btn-primary"
          >
            Redakte et
          </button>
        </div>
      ))}

      {/* {editModal && (
        <div className={style.modal}>
          <div className={style.modalInto}>
            <input
              type="text"
              value={editNewNameData}
              onChange={(e) => setEditNewName(e.target.value)}
            />
            <input
              type="text"
              value={editNewEmailData}
              onChange={(e) => setEditEamilName(e.target.value)}
            />
            <select onChange={(e) => setNewPosition(e.target.value)}>
              <option value="none">Vezife sec</option>
              <option value="admin">admin</option>
              <option value="manager">manager</option>
            </select>
            <button onClick={saveModalData}>Save</button>
            <div onClick={() => setEditModal(false)} className={style.closeBtn}>
              X
            </div>
          </div>
        </div>
      )} */}
      {editModal && <ModalUser editData={editData}/>}
    </div>
  );
};

export default AddUSer;
