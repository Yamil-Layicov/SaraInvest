import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./login.module.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {

  const notifyError = () => toast('Ad veya parol duzgun deyil', {
    position: "top-center",
    autoClose: 2000,
    theme: "colored",
    type:"error"
    });

  

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name == "yamil" || password == "12345") {
        navigate("/selector");
    }
     else {
        notifyError();
    }
  };

  return (
    <>
      <div className={style.loginContent}>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="ad"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="password"
            placeholder="sifre"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className={style.loginBtn}>
            Daxil ol
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default LoginPage;
