import './App.css';
import {BrowserRouter as Router, Link, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import AppRoutes from "./components/AppRoutes";

function App() {
  return (
    <div className="App">
        <Router>
          <nav>
            <Link to="/home">Home</Link>
            <Link to="/posts">Posts</Link>
          </nav>
          <AppRoutes/>
        </Router>
    </div>
  );
}

export default App;
