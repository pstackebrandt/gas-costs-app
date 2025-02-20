import React from 'react';
import AppIcon from './AppIcon';
import styles from './NavHeader.module.scss';

const NavHeader: React.FC = () => {
  return (
    <nav className={styles.navHeader}>
      <AppIcon />
      {/* Add navigation items here in the future */}
    </nav>
  );
};

export default NavHeader; 