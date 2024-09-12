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
    // <div className={styles.home}>
    //   {data.gadgets.map((item) => (
    //     <div className={styles.productContainer}>
    //         <div
    //           style={{
    //             height: "100%",
    //             width: "15%",
    //           }}
    //         >
    //           <img style={{width:"100%",height:"70%"}} src={item.image_url} />
    //         </div>
    //         <div style={{ padding: "1rem" }}>
    //           <div>Product: {item.name}</div>
    //           <div> Price:{item.price}</div>
    //           <div>Brand:{item.brand}</div>
    //         </div>
    //         <Button onClick={()=>dispatch(addToCart(item))} className={styles.navButton} >Add To Cart</Button>
    //     </div>
    //   ))}
    // </div>
<div>
    <div style={{backgroundColor:"yellow"}} className="form">
      <input placeholder="First name" className="first-name" />

      <input placeholder="Last name" className="last-name" />

      <input placeholder="Age" type="number" className="age" />

      <input placeholder="Address" className="address" />

      <input placeholder="Place of work" className="place-of-work" />

      <input placeholder="Job title" className="job-title" />

      <input placeholder="Phone number" className="phone-number" />

      <input placeholder="Skype" className="skype" />

      <button type="submit">Submit</button>
    </div>
    </div>
  );
};

export default Home;
