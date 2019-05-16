import React, { Component } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Radio from './Radio'
import Checkbox from './Checkbox';
import ApiService from '../../services/api.service';
import RideInGroupMock from '../../services/mocks/rideInGroup';
import DaysOfWeek from '../../services/mocks/dayOfWeek';
import RegisterHeader from './RegisterHeader';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rideInGroupOptions: RideInGroupMock.labels,
            daysOfWeekOptions: DaysOfWeek.labels,
            username: '',
            name: '',
            email: '',
            city: '',
            rideInGroup: '',
            daysOfWeek: []
        }
    }

    formSubmit = (event) => {
        event.preventDefault();
        this.saveUser();
    }
    saveUser = async () => {
        let { username, name, email, city, rideInGroup, daysOfWeek } = this.state;
        let response = await ApiService.saveUser(name, username, email, city, rideInGroup, daysOfWeek);
        if (response) {
            this.props.history.push('/user')
        }
    }

    onNameChange = (event) => {
        this.setState({ name: event.target.value });
    }

    onUsernameChange = (event) => {
        this.setState({ username: event.target.value });
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value });
    }

    onCityChange = (event) => {
        this.setState({ city: event.target.value });
    }

    onRideInGroupChange = (event) => {
        this.setState({ rideInGroup: event.target.value });
    }

    clearInputs = () => {
        this.setState({
            name: '',
            username: '',
            email: '',
            city: '',
            rideInGroup: '',
            daysOfWeek: []
        })
    }

    onDaysOfWeekChange = (event) => {
        let { checked, value } = event.target;
        let { daysOfWeek } = this.state;

        if (checked === true) {
            daysOfWeek = [
                ...daysOfWeek,
                value
            ]
            this.setState({
                daysOfWeek
            });
        } else {
            daysOfWeek = daysOfWeek.filter(el => el !== value);
            this.setState({ daysOfWeek });
        }
    }

    render() {
        return (
            <div className="register">
                <RegisterHeader></RegisterHeader>
                <form onSubmit={this.formSubmit}>
                    <div className="container">
                        <hr></hr>
                        <div className="form-row">
                            <Input id="username" type="username" placeholder="" label="Username" onChange={this.onUsernameChange} value={this.state.username} required={true} />
                            <Input id="city" type="text" placeholder="" label="City" onChange={this.onCityChange} value={this.state.city} required={true} />
                        </div>

                        <div className="form-row">
                            <Input id="name" type="text" placeholder="" label="Name" onChange={this.onNameChange} value={this.state.name} required={true} />
                            <Radio onChange={this.onRideInGroupChange}></Radio>
                        </div>

                        <div className="form-row">
                            <Input id="email" type="email" placeholder="" label="E-mail" onChange={this.onEmailChange} value={this.state.email} required={true} />
                            <Checkbox onChange={this.onDaysOfWeekChange}></Checkbox>
                        </div>
                        <div className="form-row btn-register">
                            <Button id='btn-salvar' text='Save' type="submit" className="btn btn-save"></Button>
                            <Button id='btn-salvar' text='Discard' type="button" className="btn btn-cancel" onClick={this.clearInputs}></Button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}