import React, { Component } from 'react';

export default class Button extends Component {
    render() {
        return (
            <div className="form-group">
                <button
                    id={this.props.id}
                    type={this.props.type}
                    className={this.props.className}
                    onClick={this.props.onClick}
                >{this.props.text}</button>
            </div>
        )
    }
}
