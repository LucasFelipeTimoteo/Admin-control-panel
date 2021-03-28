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


export default function Routes() {
  return (
    <Router>
      <Header />
      
      <Switch>
        <Route exact path="/user-list">
          <Home />
        </Route>
        <Route path="/add-user">
          <AddUser />
        </Route>

        <Redirect from="*" to="/user-list" />
      </Switch>
    </Router>
  )
}
