import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function App(){
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("https://api.github.com/users")
    .then(responce => responce.json())
    .then(setData);
    console.log(data)
  }, [])

  if(data){
    return (
      <div>
        <ul>
          {data.map((user)=>(
              <li key={user.id}>{user.login}</li>
            ))}
        </ul>
        <button onClick={() => setData([])}>Remove Data</button>
      </div>      
    );
  }
  return "No Users"
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  ,document.getElementById('root')
);
