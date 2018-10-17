import React, { Component } from "react";
import API from "../../Utils/API";
import { ListGroupItem, ListGroup } from 'react-bootstrap';
import './data.css';
import Chart2 from "../../Chart/Chart2";


class Records extends Component {

    state = {
        records: {},
        actity: "",
        time: "",
        date: "",
        notes: ""
    }

    componentDidMount() {

        this.setState({ profile: {} });
        const { userProfile, getProfile } = this.props.auth;
        if (!userProfile) {
            getProfile((err, profile) => {
                this.setState({ profile });
            });
        } else {
            this.setState({ profile: userProfile });
            console.log(userProfile.sub);
            localStorage.setItem("user", userProfile.sub);

        }
        this.loadRecords();
    }


    loadRecords = () => {

        const id = localStorage.getItem('user');



        API.getData(id)

            .then(res => {
                console.log(id);
                this.setState({ records: res.data })
                console.log(res.data);
            })
            .catch(err => console.log(err));


    }



    render() {


        //const tokenid = localStorage.getItem('id_token');

        return (
            <container>
                <div className ="data-display">
                    <jumbotron>
                        <h1>Fitness Records</h1>
                    </jumbotron>
                    <div className="dataDisplayContainer">
                        {this.state.records.length ? (
                            <div>
                                {this.state.records.map(record => (
                                    <ListGroupItem key={record.__id}>
                                        <ListGroup>
                                            <ListGroupItem header="Date">
                                                {record.date}
                                            </ListGroupItem>
                                            <ListGroupItem header="Workout">
                                                {record.activity}
                                            </ListGroupItem>
                                            <ListGroupItem header="Workout Duration">
                                                {record.time}
                                            </ListGroupItem>
                                            <ListGroupItem header="Notes">
                                                {record.notes}
                                            </ListGroupItem>
                                        </ListGroup>
                                    </ListGroupItem>
                                ))}
                            </div>
                        )
                            : (
                                <div>
                                <h3>No Results to Display</h3>
                                <Chart2>
                                </Chart2>
                                </div>
                            )}
                    </div>
                    <div>
                    </div>
                </div>

            </container>
        )
    }


}

export default Records;