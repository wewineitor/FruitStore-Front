import { Route, Switch } from "wouter"
import Login from "./views/Login/Login"


function App() {
  return (
    <Switch>
      <Route path="/login" component={Login}/>
    </Switch>
  )
}

export default App