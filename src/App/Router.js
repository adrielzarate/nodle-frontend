import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Settings from './pages/Settings';
import Unit from './pages/Unit';
import AddUnit from './pages/AddUnit';
import Exercise from './pages/Exercise';
import NotFound from './pages/NotFound';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFileSignature, faUserGraduate, faPlusCircle, faChalkboardTeacher, faFileAlt, faCog, faCaretRight, faBell, faBars, faTimes, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
library.add(faFileSignature, faUserGraduate, faPlusCircle, faChalkboardTeacher, faFileAlt, faCog, faCaretRight, faBell, faBars, faTimes, faTrashAlt  );

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/unit" component={Unit} />
            <Route exact path="/add-unit" component={AddUnit} />
            <Route exact path="/exercise" component={Exercise} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;
