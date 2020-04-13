import React, { useReducer } from 'react';
import './App.css';
import { initialState, reducer} from './Reducers/reducer';
import { TodoForm } from './components/todoForm';
import { TodoList } from './components/todoList';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  // console.log(state)
  const addTodo = (input) => {
    const newTodo = {
      todo: input,
      completed: false,
      id: Math.random()
    }
    dispatch({type: 'ADD_TODO', payload: newTodo})
  }

  const handleComplete = (id) => {
    dispatch({type:'COMPLETED_TODO', payload: id})
  }

  const clearCompleted = () => {
    dispatch({type: 'CLEAR_COMPLETED_TODO'})
  }

  return (
    <div className="App">
        <h1>To Do</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList state={state} handleComplete={handleComplete} />
        <button onClick={(e) => {
            e.preventDefault()
            clearCompleted()
        }}>Clear</button>
    </div>
  );
}

export default App;
