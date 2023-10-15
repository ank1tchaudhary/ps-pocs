function TodoRowItem(trProps) {
  return (
    <tr onClick={() => trProps.deleteTodo(trProps.rowNumber)}>
      <th scope="row">{trProps.rowNumber}</th>
      <td>{trProps.rowDescription}</td>
      <td>{trProps.rowAssigned}</td>
    </tr>
  );
}

export default TodoRowItem;
