import { useSelector, useDispatch } from "react-redux";
import { login } from "../../../stores/auth";
import { logout } from "../../../stores/auth";
import { useState, useEffect } from "react";

const Header = () => {
  // const [users,setUsers] = useState({})

  const [users, setUsers] = useState([]);
  const [user,setUser] = useState({})
  const [userPos,setuserPos] = useState(false)

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then((res) => setUsers(res));
  }, []);

  const loginHandle = (user) => {
    setUser(user)
    setuserPos(true)
  };

  const logoutHandle = () => {};

  // const {user} = useSelector(state => state.auth)

  // const dispatch = useDispatch()

  // const loginHandle = (user) => {
  //   dispatch(login(user))
  // };

  // const logoutHandle = () => {
  //   dispatch(logout(false));
  // };

  return (
    <div>
      <h2>Logo</h2>
      {/* {users && (
        <nav>
          <button
            onClick={() => loginHandle({ id: 1, username: "Yamil" })}
          >
            Yamil(admin)
          </button>
          <button onClick={() => loginHandle({ id: 2, username: "Elcan" })}>
            Elcan(user)
          </button>
        </nav>
      )} */}
      {/* {!users && (
        <nav>
          Welcome ,{}
          <button onClick={logoutHandle}>Exit</button>
        </nav>
      )} */}
      {users.map((user) => (
        <button onClick={() => loginHandle(user)} key={user.id}>
          {user.name}
        </button>
      ))}
    </div>
  );
};

export default Header;
