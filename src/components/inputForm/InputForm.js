import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../../context/GlobalState";
import { NavLink } from 'react-router-dom'
import styles from './InputForm.module.css'


function InputForm(){
  const { addIncome } = useContext(GlobalContext);

  const [income, setIncome] = useState({
    inputTitle: "",
    inputType: "",
    inputCategory: "",
    inputValue: 0,
  });

  const { inputTitle, inputCategory, inputType, inputValue } = income;

  const onChangeIncome = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value });
  };

  const onSubmitIncome = (e) => {
    e.preventDefault();

    if (inputTitle !== "") {
      const newIncomeTransaction = {
        id: uuidv4(),
        inputTitle,
        inputCategory,
        inputType,
        inputValue: inputValue * 1,
      };

      addIncome(newIncomeTransaction);

      setIncome({
        inputTitle: "",
        inputCategory: "",
        inputType: "",
        inputValue: 0,
      });
    }
  };

  return (
    <form onSubmit={onSubmitIncome}>
      <div className={styles.input_group}>

      <input type="text" name="inputTitle" value={inputTitle} placeholder="Título" autoComplete="off" onChange={onChangeIncome} required/>

      <div className={styles.div_radio_type}>
        <div className={styles.div_option_input}>
          <input type="radio" name="inputType" value="input" autoComplete="off" onChange={onChangeIncome}/> Entrada
        </div>
        <div className={styles.div_option_output}>
          <input type="radio" name="inputType" value="output" autoComplete="off" onChange={onChangeIncome}/> Saida
        </div>
      </div>
      
      <input type="text" name="inputCategory" value={inputCategory} placeholder="Categoria" autoComplete="off" onChange={onChangeIncome} required/>

      <input type="number" name="inputValue" value={inputValue} autoComplete="off" onChange={onChangeIncome} required/>

      <div className={styles.option_form_register}>
        <div className={styles.option_form_submit}>
          <input type="submit" value="Cadastrar"/> 
        </div>        
        <div className={styles.option_form_exit}>
          <NavLink to='/'>            
            <input type="submit" value="Cancelar"/>
          </NavLink>
        </div>
      </div>
      </div>
  </form>
  );
};

export default InputForm;
