import React from 'react'
import {useDispatch,useSelector} from "react-redux";
import {RootState,AppDispatch} from "../../store/store";
import { removeFromCart } from '../../store/reducers/ProductReducer';
import styles from "./Cart.module.scss"
import { Button } from '@mui/material';

const Cart=()=> {

  const dispatch:AppDispatch=useDispatch();
  const cartData = useSelector((state:RootState)=>state.products)
  console.log(cartData)
  return (
    <div  className={styles.cart}>
       {cartData.map((item)=>(
          <>
    <div className={styles.cartContainer}>
            <div
              style={{
                height: "100%",
                width: "15%",
              }}
            >
              <img style={{width:"100%",height:"100%"}} src={item.image_url} />
            </div>
            <div style={{ padding: "1rem" }}>
              <div>Product: {item.name}</div>
              <div> Price:{item.price}</div>
              <div>Brand:{item.brand}</div>
            </div>
            <Button onClick={()=>dispatch(removeFromCart(item))} className={styles.navButton} >Remove From Cart</Button>
        </div>

        </>
         ))
            }



    </div>
    
  )
}

export default Cart

