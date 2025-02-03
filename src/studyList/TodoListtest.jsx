import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
const TodoList = ({
  handleDelete,
  handleInputChange,
  setNewTodo,
  newTodo,
  todos,
  handlesUpdated,
  handleSubmit,
}) => {
  return (
    <div>
      <TodoForm
        handleInputChange={handleInputChange}
        setNewTodo={setNewTodo}
        newTodo={newTodo}
        handleSubmit={handleSubmit}
      />
      <TodoItem
        handleDelete={handleDelete}
        handlesUpdated={handlesUpdated}
        todos={todos}
      />
    </div>
  );
};

export default TodoList;
