import Image from 'next/image'
import { useState } from "react";
//Import of Card Component styles storage
import { ProductCardStyles, MemberCardStyles } from "./card.config";
import PayWithMetamask from "../payWithMetamask";

//This function generates the info of the Member Card Component => receives (styles and render values) => returns the structure
export function MemberCard({ values, styles = MemberCardStyles }) {
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
export function ProductCard({ values, styles = ProductCardStyles }) {
  const [cardStyle, setCardStyle] = useState('rotateZ(0deg) rotateY(0deg) rotateX(0deg)');

  const handleMouseOver = (index) => {
    setCardStyle('rotateZ(5deg) rotateY(20deg) rotateX(-20deg)');
  }

  const handleMouseLeave = () => {
    setCardStyle('rotateZ(0deg) rotateY(0deg) rotateX(0deg)');
  }

  //Returns the structure
  return (
    <div className={styles.card_box} style={{ transform: cardStyle }} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
      <div className={styles.image_box}>
        <Image src="/Nebula_White.png" width={180} height={180} className={styles.image} />
      </div>
      <div className={styles.info_box}>
        <div className={styles.card_block}>
          <div className={styles.text}>{values.product_name}</div>
          <div className={styles.price}>{`${values.price} NEB`}</div>
        </div>
        <PayWithMetamask />
      </div>
      <div className={styles.shadow}></div>
    </div>
  );
}