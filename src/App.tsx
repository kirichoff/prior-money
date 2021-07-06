import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './pages/home/home'

function App() {
  return (
    <Router>
		<Route path="/" exact component={Home} />
	</Router>
  );
}

export default App;
