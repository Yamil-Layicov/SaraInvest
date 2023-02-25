import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from "./AdminLogin.module.css";
import { useDispatch, useSelector } from "react-redux";
import { loginPosition } from "../../stores/loginUser";

const AdminLogin = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const userRef = useRef();
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [login, setLogin] = useState("");

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
    const loginUsers = login.map((l) => l.name);
    const loginEmails = login.map((l) => l.email);


    // if(user == loginUsers[0] && email == loginEmails[0]){
    //     navigate('/admin')
    //     dispatch(loginPosition(login[0]))
    //     window.location.reload();
    // }if(user == loginUsers[1]){
    //     navigate('/admin')
    //     dispatch(loginPosition(login[1]))
    //     window.location.reload();
    // }
    // if(user == loginUsers[2]){
    //     navigate('/admin')
    //     dispatch(loginPosition(login[2]))
    //     window.location.reload();
    // }
    // if(user == loginUsers[3]){
    //     navigate('/admin')
    //     dispatch(loginPosition(loginUsers[3]))
    //     window.location.reload();
    // }
    //   const data=  loginUsers.filter(u=>u.name===user);
    //    console.log(data);
    // console.log(loginUsers[0]);
//   console.log(user);
    
const data=login.find(u=>u.name === user);
    if (data) {
        console.log(data);
        dispatch(loginPosition(data))
        navigate('/admin')
    }
    else{
        console.log("rerre");
    }
  }

  return (
    <div>
      <section className={style.section}>
        <p className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
          {errMsg}
        </p>
        <h1>Daxil ol</h1>
        <form className={style.content} onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
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
    </div>
  );
};

export default AdminLogin;
