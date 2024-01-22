import ItemList from "./components/ItemList";
import {Switch,Route} from "react-router-dom";



function App() {
  return (
    <div className="App">
  
        <Switch>
           
            <Route  path="/">
             <ItemList /> 
            </Route>
        </Switch>
  
    </div>
  );
}

export default App;