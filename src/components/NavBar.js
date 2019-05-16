import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light justify-content-between">
                <span className="navbar-brand mb-0 h1 justify-content-end">
                    <span className="navabar-icon icon-default"><i className="fas fa-question"></i></span>
                    Venturus Sports
                </span>
                <form className="form-inline">
                    <div className="btn-group">
                        <button type="button" className="btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="navbar-avatar">JS</span> Jason Bourne <i className="fas fa-angle-down"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                            <button className="dropdown-item" type="button">Friends List</button>
                            <button className="dropdown-item" type="button">Saved Items</button>
                            <button className="dropdown-item" type="button">Notifications</button>
                            <button className="dropdown-item" type="button">User Preference</button>
                            <div className="dropdown-divider"></div>
                            <button className="dropdown-item" type="button">Log out</button>
                        </div>
                    </div>
                </form>
            </nav>
        )
    }
}

