import { Route, Switch } from "wouter"
import Login from "@views/Login"
import Register from "@views/Register"


function App() {
  return (
    <Switch>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
    </Switch>
  )
}

export default App