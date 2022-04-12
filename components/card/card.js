import Image from 'next/image'
import Link from 'next/link'
import { useState } from "react";
import { useWishlistContext } from "../../contexts/wishlist_context";
import { FaHeart, FaEye } from "react-icons/fa";
//Import of Card Component styles storage
import { ProductCardStyles, MemberCardStyles } from "./card.config";
import PayWithMetamask from "../metamask_pay_btn/metamask_pay_btn";

//This function generates the info of the Member Card Component => receives (styles and render values) => returns the structure
export const MemberCard = ({ values, styles = MemberCardStyles }) => {
  //Returns the structure
  return (
    <div className={styles.member_card}>
      <div className={styles.member_image}>
        <Image src={values.image} width={150} height={150} className="rounded-full" />
      </div>
      <h2 className={styles.member_text}>{values.text}</h2>
      <p className={styles.member_description}>{values.description}</p>
      <div className={styles.shadow}></div>
    </div>
  );
}

//This function generates the info of the Product Card Component => receives (styles and render values) => returns the structure
export const ProductCard = ({ values, styles = ProductCardStyles }) => {
  const { addItem } = useWishlistContext();
  //Returns the structure
  return (
    <div className={styles.card_box}>
      <div className={styles.image_box}>
        <Image src={values.image ? values.image : "/Nebula_White.png"} width={180} height={180} className={styles.image} />
      </div>
      <div className={styles.info_box}>
        <div className={styles.card_block}>
          <div className={styles.text}>{values.product_name}</div>
          <div className={styles.price}>{`${values.price} NEB`}</div>
        </div>
      </div>
      <a type="button" className={`${styles.button} right-14 top-4`} onClick={() => addItem(values.id, values.product_name, values.price, values.image)}><FaHeart/></a>
      <PayWithMetamask styles={`${styles.button} right-4 top-4`}/>
      <a type="button" className={`${styles.button} right-4 top-14`}><FaEye/></a>
      <div className={styles.shadow}></div>
    </div>
  );
}