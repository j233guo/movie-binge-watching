import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// Root component (app level)
// This is a functional component, not a normal function
// In <App /> Dont leave out the / or it returns error
// React requires all tags to be closed, even if empty

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
