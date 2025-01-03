// NumberInputField.js
import React from 'react';

/**
 * NumberInputField component renders a label and an input field for numbers.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.label - The text to be displayed as the label.
 * @param {string} props.id - The id of the input field.
 * @param {number} props.value - The value of the input field.
 * @param {Function} props.onChange - The function to be called when the input changes.
 * @returns {JSX.Element} The rendered label and input field.
 */
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