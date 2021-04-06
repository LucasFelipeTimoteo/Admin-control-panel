import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import Header from './components/Header'
import AddAndEditUser from './pages/AddAndEditUser'
import AdminPanel from './pages/AdminPanel'



export default function Routes() {
  return (
    <Router>
      <Header />
      
      <Switch>
        <Route exact path="/users-list">
          <AdminPanel />
        </Route>
        <Route path="/add-and-edit-user">
          <AddAndEditUser />
        </Route>

        <Redirect from="*" to="/users-list" />
      </Switch>
    </Router>
  )
}
