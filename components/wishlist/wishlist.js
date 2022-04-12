import Image from 'next/image'
import { useState } from "react";
import { useWishlistContext } from "../../contexts/wishlist_context";
import { FaHeartBroken, FaEye } from "react-icons/fa";
//Import of Card Component styles storage
import { WishlistItemStyles } from "./wishlist.config";
import PayWithMetamask from "../metamask_pay_btn/metamask_pay_btn";

//This function generates the info of the Product Card Component => receives (styles and render values) => returns the structure
export const WishlistItem = ({ values, styles = WishlistItemStyles }) => {
  const { removeItem } = useWishlistContext();
  //Returns the structure
  return (
    <div className={styles.card_box}>
      <Image src={values.image ? values.image : "/Nebula_White.png"} width={100} height={100} className={styles.image} />
      <div className={styles.text}>{values.product_name}</div>
      <div className={styles.price}>{`${values.price} NEB`}</div>
      <div className={styles.button_box}>
        <a type="button" className={styles.button} onClick={() => removeItem(values.id, values.product_name)}><FaHeartBroken/></a>
        <PayWithMetamask styles={styles.button}/>
        <a type="button" className={styles.button}><FaEye/></a>
      </div>
      <div className={styles.shadow}></div>
    </div>
  );
}