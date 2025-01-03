// TextInputField.js
import React from 'react';

/**
 * TextInputField component renders a label (if it gets a text) and an input field.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.label - The text to be displayed as the label.
 * @param {string} props.id - The id of the input field.
 * @param {number} props.value - The value of the input field.
 * @param {Function} props.onChange - The function to be called when the input changes.
 * @returns {JSX.Element} The rendered label and input field.
 */
const TextInputField = ({ label, id, value, onChange }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input
      type="text"
      id={id}
      name={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
    <br />
  </div>
);

export default TextInputField;