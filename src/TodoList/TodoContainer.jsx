import { useState } from "react";
import TodoList from "./TodoList";
const SAMPLE_TODOS = [
  { id: 1, text: "Buy milk", completed: false },
  { id: 2, text: "Clean the house", completed: false },
  { id: 3, text: "Go for a run", completed: false },
  { id: 4, text: "Finish homework", completed: false },
  { id: 5, text: "Call mom", completed: false },
  { id: 6, text: "Buy groceries", completed: false },
  { id: 7, text: "Walk the dog", completed: false },
  { id: 8, text: "Read a book", completed: false },
  { id: 9, text: "Do laundry", completed: false },
  { id: 10, text: "Write code", completed: false },
];
const TodoContainer = () => {
  const [todos, setTodos] = useState(SAMPLE_TODOS);
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) {
      return;
    }
    setTodos([
      { id: crypto.randomUUID(), text: newTodo, completed: false },
      ...todos,
    ]);
    setNewTodo("");
  };
  const handleInputChange = (event) => setNewTodo(event.target.value);
  const handlesUpdated = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const handleDelete = (id) => {
    const deleted = setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
    return deleted;
  };

  return (
    <TodoList
      todos={todos}
      setNewTodo={setNewTodo}
      newTodo={newTodo}
      handleDelete={handleDelete}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      handlesUpdated={handlesUpdated}
    />
  );
};

export default TodoContainer;
