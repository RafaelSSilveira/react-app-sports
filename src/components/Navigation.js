import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

export default class Navigation extends Component {
    render() {
        return (
            <Router>
                <nav className="navbar navbar-expand-lg navigation">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item icon-default">
                                <i className="fas fa-home"></i>
                            </li>
                            <i className="fas fa-chevron-right"></i>
                            <li className="nav-item">
                                <Link to="/user">Dashboard</Link>
                            </li>
                            <i className="fas fa-chevron-right"></i>
                            <li className="nav-item">
                                <Link to="/user/new">Register</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                {this.props.children}
            </Router>
        )
    }
}
