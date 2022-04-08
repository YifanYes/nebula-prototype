import { useState } from "react";
//Import of Text Component styles storage
import { TextStyles } from "./text.config";

//This function generates the info of the Text Component => receives (styles and render values) => returns the structure
export default function Text({ values = [], styles = TextStyles }) {
  //Reads all the sections, reads the metadata of each secion and prints it
  return (
    <div className={styles.wrapper}>
      {values.map((section, i) => {
        return (
          <div key={'section_' + i} className={styles.section_wrapper}>
            <div className={styles.title}>{section.title}</div>
            {section.data.map((text, i) => {
              if(Array.isArray(text)){
                return (
                  <ul key={'list_' + i} className={styles.list}>
                    {text.map((list_item, k) => {
                      return (
                        <li key={'list_' + i + '_item_' + k} className={styles.list_item}>{list_item}</li>
                      );
                    })}
                  </ul>
                );
              }else{
                return (
                  <div key={'text_' + i} className={styles.text}>{text}</div>
                );
              }
            })}
          </div>
        );
      })}
    </div>
  );
}
