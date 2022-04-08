import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
//Import of Accordion Component styles storage
import { AccordionStyles } from "./accordion.config";

//This function generates the info of the Accordion Component => receives (styles and render values) => returns the structure
export default function Accordion({ values = [], styles = AccordionStyles }) {
  const [accordions, setAccordions] = useState(values);

  const handleClick = (index) => {
    setAccordions(accordions.map((accordion, i) => {
      if(i === index){
        accordion.open = !accordion.open;
      }else{
        accordion.open = false;
      }
      return accordion;
    }));
  }

  //Reads all the questions, displays them, then controls when a question is clicked to display the answer
  return (
    <div className={styles.wrapper}>
      {accordions.map((accordion, i) => {
        return (
          <div key={i} className={styles.accordion_box + (accordion.open ? ' bg-gradient-to-tl from-black/10 to-white/10' : '')} onClick={() => handleClick(i)}>
            <div className={styles.accordion}>
              <div className={styles.title}>{accordion.question}</div>
              <div className={styles.text + (accordion.open ? '' : ' hidden')}>{accordion.answer}</div>
            </div>
            <FaPlus className={styles.icon + (accordion.open ? ' opacity-0 transition-opacity duration-[0.2s] ease-in-out' : ' opacity-100 duration-[0.2s]')}/>
            <FaMinus className={styles.icon + (accordion.open ? ' opacity-100 duration-[0.2s]' : ' opacity-0 transition-opacity duration-[0.2s] ease-in-out')}/>
          </div>
        );
      })}
    </div>
  );
}
