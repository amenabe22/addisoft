import React, { Component } from 'react';
import axios from 'axios';

import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: green;
  border: 2px solid black;
  margin-top: 12px;
  margin-bottom: 50px;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
 
  &:hover {
    background-color: #000;
    color: white;
  }
`
    ;

const customStyle = {
    width: '300px',
    margin: '0 auto'
}


const FormTitle = styled.h1`
  font-size: .6em;
  text-align: start;
  color: palevioletred;
`;

const MainTxt = styled.h1`
font-size: .9em;
text-align: center;
padding-top: 30px;
`


class AddEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            dob: '',
            gender: '',
            salary: 0
        }
    }

    // When value changes of the fields
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    // To add new employee when user submits the form
    handleSubmit = (event) => {
        event.preventDefault();
        const { name, dob, gender, salary } = this.state;
        axios.post('http://127.0.0.1:4000/employees/addEmployee', {
            name: name,
            dob: dob,
            gender: gender,
            salary: salary,
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
                <MainTxt>Add New Employee Here</MainTxt>
                <form style={customStyle} onSubmit={this.handleSubmit}>
                    <label>
                        <FormTitle>Name</FormTitle>

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
                        <FormTitle>Date of Birth</FormTitle>
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
                        <FormTitle>Gender</FormTitle>
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
                        <FormTitle>Salary</FormTitle>

                        <input
                            name="salary"
                            type="number"
                            value={this.state.salary}
                            onChange={this.handleChange}
                            className="form-control"
                        />
                    </label>
                    <br />
                    {/* <input
                        type="submit"
                        value="submit"
                        className="btn btn-primary"
                    /> */}
                    <Button
                        type="submit"
                        value="submit"
                        className="btn btn-primary"

                    >I am a Button</Button>

                </form>
            </div>
        );
    }
}

export default AddEmployee;
