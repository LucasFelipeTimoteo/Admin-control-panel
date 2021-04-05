import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import Header from './components/Header'
import AddUser from './pages/AddUser'
import Home from './pages/Home'



export default function Routes() {
  return (
    <Router>
      <Header />
      
      <Switch>
        <Route exact path="/users-list">
          <Home />
        </Route>
        <Route path="/add-user">
          <AddUser />
        </Route>

        <Redirect from="*" to="/users-list" />
      </Switch>
    </Router>
  )
}
