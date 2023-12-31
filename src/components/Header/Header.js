import React from "react";
import { format } from "date-fns";
import styles from "./Header.module.css";

const Header = () => {
  const currentDate = format(new Date(), "EEEE, MMMM dd, yyyy");

  const handleTitleClick = () => {
    window.location.reload();
  };

  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.title} onClick={handleTitleClick}>
        Hacker News Latest Stories
      </h1>
      <p className={styles.date}>{currentDate}</p>
    </div>
  );
};

export default Header;
