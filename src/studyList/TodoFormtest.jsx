const TodoForm = ({ handleInputChange, newTodo, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={newTodo} onChange={handleInputChange}></input>
      <button type="submit">추가</button>
    </form>
  );
};

export default TodoForm;
