import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../../context/GlobalState";
import styles from './InputForm.module.css'

function InputForm(){
  const { addIncome } = useContext(GlobalContext);

  const [income, setIncome] = useState({
    inputTitle: "",
    inputCategory: "",
    inputValue: 0,
  });

  const { inputTitle, inputCategory, inputValue, } = income;

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
        inputValue: inputValue * 1,
      };

      addIncome(newIncomeTransaction);

      setIncome({
        inputTitle: "",
        inputCategory: "",
        inputValue: 0,
      });
    }
  };

  return (
    <form onSubmit={onSubmitIncome}>
      <div className={styles.input_group}>
      <input type="text" name="inputTitle" value={inputTitle} placeholder="Título" autoComplete="off" onChange={onChangeIncome}/>
      
      <input type="text" name="inputCategory" value={inputCategory} placeholder="Categoria" autoComplete="off" onChange={onChangeIncome}/>

      <input type="number" name="inputValue" value={inputValue} placeholder="Valor" autoComplete="off" onChange={onChangeIncome}/>

      <input type="submit" value="Submit"/>
      </div>
  </form>
  );
};

export default InputForm;
