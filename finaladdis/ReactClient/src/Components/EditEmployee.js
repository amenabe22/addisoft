import React, { Component } from 'react';
import axios from 'axios';

const customStyle = {
    width: '300px',
    margin: '0 auto'
}

class EditEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            dob: '',
            gender: '',
            salary: ''
        }
    }

    componentDidMount = () => {
        this.getEmployeeById();
    }

    // To get employee based on ID
    getEmployeeById() {
        axios.get('http://127.0.0.1:4000/employees/editEmployee/' + this.props.match.params.id)
            .then((response) => {
                this.setState({
                    firstName: response.data.name,
                    lastName: response.data.dob,
                    email: response.data.gender,
                    phone: response.data.salary
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    // To update the record on submit
    handleSubmit = (event) => {
        event.preventDefault();
        const { name, dob, gender, salary } = this.state;
        axios.post('http://127.0.0.1:4000/employees/updateEmployee/' + this.props.match.params.id, {
            firstName: name,
            lastName: dob,
            email: gender,
            phone: salary,
        })
            .then((response) => {
                console.log(response);
                this.props.history.push('/');
            })
            .catch((error) => {
                console.log(error);
            });

    }

    render() {
        return (
            <div className="container">
                <form style={customStyle} onSubmit={this.handleSubmit}>
                    <label>
                        Name
 <input
                            name="name"
                            type="text"
                            value={this.state.name}
                            onChange={this.handleChange}
                            className="form-control"
                        />
                    </label>
                    <br />
                    <label>
                        Date of Birth
 <input
                            name="dob"
                            type="text"
                            value={this.state.dob}
                            onChange={this.handleChange}
                            className="form-control"
                        />
                    </label>
                    <br />
                    <label>
                        Gender
 <input
                            name="gender"
                            type="text"
                            value={this.state.gender}
                            onChange={this.handleChange}
                            className="form-control"
                        />
                    </label>
                    <br />
                    <label>
                        Salary
 <input
                            name="salary"
                            type="number"
                            value={this.state.salary}
                            onChange={this.handleChange}
                            className="form-control"
                        />
                    </label>
                    <br />
                    <input
                        type="submit"
                        value="submit"
                        className="btn btn-primary"
                    />
                </form>
            </div>
        );
    }
}

export default EditEmployee;
