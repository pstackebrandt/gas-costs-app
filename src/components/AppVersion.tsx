import React from 'react';
import pkg from '../../package.json';

import styles from './AppVersion.module.scss';

const AppVersion: React.FC = () => {
  return (
    <div className={styles.appVersion}>
      <p>Version: {pkg.version}</p>
    </div>
  );
};

export default AppVersion;
