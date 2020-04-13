import React, { useReducer } from 'react';
import './App.css';
import { initialState, reducer} from './Reducers/reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initailState)
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
    <h1>Todo</h1>
    </div>
  );
}

export default App;
