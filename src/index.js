import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css'; // Note this
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
