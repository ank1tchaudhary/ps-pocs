import { useState } from "react";
import "./App.css";
import TodoTable from "./components/TodoTable";
import NewTodoForm from "./components/NewTodoForm";

function App() {

  const [showAddTodo,setShowAddTodo] = useState(false);
  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: "Feed Dog", rowAssigned: "Ankit" },
    { rowNumber: 2, rowDescription: "Get Haircut", rowAssigned: "Ankit" },
    { rowNumber: 3, rowDescription: "Go Running", rowAssigned: "Ankit" },
    { rowNumber: 4, rowDescription: "cook dinner", rowAssigned: "Ankit"},
  ]);

  const addTodo = (desc,ass)=>{
    let rowNum = 0;
    if(todos.length > 0){
      rowNum = todos[todos.length-1].rowNumber+1;
    }else{
      rowNum = 1;
    }

    const newTodo = { rowNumber: rowNum, rowDescription: desc, rowAssigned: ass};
    setTodos(todo => [...todo, newTodo])

  };

  const deleteTodo = (todoId) => {
    setTodos(todos.filter(todo => todo.rowNumber !== todoId));
  }

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Todo's</div>
        <div className="card-body">
          {showAddTodo && <NewTodoForm addTodo = {addTodo}/>}
          <TodoTable todos={todos} deleteTodo={deleteTodo}/>
          <button onClick={() => setShowAddTodo(!showAddTodo)} className="btn btn-primary">{showAddTodo ? "Close Add Todo" : "Create Todo"}</button>
        </div>
      </div>
    </div>
  );
}

export default App;
