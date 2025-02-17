// TextInputField.tsx

import React, { memo } from "react";

interface TextInputFieldProps {
  titleText?: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  style?: React.CSSProperties;
}

/**
 * TextInputField component renders a label (if it gets a text) and an input field.
 *
 * @param titleText - The text to be displayed as the label.
 * @param id - The id of the input field.
 * @param value - The value of the input field.
 * @param onChange - The function to be called when the input changes.
 * @param style - The style object to be applied
 */
const TextInputField: React.FC<TextInputFieldProps> = ({
  titleText = "",
  id,
  value,
  onChange,
  style = {},
}) => (
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

export default memo(TextInputField);
