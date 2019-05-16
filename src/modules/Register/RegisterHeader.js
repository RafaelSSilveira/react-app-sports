import React, { Component } from 'react';

export default class RegisterHeader extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-md-center">
                    <div className="col-md-2 com-sm-12">
                        <h1>Registration</h1>
                    </div>
                    <div className="col-md-10 col-sm-12">
                        <hr></hr>
                    </div>
                </div>

                <div className="row justify-content-md-center header-register">
                    <div className="col-md-4 col-sm-12">
                        <h3>Need help?</h3>
                        <div className="row ">
                            <div className="col-2">
                                <h1><i className="far fa-life-ring"></i></h1>
                            </div>
                            <div className="col-8">
                                <p>Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <h3>Why register?</h3>
                        <div className="row">
                            <div className="col-2">
                                <h1><i className="fas fa-heartbeat"></i></h1>
                            </div>
                            <div className="col-8">
                                <p>Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <h3>What people are saying...</h3>
                        <div className="row">
                            <div className="col-2">
                                <h1><i className="far fa-smile"></i></h1>
                            </div>
                            <div className="col-8">
                                <p>Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}