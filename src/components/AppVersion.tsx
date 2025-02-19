import React from 'react';
import pkg from '../../package.json';

import styles from './AppVersion.module.scss';

const AppVersion: React.FC = () => {
  return (
    <div className={styles.appVersion}>
      Version: {pkg.version}
    </div>
  );
};

export default AppVersion;
