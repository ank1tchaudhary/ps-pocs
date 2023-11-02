import React from "react";

export const TodoRowItem : React.FC<{
  rowNumber :number,rowDescription : string,rowAssigned :string,deleteTodo : Function
}> = (trProps) =>{
  return (
    <tr onClick={() => trProps.deleteTodo(trProps.rowNumber)}>
      <th scope="row">{trProps.rowNumber}</th>
      <td>{trProps.rowDescription}</td>
      <td>{trProps.rowAssigned}</td>
    </tr>
  );
}

