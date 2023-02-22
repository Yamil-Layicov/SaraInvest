import React from "react";
import { useState,useEffect } from "react";
import { nanoid } from "nanoid";

const AddUSer = () => {

  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPostition] = useState("");

  useEffect(() => {
      fetch("http://localhost:3001/users")
      .then(res => res.json())
      .then(res => setUsers(res))
  },[])

  const addNewUser = (e) => {
    e.preventDefault();
    const newUser = {
      id: nanoid(),
      name,
      email,
      position,
    };

    fetch("http://localhost:3001/users",{
      method:"POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newUser),
    })
    setName('');
    setEmail('');
    setPostition('');
    window.location.reload();
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
          <option value='none'>Vezife sec</option>
          <option value="admin">admin</option>
          <option value="manager">manager</option>
        </select> 
        <br />
        <button>Add</button>
      </form>
      {users.map((u) => (
        <div style={{borderBottom:"1px solid white"}} key={u.id}>
          <div><span style={{color:"white"}}>Name</span>:{u.name}</div>
          <div><span style={{color:"white"}}>Email</span>:{u.email}</div>
          <div><span style={{color:"white"}}>Position</span>:{u.position}</div>
          <button className="btn btn-danger">Sil</button>
          <button className="btn btn-primary">Redakte et</button>
        </div>
      ))}
    </div>
  );
};

export default AddUSer;
