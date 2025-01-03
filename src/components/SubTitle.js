// SubTitle.js

/**
 * SubTitle component renders a paragraph element with the provided text.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.text - The text to be displayed inside the paragraph.
 * @returns {JSX.Element} The rendered paragraph element.
 */
function SubTitle({text}) {
  return (
    <p>{text}</p>
  );
}

export default SubTitle;
