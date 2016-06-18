import React from 'react';
import ReactDOM from 'react-dom';
import Stream from './components/Stream';

const tracks = [
    {
        title: 'My first track'
    },
    {
        title: 'My second track'
    }
];

ReactDOM.render(
    <Stream tracks={tracks} />,
    document.getElementById('app')
);
