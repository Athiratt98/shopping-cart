import React from "react";
import styles from "./Navbar.module.scss";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Navbar = () => {
  const navigate = useNavigate();

  const goToHome = () => navigate("/");
  const goToCart = () => navigate("/cart");

  return (
    <div className={styles.nav}>
      <Button className={styles.navButton} onClick={goToHome}>Home</Button>
      <Button className={styles.navButton} onClick={goToCart}>Cart</Button>
    </div>
  );
};
export default Navbar;
