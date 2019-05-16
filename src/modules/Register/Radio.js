import React, { Component } from 'react';
import ApiService from '../../services/api.service';

export default class Radio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rideInGroup: []
        }
    }

    componentDidMount() {
        let rideInGroup = ApiService.getAllRideInGroup();
        this.setState({
            rideInGroup
        })
    }

    renderRadio = (el, index) => {
        return (
            <label key={index} className="label-radio"><input type="radio" value={el} name="rideInGroup" onChange={this.props.onChange} />&nbsp;{el}&nbsp;</label>
        );
    }

    render() {
        return (
            <div className="col radio">
                <div className="form-group col-sm">
                    <label >Ride in group?</label>
                    <div className="form-row">
                        <label className="radio-inline">
                            {
                                this.state.rideInGroup.map(this.renderRadio)
                            }
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}