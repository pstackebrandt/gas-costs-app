import React from 'react';
import styles from './SubTitle.module.scss';

/**
 * SubTitle component renders a paragraph element with the provided text.
 *
 * @param props - The properties object.
 * @param props.text - The text to be displayed inside the paragraph.
 * @returns The rendered paragraph element.
 */
interface SubTitleProps {
  text?: string;
}

const SubTitle: React.FC<SubTitleProps> = ({ text = 'Default subtitle' }) => {
  return <p className={styles.subtitleText}>{text}</p>;
};

export default SubTitle;