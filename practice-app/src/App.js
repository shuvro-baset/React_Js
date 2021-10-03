
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,  Switch,  Route,  Link,  useParams} from "react-router-dom";
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
    <Router>
      <Header></Header>
        <Switch>
          <Route>

          </Route>
        </Switch>
    </Router>
      
    </div>
  );
}

export default App;
