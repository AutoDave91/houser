import React, {Component} from 'react';
import { Link } from 'react-router-dom';

function House() {
    return(
        <main className='House'>
            <h1>Property Name: <Link to='/house/:id'></Link></h1>
            <h3>Address: </h3>
            <h3>City: </h3>
            <h3>State: </h3>
            <h3>Zip: </h3>
        </main>
    )
}

export default House 