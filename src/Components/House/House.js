import React, {Component} from 'react';

class House extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }


    render(){
        return(
            <main className='House'>
                <h1>Property Name: </h1>
                <h3>Address: </h3>
                <h3>City: </h3>
                <h3>State: </h3>
                <h3>Zip: </h3>
            </main>
        )
    }
}

export default House 