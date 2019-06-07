import React, {Component} from 'react';
import axios from 'axios';

import House from '../House/House'

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            houses:[]
        }
    }

    componentDidMount(){
        axios.get('/api/houses')
            .then(res=>{
                this.setState({houses: res.data})
                console.log('Dashboard get request successful!')})
            .catch(()=> console.log('Dashboard get request failed...'))
    }
    deleteHouse(){
        console.log("placeholder")
    }

    render(){
        let {houses} = this.state;
        let mapped = houses.map(house =>{
            return(
            <House key={house.house_id} id={house.house_id}
            name={house.name} address={house.address}
            city={house.city} state={house.state}
            zip={house.zip} deleteHouse={this.deleteHouse}/>
            )
        })
        
        return(
            <main>
                <h1>---Dashboard---</h1>
                <section className='listing'>
                    {mapped}
                </section>
            </main>
        )
    }
}

export default Dashboard 