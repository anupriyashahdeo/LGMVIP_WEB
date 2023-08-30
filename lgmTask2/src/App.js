import React,{useState} from "react";
import './App.css';

function App() {
  const [users,setUsers]=useState([]);
  const loaduser=async()=>{
    const response=await fetch('https://reqres.in/api/users?page=1');
    const jsonResponse=await response.json();
    setUsers(jsonResponse.data);
  }
  return (
   <div>
      <div className="header">
        <h1 className="head-title">LGM TASK2</h1>
        <button className="head-btn" onClick={loaduser}>Get User</button>
</div>
<div className="users-space">
  {
    users.map(({id,email,first_name,last_name,avatar})=>(
      <div className="card" style={{width:"15rem"}}>
        <div className="main">
          <img className="card-img-top" src={avatar} alt="card-image"/>
          <div className="card-body">
            <h5 className="card-id" key={id}>id={id}</h5>
            <h5 className="card-title" key={id}>{`${first_name} ${last_name}`}</h5>
            <p className="card-text" key={id}>{email}
            </p>

          </div>
        </div>
      </div>
    ))
  }
</div>

   </div>
  );
}

export default App;
