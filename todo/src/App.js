import React, {useReducer} from 'react';
import AddToDoForm from './components/AddToDoForm';
import ToDoList from './components/ToDoList'
import { toDoReducer } from './reducers/toDoReducer';

const todos = [
      {item: 'Learn about reducers',
    completed: false,
    id: 3892987589}
  ]



function App() {

  const [state, dispatch] = useReducer(toDoReducer, todos)

  const handleClear = e => {
    dispatch({ type: 'CLEAR_COMPLETED'})
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Things to Learn</h1>
      </header>
    <AddToDoForm
      dispatch = {dispatch}
    />
    
    <ToDoList
    dispatch = {dispatch}
    todos={state}
    />
    <button onClick={handleClear}>Clear Completed</button>
    </div>
  );
}

export default App;