import React from 'react';
import styles from './AppIcon.module.scss';

const AppIcon: React.FC = () => {
  // Use import.meta.env.BASE_URL to get the base URL from Vite config
  const iconPath = `${import.meta.env.BASE_URL}favicon.svg`;
  
  return (
    <div className={styles.appIcon}>
      <img src={iconPath} alt="Gas Costs App Icon" />
    </div>
  );
};

export default AppIcon;
