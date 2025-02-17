// Filename: OutputFieldWithNumber.tsx
import React from "react";

interface OutputFieldWithNumberProps {
  label: string;
  id: string;
  value: number;
}

/**
 * OutputFieldWithNumber component renders a label and an output field
 * with a number.
 *
 * @param props - The properties object.
 * @param props.label - The label to be displayed.
 * @param props.id - The id of the output field.
 * @param props.value - The value to be displayed.
 */
const OutputFieldWithNumber: React.FC<OutputFieldWithNumberProps> = ({
  label,
  id,
  value,
}: OutputFieldWithNumberProps) => (
  <div className="output-field">
    <label htmlFor={id}> {label} </label>
    <output id={id}> {value.toFixed(2)} </output>
  </div>
);

export default OutputFieldWithNumber;
