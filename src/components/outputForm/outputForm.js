import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../../context/GlobalState";
import styles from "./OutPutForm.module.css"

function OutputForm(){

    const { addExpense } = useContext(GlobalContext);

    const [expense, setExpense] = useState({
        outputTitle: "",
        outputCategory: "",
        outputValue: 0,
      });
    
      const {outputTitle, outputCategory, outputValue } = expense;
    
      const onChangeExpense = (e) => {
        setExpense({ ...expense, [e.target.name]: e.target.value });
      };
    
      const onSubmitExpense = (e) => {
        e.preventDefault();
    
        if (outputCategory !== "") {
          const newExpenseTransaction = {
            id: uuidv4(),
            outputTitle,
            outputCategory,
            outputValue: outputValue * 1,
          };
    
          addExpense(newExpenseTransaction);
    
          setExpense({
            outputTitle: "",
            outputCategory: "",
            outputValue: 0,
          });
        }
      };
    
    return(
      <form onSubmit={onSubmitExpense}>
          <div className={styles.input_group}>
            <input type="text" name="outputTitle" value={outputTitle} placeholder="Título" autoComplete="off" onChange={onChangeExpense}/>
        
            <input type="text" name="outputCategory" value={outputCategory} placeholder="Categoria" autoComplete="off" onChange={onChangeExpense}/>

            <input type="number" name="outputValue" value={outputValue} placeholder="Valor" autoComplete="off" onChange={onChangeExpense}/>
            <input type="submit" value="Submit"/>
          </div>
      </form>



        // <form onSubmit={onSubmitExpense}>
        //     <div className="input-group expense">
        //     <input type="text" name="expenseText" value={expenseText} placeholder="Add Expense..." autoComplete="off" onChange={onChangeExpense}/>
        //     <input type="number" name="expenseAmount" value={expenseAmount} placeholder="Amount" autoComplete="off" onChange={onChangeExpense}/>
        //     <input type="submit" value="Submit" />
        //     </div>
        // </form>
    );
}

export default OutputForm;