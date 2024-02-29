import { Route, Switch } from "wouter"
import Login from "@views/Login"
import Register from "@views/Register"
import Store from "@views/Store"


function App() {
  return (
    <Switch>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/store" component={Store}/>
    </Switch>
  )
}

export default App