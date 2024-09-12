import React from "react";
import styles from "./Home.module.scss";
import data from "../../data.json";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { addToCart } from "../../store/reducers/ProductReducer";
import "./style.css";

const Home = () => {
  const dispatch: AppDispatch = useDispatch();
  return (
    <div className={styles.home}>
      {data.gadgets.map((item) => (
        <div className={styles.productContainer}>
            <div
              style={{
                height: "100%",
                width: "15%",
              }}
            >
              <img style={{width:"100%",height:"70%"}} src={item.image_url} />
            </div>
            <div style={{ padding: "1rem" }}>
              <div>Product: {item.name}</div>
              <div> Price:{item.price}</div>
              <div>Brand:{item.brand}</div>
            </div>
            <Button onClick={()=>dispatch(addToCart(item))} className={styles.navButton} >Add To Cart</Button>
        </div>
      ))}
    </div>

  );
};

export default Home;
