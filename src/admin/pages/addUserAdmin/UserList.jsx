import React from 'react'
import { useEffect,useState } from 'react';
import { Button } from '@mui/material';
import { useDispatch} from "react-redux";
import { userEdit } from '../../../stores/editUser';
import ModalUser from './ModalUser/ModalUser';

const UserList = ({handleDelete}) => {

    const [users, setUsers] = useState([]);
    const [show, setShow] = useState(false);
    const dispatch = useDispatch()

    useEffect(() => {
        fetch("http://localhost:3001/users")
          .then((res) => res.json())
          .then((res) => setUsers(res));
      }, []);

      const handleEdit = (u) => {
        setShow(true)
       dispatch(userEdit(u))
       console.log(u)
      }

  return (
    <div>
         <table border='1' className="table table-bordered " style={{width:"40%",marginTop:"20px"}}>
              <thead className="bg-light text-black">
                <tr>
                  <td>Ad</td>
                  <td>E-poçt</td>
                  <td>Status</td>
                  <td>Duzelisler</td>
                </tr>
              </thead>
              <tbody>
                    {
                      users.map(u => <tr key={u.id}>
                        <td>{u.name}</td>
                        <td>{u.email}</td>
                        <td>{u.position}</td>
                        <td>
                        <Button
                          disabled={u.name == "Yamil" && u.position == "admin"}
                          onClick={() => handleDelete(u)}
                          variant="contained"
                          color="error"
                        >
                          Sil
                        </Button>
                        <Button
                          onClick={() => handleEdit(u)}
                          disabled={u.name == "Yamil" && u.position == "admin"}
                          className=""
                          variant="contained"
                        >
                          Redakte et
                        </Button>
                        </td>
                      </tr>)
                    }
              </tbody>
         </table>
         {show?<ModalUser setShow={setShow}/>:""}
    </div>
  )
}

export default UserList