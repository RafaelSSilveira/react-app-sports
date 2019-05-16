import React, { Component } from 'react';
import ApiService from '../../services/api.service';

export default class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            daysOfWeek: []
        }
    }

    componentDidMount() {
        let daysOfWeek = ApiService.getAllDayOfWeek();
        daysOfWeek = daysOfWeek.filter(el => el.multiple === true); //Get only week days

        this.setState({
            daysOfWeek
        })
    }

    renderCheckbox = (el, index) => {
        return (<div key={index} className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" value={el.description} onChange={this.props.onChange}></input>
            <label className="form-check-label">{el.description}</label>
        </div>);
    }

    render() {
        return (
            <div className="col">
                <div className="form-group col-sm">
                    <label>Days of weak</label>
                    <div className="form-row">
                        {
                            this.state.daysOfWeek.map(this.renderCheckbox)
                        }
                    </div>
                </div>
            </div>
        )
    }
}