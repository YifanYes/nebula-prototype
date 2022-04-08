import { FaDizzy } from 'react-icons/fa'
//Import of Error Component styles storage
import { ErrorStyles } from "./error.config";

//This function generates the info of the Error Component => receives (styles and render values) => returns the structure
export default function Error({ values = [], styles = ErrorStyles }) {
  //Returns the structure
  return (
    <div className={styles.wrapper}>
      <FaDizzy className={styles.icon} />
      <h2 className={styles.title}>{values.title}</h2>
      <h3 className={styles.description}>{values.description}</h3>
      <div className={styles.shadow}></div>
    </div>
  );
}
