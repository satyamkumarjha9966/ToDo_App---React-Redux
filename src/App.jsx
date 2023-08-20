import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo/AddTodo";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {
  addTodo,
  editTodo,
  deleteTodo,
  todoFinished,
} from "./actions/todoActions";

function App() {
  const dispatch = useDispatch();
  const actions = bindActionCreators(
    { addTodo, editTodo, deleteTodo, todoFinished },
    dispatch
  );

  return (
    <>
      <AddTodo addTodo={actions.addTodo} />
      <TodoList
        deleteTodo={actions.deleteTodo}
        editTodo={actions.editTodo}
        todoFinished={actions.todoFinished}
      />
    </>
  );
}

export default App;
