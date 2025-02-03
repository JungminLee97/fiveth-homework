const TodoItem = ({ todos, handleDelete, handlesUpdated }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.text}
          <button
            onClick={() => handlesUpdated(todo.id)}
            style={{ width: 60, height: 20 }}
          >
            {todo.completed ? "완료" : "미완료"}
          </button>
          <button
            onClick={() => {
              handleDelete(todo.id);
            }}
          >
            삭제
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoItem;
