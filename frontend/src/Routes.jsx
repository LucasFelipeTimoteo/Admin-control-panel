import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'

import Home from './pages/Home'
import AddUser from './pages/AddUser'
import Header from './components/Header'
import EditUser from './pages/EditUser'


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
        <Route path="/edit-user">
          <EditUser />
        </Route>

        <Redirect from="*" to="/users-list" />
      </Switch>
    </Router>
  )
}
