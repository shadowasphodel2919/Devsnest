import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App title={"Todo"} done={false} /* title={"Page Title"} description={"Typescript react app"} */ />
  </React.StrictMode>,
  document.getElementById('root')
);
