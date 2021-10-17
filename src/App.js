import logo from './logo.svg';
import './App.css';
import img from './img/screen-16.jpg'

function App() {
  return (
   <body>
     <div className="container">
       <div className="child">
           <p>EMAIL</p>
           <input className="email"></input>
         <p>Password</p>
         <input type="password"></input>
         <button>LOG IN</button>
          </div>
     </div>
     <footer>
       2020
     </footer>
   </body> 
    
  );
}

export default App;
