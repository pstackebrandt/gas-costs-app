import React from 'react';
import styles from './Footer.module.scss';

import AppVersion from './AppVersion';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>Gas Costs App &copy; {new Date().getFullYear()} - All rights reserved.</p>
      <AppVersion />
    </footer>
  );
};

export default Footer;