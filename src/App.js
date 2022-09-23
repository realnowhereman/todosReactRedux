import { useState } from 'react';
import { useDispatch } from 'react-redux';
import TodoList from './components/TodoList';
import InputField from './components/InputField';
import { addTodo } from './redux/todo/todoSlice';
import { removeTodo } from './redux/todo/todoSlice';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({text}))
    setText('')
  }

  return (
    <div className='App'>
      <a href="https://youtu.be/C0fBnil_Im4" target={'_blank'}>Tutorial</a>

      <h2>todos</h2>
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />

      <TodoList />
    </div>
  );
}

export default App;
