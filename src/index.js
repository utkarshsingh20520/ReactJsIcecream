import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Appmain from './Appmain';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
  <BrowserRouter>
    <Appmain />
  </BrowserRouter>,
  document.getElementById('root')
);
