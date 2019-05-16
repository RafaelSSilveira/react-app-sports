import React, { Component } from 'react';
import ApiService from '../../services/api.service';
import Table from '../../components/Table';
import DashboardHeader from './DashboardHeader';
import { confirmAlert } from 'react-confirm-alert';

import 'react-confirm-alert/src/react-confirm-alert.css';

export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: '',
            users: [],
            defaultUsers: []
        }
        this.onChangeSearch = this.onChangeSearch.bind(this);
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers = async () => {
        try {
            let users = await ApiService.getUsers();
            this.setState({ users, defaultUsers: users });
        } catch (err) {
            console.error(err);
        }
    }

    confirmDelete = (userId) => {
        confirmAlert({
            title: 'Delete user',
            message: 'Do you want to delete this user?',
            buttons: [
                {
                    label: 'Deletar',
                    onClick: () => this.deleteUser(userId)
                },
                {
                    label: 'Cancel',
                    onClick: () => { }
                }
            ]
        });
    }

    deleteUser = (userId) => {
        let { users } = this.state;
        users = users.filter(el => el.id !== userId);
        this.setState({ users });
    }

    onChangeSearch = (event) => {
        let searchTerm = event.target.value;
        this.setState({ searchTerm });

        let { users, defaultUsers } = this.state;

        if (searchTerm) {
            let regex = new RegExp(searchTerm.toLowerCase());

            users = defaultUsers.filter(element => {
                return element.name.toLowerCase().match(regex) || element.username.toLowerCase().match(regex);
            });

        } else {
            users = defaultUsers
        }
        this.setState({ users });
    }

    render() {
        return (
            <div className="container-fluid">
                <DashboardHeader></DashboardHeader>
                <div className="container-fluid">
                    <div className="row justify-content-md-center">
                        <div className="col-md-1 col-sm-12">
                            <h1>Users</h1>
                        </div>
                        <div className="col-md-7 col-sm-12">
                            <hr></hr>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <input
                                className="form-control" type="search"
                                value={this.state.searchTerm}
                                onChange={this.onChangeSearch}
                                placeholder="Filter table content"
                                aria-label="Search"></input>
                        </div>
                    </div>
                    <Table
                        users={this.state.users}
                        onDelete={this.confirmDelete}
                    ></Table>
                </div>
            </div>
        )
    }
}
