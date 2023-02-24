
import React, { FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from './reducer/rootReducer';
import { User, addUser } from './pages/users';
import "./App.css";

const App: React.FC = () => {
   const users = useSelector<ReducerType, User[]>(state=> state.users);
  const dispatch = useDispatch();
  const [ name, setName ] = useState('');
  
  const handleChangeName = (e: any) => {
    setName(e.target.value);
  }
  
  const handleAddUser = (e:FormEvent) => {
    e.preventDefault();
    dispatch(addUser({ name } as User));
    setName('');
  }
  return (
    <div className="App">
      <header className="App-header">JunnyTalk WEB Front-End</header>
      <div>
         <form onSubmit={handleAddUser}>
        <input type='text' value={name} onChange={handleChangeName} />
        <button type='submit'>Add User</button>
      </form>
      
      {users.map(user=> (
        <div key={user.id}>{user.name}</div>
      ))}
      </div>
    </div>
  );
}

export default App;
