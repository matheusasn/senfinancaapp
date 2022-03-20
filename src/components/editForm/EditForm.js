import React, { useState, useContext, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../../context/GlobalState";
import { NavLink } from 'react-router-dom'

import styles from './EditForm.module.css'


function InputForm(props){

  const { editTransaction } = useContext(GlobalContext);

  const [income, setIncome] = useState({
    inputTitle: "",
    inputCategory: "",
    inputType: "",
    inputValue: 0,
  });

  const { inputTitle, inputCategory, inputType, inputValue } = income;

  const onChangeIncome = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const registers = JSON.parse(localStorage.getItem("incomeTransactions")) || []

    const register = registers.find( (reg) => {
      return reg.id === props.idRegister;
    });

    setIncome({
      inputTitle: register.inputTitle,
      inputCategory: register.inputCategory,
      inputType: register.inputType,
      inputValue: register.inputValue,
    });

  }, []);

  const onSubmitIncome = (e) => {
    e.preventDefault();

    if (inputTitle !== "") {
      const newIncomeTransaction = {
        id: props.idRegister,
        ...income
      };

      editTransaction(newIncomeTransaction);
      
    }
  };

  return (

    <form onSubmit={onSubmitIncome}>
      <div className={styles.input_group}>

      <input type="text" name="inputTitle" value={inputTitle} placeholder="Título" autoComplete="off" onChange={onChangeIncome}/>

      <div className={styles.div_radio_type}>
        <div className={styles.div_option_input}>
          <input type="radio" name="inputType" value="input" autoComplete="off" checked={inputType === "input"} onChange={onChangeIncome}/> Entrada
        </div>
        <div className={styles.div_option_output}>
        <input type="radio" name="inputType" value="output" autoComplete="off" checked={inputType === "output"} onChange={onChangeIncome}/> Saida
        </div>
      </div>
      
      <input type="text" name="inputCategory" value={inputCategory} placeholder="Categoria" autoComplete="off" onChange={onChangeIncome}/>

      <input type="number" name="inputValue" value={inputValue} autoComplete="off" onChange={onChangeIncome}/>

      <div className={styles.option_form_register}>
        <div className={styles.option_form_submit}>
          <input type="submit" value={"Editar"}/>
        </div>        
        <div className={styles.option_form_exit}>
          <NavLink className={({isActive}) => (isActive ? styles.active : '')} to='/'>            
            <input type="submit" value="Cancelar"/>
          </NavLink>
        </div>
      </div>
      </div>
  </form>
  );
};

export default InputForm;
