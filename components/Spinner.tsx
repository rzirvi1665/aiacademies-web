import React from 'react';
import './Spinner.css';

const Spinner: React.FC = () => (
    <div className="sk-folding-cube">
        <div className="sk-cube1 sk-cube" />
        <div className="sk-cube2 sk-cube" />
        <div className="sk-cube4 sk-cube" />
        <div className="sk-cube3 sk-cube" />
    </div>
);

export default Spinner;
