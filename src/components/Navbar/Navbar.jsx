import React from "react";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
function Navbar({ data }) {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Search data={data} />
      <Button children="Give Feedback" />
    </nav>
  );
}

export default Navbar;
