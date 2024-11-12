// Filename: OutputFieldWithNumber.js
import React from 'react';

const OutputFieldWithNumber = ({ label, id, value }) => (
    <div className="output-field" >
        <label htmlFor={id} > {label} </label>
        <output id={id} > {value.toFixed(2)} </output>
    </div>
);

export default OutputFieldWithNumber;