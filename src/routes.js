import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Dashboard from './Components/Dashboard/Dashboard';
import Wizard from './Components/Wizard/Wizard';
import ZoomedHouse from './Components/ZoomedHouse';

export default (
    <Switch>
        <Route path='/' exact component={Dashboard} />
        <Route path='/wizard' component={Wizard} />
        <Route path='/house/:id' component={ZoomedHouse} />
    </Switch>
)