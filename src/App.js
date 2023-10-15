import './App.css';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Nav from './client/components/Nav';
import Home from './client/pages/Home';
import Community from './client/pages/community';
import Weather from './client/pages/weather';
import Crops from './client/pages/crops';

function App() {
  return (
    <div className="App">
      <Nav />

      <Switch>
                <Route exact path={["/", "/home"]} component={Home}></Route>

                <Route path="/community" render={()=>
                    <Community />}>
                </Route>

                <Route path="/weather" render={()=>
                    <Weather />}>
                </Route>

                <Route path="/crops" render={()=>
                    <Crops />}>
                </Route>
      </Switch> 
    </div>
  );
}

export default App;
