/* eslint-disable react/no-direct-mutation-state */

import axios from 'axios';

class EmployeeService {

    deleteEmployee(id) {
        axios.get('http://127.0.0.1:4000/employees/deleteEmployee/' + id)
            .then(() => {
                console.log('Employee Deleted !!!')
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export default EmployeeService;
