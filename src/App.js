import React from 'react';
import { render } from 'react-dom';

// CSS
import './css/main.css';

//Routes
import Routes from './routes.js';

// Render
render(
  Routes,
  document.getElementById('application')
);
