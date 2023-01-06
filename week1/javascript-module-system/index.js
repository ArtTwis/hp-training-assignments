import React from 'react';
import ReactDOM from 'react-dom';

let heading = React.createElement('h1', { key: 'heading' }, 'Hello World!');

let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);
