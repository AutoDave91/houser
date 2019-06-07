import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'redux'

import House from '../House/House'
import store from '../../store';

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            houses: []
            // store.getState().houses
        }
    }

    componentDidMount(){
        axios
            .get('/api/houses')
            .then(response=>{
                this.setState({houses: response.data})
                console.log('Dashboard get request successful!')
            })
            .catch(()=>{
                console.log('Dashboard get request failed...')
            })
    }
    deleteHouse(){
        console.log("placeholder")
    }

    render(){
        let {houses} = this.state;
        let mapped = houses.map((house, i) =>{
            return(
            <House key={i} id={house.house_id}
            name={house.name} address={house.address}
            city={house.city} state={house.state}
            zip={house.zip} deleteHouse={this.deleteHouse}/>
            )
        })
        
        return(
            <main>
                <header className='Dashboard-header'>
                    <h1>Dashboard</h1>
                    <button><Link to='/wizard'>Add New Property</Link></button>
                </header>
                <h1>Home Listings</h1>
                <section className='listing'>
                    {mapped}
                </section>
            </main>
        )
    }
}

export default Dashboard 