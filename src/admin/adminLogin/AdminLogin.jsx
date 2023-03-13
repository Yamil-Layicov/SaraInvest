import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from "./AdminLogin.module.css";
import { useDispatch } from "react-redux";
import { loginPosition } from "../../stores/loginUser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminLogin = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const userRef = useRef();
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [login, setLogin] = useState("");

  const notifyError = () => toast('Ad veya email duzgun deyil', {
    position: "top-center",
    autoClose: 2000,
    theme: "colored",
    type:"error"
    });

  useEffect(() => {
    userRef.current.focus();
    fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then((res) => setLogin(res));
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser("");
    setEmail("");

    const data = login.find((u) => u.name === user);
    if (data) {
      console.log(data);
      dispatch(loginPosition(data));
      navigate("/admin");
    } else {
      notifyError();
    }
  };

  return (
    <div>
      <section className={style.section}>
        <form className={style.content} onSubmit={handleSubmit}>
          <h1 style={{textAlign:"center"}}>Daxil ol</h1>
          <label htmlFor="username">Istifadeci adi:</label>
          <input
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />

          <label htmlFor="password">Email:</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <button>Daxil ol</button>
        </form>
      </section>
      <ToastContainer />
    </div>
  );
};

export default AdminLogin;
