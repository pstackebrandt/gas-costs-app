import React from "react";
import styles from "./Footer.module.scss";

import AppVersion from "./AppVersion";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTextContainer}>
        <div className={styles.footerText}>Gas Costs App</div>
      </div>
      <div className={styles.footerTextContainer}>
        <div className={styles.footerText}>Peter Stackebrandt</div>
        <div className={styles.footerText}>info.stackebrandt@gmail.com</div>
      </div>
      <div className={styles.footerTextContainer}>
        <div className={styles.footerText}>{new Date().getFullYear()}</div>
        <AppVersion />
      </div>
    </footer>
  );
};

export default Footer;
