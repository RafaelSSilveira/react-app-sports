import React from 'react';
import { BrowserRouter as Router, Route, Redirect, } from "react-router-dom";
import NavBar from '../components/NavBar';
import Navigation from '../components/Navigation';
import Dashboard from './Dashboard/Dashboard';
import Register from './Register/Register';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function App() {
    return (
        <div className="App">
            <NavBar></NavBar>
            <Router>
                <Navigation>
                    <Route exact path="/" render={() => (
                        <Redirect to="/user" />
                    )} />
                    <Route path="/user" exact component={Dashboard} />
                    <Route path="/user/new" exact component={Register} />
                </Navigation>
            </Router>
        </div>
    );
}

export default App;
