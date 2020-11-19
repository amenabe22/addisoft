import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
// To use routing functionalities
import { Link } from 'react-router-dom';
import '../index.css';
import EmployeeService from './Services';
import styled from 'styled-components';
var divStyle = {
    margin: '8% 8%',
};

const CoreTable = styled.h3``;

class ListEmployee extends Component {

    constructor(props) {
        super(props);
        this.employeeService = new EmployeeService();
        this.state = {
            employees: []
        }
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    componentDidMount = () => {
        this.getEmployeeList();
    }

    // To get all the employees
    getEmployeeList() {
        axios.get('http://127.0.0.1:4000/employees')
            .then((response) => {
                console.log(response);
                this.setState({
                    employees: response.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    // To delete any employee
    deleteEmployee(empid) {
        this.employeeService.deleteEmployee(empid);
        this.getEmployeeList();
    }

    render() {
        const { employees } = this.state;
        return (
            <div style={divStyle}>
                <CoreTable>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Date of birth</th>
                                <th>Gender</th>
                                <th>Salary</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employees && employees.map((employee, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{i}</td>
                                            <td>{employee.name}</td>
                                            <td>{employee.dob}</td>
                                            <td>{employee.gender}</td>
                                            <td>{employee.salary}</td>
                                            <td>
                                                <Link to={"editemployee/" + employee._id} className="btn btn-primary">Edit</Link>
                                            </td>
                                            <td>
                                                <Button onClick={() => this.deleteEmployee(employee._id)} bsStyle="danger" >Delete</Button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>

                </CoreTable>
            </div>
        );
    }
}

export default ListEmployee;
