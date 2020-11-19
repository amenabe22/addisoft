import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Our all component files
import ListEmployee from '../Components/ListEmployee';
import AddEmployee from '../Components/AddEmployee';
import EditEmployee from '../Components/EditEmployee';
import Home from '../Home'
import styled from 'styled-components';

const CoreStyle = styled.h1`
background: #eee
`

class Main extends Component {

    render() {
        return (
            <CoreStyle>
                <main>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/list' component={ListEmployee} />
                        <Route path='/addemployee' component={AddEmployee} />
                        <Route path='/editemployee/:id' component={EditEmployee} />
                    </Switch>
                </main>

            </CoreStyle>
        );
    }
}

export default Main;
