import React from 'react';
import { render } from 'react-dom';

import Router from './App/Router';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datetime/css/react-datetime.css';
import './App/App.css';

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Khula:300,400,700,800', 'Raleway:300,400,600,700,800']
  }
});

render(<Router />, document.getElementById('root'));