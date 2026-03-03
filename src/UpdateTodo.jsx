import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodo, updateTodo } from "./todoListSlice";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateTodo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const todo = useSelector((state) =>
    getTodo(state.todoList, Number(id))
  );

  const [name, setName] = useState(todo?.name || "");

  const handleUpdateTodo = () => {
    if (!name.trim()) return;

    dispatch(updateTodo({ id: todo.id, name }));
    navigate("/todolist");
  };

  if (!todo) {
    return <p>Todo not found</p>;
  }

  return (
    <div>
      <h1>Edit Todo</h1>

      <input
        type="text"
        value={name}
        placeholder="Enter todo name"
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleUpdateTodo}>Update</button>
    </div>
  );
}