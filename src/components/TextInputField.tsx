// TextInputField.tsx
import React, {memo} from 'react';
import PropTypes from 'prop-types';

/**
 * TextInputField component renders a label (if it gets a text) and an input field.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.titleText - The text to be displayed as the label.
 * @param {string} props.id - The id of the input field.
 * @param {string} props.value - The value of the input field.
 * @param {Function} props.onChange - The function to be called when the input changes.
 * @param {Object} props.style - The style object to be applied
 * @returns {JSX.Element} The rendered label and input field.
 */
const TextInputField = ({ titleText, id, value, onChange, style = {} }) => (
  <div>
    {titleText && <label htmlFor={id}>{titleText}</label>}
    <input
      type="text"
      id={id}
      name={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={style}
    />
    <br />
  </div>
);

TextInputField.propTypes = {
  titleText: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  style: PropTypes.object,
};

TextInputField.defaultProps = {
  titleText: '',
  style: {},
};

export default memo(TextInputField);