import React from "react";
import { format } from "date-fns";

const Header = () => {
  const currentDate = format(new Date(), "EEEE, MMMM dd, yyyy");
  return (
    <div>
      <h1>Hacker News Latest Stories</h1>
      <p>{currentDate}</p>
    </div>
  );
};

export default Header;
