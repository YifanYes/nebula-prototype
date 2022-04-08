import { useState } from "react";
//Import of Form Component values and styles storage
import { FormStyles } from "./form.config";

//This function generates the form of the Form Component => receives (styles and render values) => returns the structure
export default function Form({ values = [], styles = FormStyles, name = '?', entries = 0 }) {
  //One state hook => [inputsText, setInputsText] for the inputs' text control
  const [inputsText, setInputsText] = useState(new Array(values.length).fill(''));

  /*Handlers
  handleChange => Handles change on the inputs and sets the hook to the inputs' current values
  handleClick => Handles resetting the form
  handleSubmit => Handles submition of the form
  */
  const handleChange = (event) => { setInputsText(inputsText => ({...inputsText, [event.target.id]: event.target.value})); };

  const handleClick = (event) => { setInputsText(inputsText.fill('')); };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log(inputsText); 
  };

  //First checks if the current input is a text(or other types) or a texarea, then prints it. Repeats with each section
  return (
    <form name={name} onSubmit={handleSubmit}>
      <div className={styles.wrapper}>
        {values.map((input, i) => {
          if(input.type !== 'textarea'){
            return (
              <div key={input.key + '_wrapper'} className={styles.input_wrapper + ' ' + input.size}>
                <label title={input.text} className={styles.label}>{input.text}</label>
                <input id={i} key={input.key} type={input.type} placeholder={input.text + '...'} autoComplete="off" className={styles.input} name="txt" onChange={handleChange} value={inputsText[i]}/>
              </div>
            );
          }else{
            return (
              <div key={input.key + '_wrapper'} className={styles.input_wrapper + ' ' + input.size}>
                <label title={input.text} className={styles.label}>{input.text}</label>
                <textarea id={i} key={input.key} placeholder={input.text + '...'} autoComplete="off" className={styles.input + ' ' + styles.textarea} name="txt" onChange={handleChange} value={inputsText[i]}/>
              </div>
            );
          }
        })}
      </div>
      <button type="button" className={styles.button} onClick={handleClick}>Cancelar</button>
      <button type="submit" className={styles.button}>Enviar</button>
    </form>
  );
}
