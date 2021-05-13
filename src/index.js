// React
import React from 'react';
import ReactDOM from 'react-dom';

//External Components
import { BrowserRouter } from "react-router-dom";

// Internal Components 
import App from './Route/App';

// CSS
import './Style/Route/index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

