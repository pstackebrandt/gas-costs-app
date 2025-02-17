// NumberInputField.tsx
import React, { memo } from "react";

interface NumberInputFieldProps {
  titleText?: string | undefined;
  id: string;
  value: number;
  onChange: (value: number) => void;
  style?: React.CSSProperties | undefined;
}

/**
 * Renders an input field for numbers with an optional label.

* @interface NumberInputFieldProps
 * @property titleText - The text to be displayed as the label, optional.
 * @property id - The id of the input field.
 * @property value - The value of the input field.
 * @property onChange - The function to be called when the input changes.
 * @property style - The style object to be applied to the input field, optional.
 * @returns {JSX.Element} The rendered label and input field.
 */
const NumberInputField: React.FC<NumberInputFieldProps> = ({
  titleText = "",
  id,
  value,
  onChange,
  style = {},
}) => (
  <div>
    {titleText && <label htmlFor={id}>{titleText}</label>}
    <input
      type="number"
      id={id}
      name={id}
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onChange(Number(e.target.value))
      }
      style={style}
    />
    {/* TODO Remove br */}
    <br />
  </div>
);

export default memo(NumberInputField);