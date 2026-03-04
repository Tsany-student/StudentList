import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStudent } from "./studentSlice";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateTodo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const todo = useSelector((state) =>
    state.todoList.find((t) => t.id === id)
  );

  const [name, setName] = useState("");

  useEffect(() => {
    if (todo) {
      setName(todo.name);
    }
  }, [todo]);

  if (!todo) {
    return <h2>Todo tidak ditemukan</h2>;
  }

  const handleUpdateTodo = () => {
    if (!name.trim()) return;

    dispatch(updateStudent({ id, name }));
    navigate("/");
  };

  return (
    <div>
      <h1>Edit Todo</h1>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleUpdateTodo}>Update</button>
    </div>
  );
}