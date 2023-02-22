import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = ({setModal}) => {

  const {todos} = useSelector((state) => state.todo)

  return (
    <>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          setModal={setModal}
        />
      ))}
    </>
  );
};

export default TodoList;
