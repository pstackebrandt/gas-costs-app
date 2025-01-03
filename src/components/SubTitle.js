// SubTitle.js
import React from 'react';
import PropTypes from 'prop-types';

/**
 * SubTitle component renders a paragraph element with the provided text.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.text - The text to be displayed inside the paragraph.
 * @returns {JSX.Element} The rendered paragraph element.
 */
function SubTitle({text}) {
  return (
    <p className='subtitle-text'>{text}</p>
  );
}

SubTitle.defaultProps = {
  text: 'Default subtitle',
};

SubTitle.propTypes = {
  text: PropTypes.string,
};

export default SubTitle;
