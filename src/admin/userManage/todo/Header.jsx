import { useSelector,useDispatch } from "react-redux";
import { login } from "../../../stores/auth";
import { logout } from "../../../stores/auth";
import { useState } from "react";

const Header = () => {
  const [users,setUsers] = useState({})

  const {user} = useSelector(state => state.auth)

  const dispatch = useDispatch() 

  const loginHandle = (user) => {
    dispatch(login(user))
  };

  const logoutHandle = () => {
    dispatch(logout(false));
  };

  return (
    <div>
      <h2>Logo</h2>
      {!user && (
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
      )}
      {user && (
        <nav>
          Welcome ,{user.username}
          <button onClick={logoutHandle}>Exit</button>
        </nav>
      )}
    </div>
  );
};

export default Header;
