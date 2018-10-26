import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Settings from './pages/Settings';
import Unit from './pages/Unit';
import AddUnit from './pages/AddUnit';
import Exercise from './pages/Exercise';
import AddExercise from './pages/AddExercise';
import Students from './pages/Students';
import Student from './pages/Student';
import Asistants from './pages/Asistants';
import Asistant from './pages/Asistant';
import AddAssistant from './pages/AddAssistant';
import GenerateReport from './pages/GenerateReport';
import NotFound from './pages/NotFound';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFileSignature, faUserGraduate, faPlusCircle, faChalkboardTeacher, faFileAlt, faCog, faCaretRight, faBell, faBars, faTimes, faTrashAlt, faBan } from '@fortawesome/free-solid-svg-icons';
library.add(faFileSignature, faUserGraduate, faPlusCircle, faChalkboardTeacher, faFileAlt, faCog, faCaretRight, faBell, faBars, faTimes, faTrashAlt, faBan );

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/unit" component={Unit} />
            <Route exact path="/add-unit" component={AddUnit} />
            <Route exact path="/exercise" component={Exercise} />
            <Route exact path="/add-exercise" component={AddExercise} />
            <Route exact path="/students" component={Students} />
            <Route exact path="/student" component={Student} />
            <Route exact path="/asistants" component={Asistants} />
            <Route exact path="/asistant" component={Asistant} />
            <Route exact path="/add-assistant" component={AddAssistant} />
            <Route exact path="/generate-report" component={GenerateReport} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;
