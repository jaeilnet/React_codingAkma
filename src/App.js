import Header from "./component/Header"
import DayList from "./component/DayList"
import Day from "./component/Day"
import CreateWord from "./component/CreateWord"
import CreateDay from "./component/CreateDay"
import Eempty from "./component/Empty"
import { BrowserRouter, Route, Switch } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <DayList />
          </Route>
          <Route path="/day/:day">
            <Day />
          </Route>
          <Route path="/create_word">
            <CreateWord />
          </Route>
          <Route path="/create_day">
            <CreateDay />
          </Route>
          <Route>
            <Eempty />
          </Route>
        </Switch>
      </div>  
    </BrowserRouter>
  )
}

export default App;
