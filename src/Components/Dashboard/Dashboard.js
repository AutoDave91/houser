import React, {Component} from 'react';
import axios from 'axios';

import House from '../House/House'

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }


    render(){
        return(
            <main>
                <h1>Dashboard</h1>
                <House />
            </main>
        )
    }
}

export default Dashboard 