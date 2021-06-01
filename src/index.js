// React
import React from 'react';
import ReactDOM from 'react-dom';

// External Components
import { ChakraProvider } from "@chakra-ui/react";

// Internal Components 
import App from './Route/App';

// CSS
import './Style/Route/index.css';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

