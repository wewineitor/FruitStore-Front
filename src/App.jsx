import { Route, Switch } from "wouter"
import Login from "@views/Login"
import Register from "@views/Register"
import Store from "@views/Store"
import Home from "@views/Home"


function App() {
  return (
    <Switch>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/store" component={Store}/>
      <Route path="/home" component={Home}/>
    </Switch>
  )
}

export default App