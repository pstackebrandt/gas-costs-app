// NumberInputField.js
import React, { memo } from 'react';
import PropTypes from 'prop-types';

/**
 * NumberInputField component renders a label (if it get a text) and an input field for numbers.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.titleText - The text to be displayed as the label.
 * @param {string} props.id - The id of the input field.
 * @param {number} props.value - The value of the input field.
 * @param {Function} props.onChange - The function to be called when the input changes.
 * @param {Object} props.style - The style object to be applied to the input field.
 * @returns {JSX.Element} The rendered label and input field.
 */
const NumberInputField = ({ titleText, id, value, onChange, style = {} }) => (
  <div>
    {titleText && <label htmlFor={id}>{titleText}</label>}
    <input
      type="number"
      id={id}
      name={id}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      style={style}
    />
    <br />
  </div>
);

NumberInputField.propTypes = {
  titleText: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  style: PropTypes.object,
};

NumberInputField.defaultProps = {
  titleText: '',
  style: {},
};

export default memo(NumberInputField);