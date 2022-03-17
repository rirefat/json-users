import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  },[])

  return (
    <div className="App">
      <h1>All Employe's Data</h1>
      {
        users.map(user => <User id={user.id} name={user.name} username={user.username} address={user.address.city} phone={user.phone} email={user.email} website={user.website}></User>)
      }
      
      
    </div>
  );
}

function User(props) {
  return(
    <div className='single-employee'>
      <p><strong>Employee's Id : </strong> {props.id}</p>
      <p><strong>Employee's Name :</strong> {props.name} </p>
      <p><strong>Employee's Username :</strong>{props.username} </p>
      <p><strong>Employee's Address :</strong>{props.address} </p>
      <p><strong>Employee's Phone :</strong>{props.phone} </p>
      <p><strong>Employee's Email :</strong>{props.email} </p>
      <p><strong>Employee's Website :</strong>{props.website} </p>
    </div>
  )
}

export default App;
