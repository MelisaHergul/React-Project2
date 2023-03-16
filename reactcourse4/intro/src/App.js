// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/users";

export default function App() {
  const [users, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);
 
  if (!users) return null;
  return (
    <div class="users">
    {
    users.map(data =>
      <p>{data.name},{data.email}</p>
      )
    }

    </div>
    );
} 






















