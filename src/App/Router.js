import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Layout from './components/Layout';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFileSignature, faUserGraduate, faPlusCircle, faChalkboardTeacher, faFileAlt, faCog, faCaretRight, faBell, faBars, faTimes, faTrashAlt, faBan } from '@fortawesome/free-solid-svg-icons';
library.add(faFileSignature, faUserGraduate, faPlusCircle, faChalkboardTeacher, faFileAlt, faCog, faCaretRight, faBell, faBars, faTimes, faTrashAlt, faBan );

const Router = () => (
    <BrowserRouter>
        <Route component={Layout} />
    </BrowserRouter>
);

export default Router;
