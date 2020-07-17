import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './Container/Form/Login/Login';
import Dashboard from './Container/Dashboard/Dashboard';
import UserList from './Container/UserList/UserList';

function App() {
  return (
    <div className="App">
      <Router>
        <main className="container-fluid ml-0 px-0">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/userlist" component={UserList} />
          </Switch>
        </main>
      </Router>

      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
