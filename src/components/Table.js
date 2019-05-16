import React, { Component } from 'react';
import Loading from './Loading';

export default class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rowindex: null
        }
    }

    onMouseEnterHandler(index) {
        this.setState({ rowindex: index });
    }

    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="col-xl-11 table-responsive">
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Username</th>
                                <th scope="col">Name</th>
                                <th scope="col">E-mail</th>
                                <th scope="col">City</th>
                                <th scope="col">Ride in group</th>
                                <th scope="col">Day of the week</th>
                                <th scope="col">Posts</th>
                                <th scope="col">Albums</th>
                                <th scope="col">Photos</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.users && this.props.users.map((item, index) => {
                                    return (
                                        <tr key={index} id={index} onMouseEnter={(event) => this.onMouseEnterHandler(index)}>
                                            <td>{item.username}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.address && item.address.city}</td>
                                            <td>{item.rideInGroup}</td>
                                            <td>{
                                                item.daysOfWeek ?
                                                    item.daysOfWeek.join(', ') :
                                                    null
                                            }</td>
                                            <td>{
                                                item.posts !== undefined ?
                                                    item.posts.length :
                                                    null
                                            }</td>
                                            <td>{
                                                item.albums !== undefined ?
                                                    item.albums.length :
                                                    null
                                            }</td>
                                            <td>{
                                                item.photos !== undefined ?
                                                    item.photos.length :
                                                    null
                                            }</td >
                                            {
                                                this.state.rowindex === index ?
                                                    <td>
                                                        <button className="btn btn-delete" onClick={(e) => this.props.onDelete(item.id)}>
                                                            <i className="fas fa-trash-alt icon-default"></i>
                                                        </button>
                                                    </td> : <td></td>
                                            }
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    {
                        this.props.users.length === 0 ? <Loading></Loading> : null
                    }
                </div>
            </div>
        )
    }
}

