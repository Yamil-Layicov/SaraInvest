import React from 'react'
import {nanoid} from 'nanoid'
import {useState} from 'react'
import { addTodo } from '../../../stores/todo'
import {useDispatch,useSelector} from 'react-redux'
 
const AddToDo = () => {

  const {user} = useSelector(state => state.auth)
  const dispatch = useDispatch();
  
  const [todo,setTodo] = useState('');

  const submitHandle = e => {
    e.preventDefault();
    dispatch(addTodo({
      title:todo,
      done:false,
      id:nanoid(),
      user:user.id
    }))
    setTodo('');
  }


  return (
    <div>
      <form onSubmit={submitHandle}>
        <input type="text" value={todo} onChange={e => setTodo(e.target.value)}/>
        <button type='submit' disabled={!todo || !user}>Add</button>
      </form>
    </div>
  ) 
}

export default AddToDo