import TodoRowItem from "./TodoRowItem";

function TodoTable(tProps) {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Description</th>
          <th scope="col">Assigned</th>
        </tr>
      </thead>
      <tbody>
        {tProps.todos.map((todo) => (
          <TodoRowItem
            key = {todo.rowNumber}
            rowNumber={todo.rowNumber}
            rowDescription={todo.rowDescription}
            rowAssigned={todo.rowAssigned}
            deleteTodo={tProps.deleteTodo}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TodoTable;
