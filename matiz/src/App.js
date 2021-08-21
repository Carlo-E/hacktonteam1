import './App.css';

import NavBar from "./Components/NavBar"
import Home from "./Pages/Home"
import {Switch, Route} from "react-router"

const App = () => {
  return (
    <div className="App">
      <main>
      <NavBar/>
      <Switch>
        <Route path={"/"} component={Home}/>
      </Switch>
      </main>
    </div>
  );
}

export default App;
