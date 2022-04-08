import Image from 'next/image'
//Import of logo styles storage
import { LogoStyles } from "./logo.config";

//This function generates the logo of the Logo Component => receives (styles and render values) => returns the structure
export default function Logo({ values = [], styles = LogoStyles}) {
  //Returns the structure
  return (
    <div className={styles.image}>
      <Image src={values.src} width={values.width} height={values.height}/>
    </div>
  );
}