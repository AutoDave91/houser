import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import store, { ADD_CITY } from '../../store';
import {ADD_NAME, ADD_ADDRESS, ADD_STATE, ADD_ZIP} from '../../store'


class Wizard extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            // store.getState().name,
            address: '',
            // store.getState().address,
            city: '',
            // store.getState().city,
            state: '',
            // store.getState().state,
            zip: '',
            // store.getState().zip
        }
        this.addHouse = this.addHouse.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    addHouse(){
        axios
            .post('/api/wizard/add', {
                name: this.props.name,
                address: this.props.address,
                city: this.props.city,
                state:this.props.state,
                zip: this.props.zip
            })
            .then(response=>{
                this.setState({
                    name:response.data.name,
                    address: response.data.address,
                    city: response.data.city,
                    state: response.data.state,
                    zip: response.data.zip
                })
            })
            .catch(()=>{
                console.log('Wizard post request failed...')
            })
    }
    cancel(){
        this.setState({name: '', address: '', city: '', state: '', zip: 0})
    }
    handleNameChange(nameVal) {
        this.setState({
          name: nameVal
        });
      }
    saveChanges(){
        store.dispatch({type: ADD_NAME, payload: this.state.name});
        store.dispatch({type: ADD_ADDRESS, payload: this.state.address});
        store.dispatch({type: ADD_CITY, payload: this.state.city});
        store.dispatch({type: ADD_STATE, payload: this.state.state});
        store.dispatch({type: ADD_ZIP, payload: this.state.zip});
    }
    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
          this.props.getHouses(this.props);
        }
      }

    render(){
        let {updateName, updateAddress, updateCity, updateState, updateZip} = this.props;

        return(
            <main>
                <header className='Dashboard-header'>
                    <h1>Add New Listing</h1>
                    <button><Link to='/'>cancel</Link></button>
                </header>
                <section className='inputs'>
                    <h3>Property Name</h3>
                    <input type="text" onChange={e => updateName(e.target.value)} />
                    <h3>Address</h3>
                    <input type="text" onChange={e => updateAddress(e.target.value)} />
                    <h3>City</h3>
                    <input type="text" onChange={e => updateCity(e.target.value)} />
                    <h3>State</h3>
                    <input type="text" onChange={e => updateState(e.target.value)} />
                    <h3>Zip</h3>
                    <input type="text" onChange={e => updateZip(e.target.value)} />
                </section>
                <Link to="/">
                    <button onClick={event => this.addHouse(this.props)}>Submit</button>
                </Link>
            </main>
        )
    }
}

export default Wizard 