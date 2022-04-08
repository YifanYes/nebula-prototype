import Image from 'next/image'
//Import of Jumbotron Component styles storage
import { JumbotronStyles } from "./jumbotron.config";

//This function generates the info of the Jumbotron Component => receives (styles and render values) => returns the structure
export default function Jumbotron({ values = [], styles = JumbotronStyles }) {
  //Returns the structure
  return (
    <div className={styles.wrapper + (values.text_position === 'left' ? ' flex-row-reverse' : ' flex-row')}>
      <div className={styles.image_box}>
        <Image src={values.src} width={values.image_w} height={values.image_h}/>
      </div>
      <div className={styles.info_box + (values.text_position === 'left' ? ' text-left' : ' text-right')}>
        <div className={styles.title}>{values.title}</div>
        <div className={styles.text}>{values.text}</div>
      </div>
      <div className={styles.shadow}></div>
    </div>
  );
}
