import React, { Component } from 'react';

export default class DashboardHeader extends Component {
    render() {
        return (
            <div className="row justify-content-start header-dashboard">
                <div>
                    <div className="row">
                        <div className="col-3 teste">
                            <h1><i className="fas fa-puzzle-piece icon-default"></i></h1>
                        </div>
                        <div className="col-9 teste2">
                            <p>Sport Type</p>
                            <h2>Cycling</h2>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row">
                        <div className="col-3 teste">
                            <h1><i className="fas fa-trophy icon-default"></i></h1>
                        </div>
                        <div className="col-9 teste2">
                            <p>Mode</p>
                            <h2>Advanced</h2>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row">
                        <div className="col-3 teste">
                            <h1><i className="fas fa-map-signs icon-default"></i></h1>
                        </div>
                        <div className="col-9 teste2">
                            <p>Route</p>
                            <h2>30 miles</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}