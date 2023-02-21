import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { deleteTodo } from "../../../stores/todo";

const TodoItem = ({ todo,setModal }) => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.auth)
  

  const deleteHandle = () => {
    dispatch(deleteTodo(todo.id));
  };

  const editHandle = () => {
    setModal({
      name: "edit-todo",
      data: todo,
    });
  };

  return (
    <div>
      <span style={{ textDecoration: todo.done ? "line-through" : false }}>
        {todo.title}
      </span>
     {user && 
     <>
        <button disabled={user.id === 2} onClick={editHandle}>
        Edit
      </button>
      <button disabled={user.id === 2} onClick={deleteHandle}>
        Delete
      </button>
     </>}
    </div>
  );
};

export default TodoItem;
