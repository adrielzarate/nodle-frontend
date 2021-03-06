import React from 'react';
import { Route, Switch } from 'react-router-dom';

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
import RecentDeliveries from './pages/RecentDeliveries';
import NotFound from './pages/NotFound';

export const ChildRoutes = ({ testFunc }) => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/settings" component={Settings} />
        <Route path="/unit" component={Unit} />
        <Route path="/add-unit" component={AddUnit} />
        <Route path="/exercise/:handle" component={Exercise} />
        <Route path="/add-exercise" component={AddExercise} />
        <Route path="/students" component={Students} />
        <Route path="/student" component={Student} />
        <Route path="/asistants" component={Asistants} />
        <Route path="/asistant" component={Asistant} />
        <Route path="/add-assistant" component={AddAssistant} />
        <Route path="/generate-report" component={GenerateReport} />
        <Route path="/recent-deliveries" component={RecentDeliveries} />
        <Route component={NotFound} />
    </Switch>
);