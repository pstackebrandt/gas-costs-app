// InputField.js
import React from 'react';

const NumberInputField = ({ label, id, value, onChange }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input
      type="number"
      id={id}
      name={id}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
    />
    <br />
  </div>
);

export default NumberInputField;