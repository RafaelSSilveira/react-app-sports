import React, { Component } from 'react';

export default class Input extends Component {
    render() {
        return (
            <div className="col-md-6 col-sm-12">
                <div className="form-group col-sm">
                    <label htmlFor={this.props.id}>{this.props.label}</label>
                    <input
                        aria-label={this.props.label}
                        type={this.props.type}
                        className="form-control"
                        id={this.props.id}
                        placeholder={this.props.placeholder}
                        onChange={this.props.onChange}
                        required={this.props.required}
                        value={this.props.value}>
                    </input>
                </div>
            </div>
        )
    }
}