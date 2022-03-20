import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import ExpenseTransaction from "./ExpenseTransaction";
import { NavLink } from 'react-router-dom'
import styles from '../components/navbar/NavBar'
import "./table.css"

const ExpenseList = () => {
  const { expenseTransactions } = useContext(GlobalContext);

  return (
    <div className="div_table_output">
      <div className="title_table_input custonOutput">
        <div>
          <h2>Saída</h2>
        </div>
        <div className={styles.item}>
          <NavLink  className={({isActive}) => (isActive ? styles.active : '')} to='/formSaida' >
              <img className="icon_register" alt="Cadastrar" src={require('../assets/icons/cadastro.png')}/>        
          </NavLink>
        </div>
      </div>      
      <table id="customers" className="custonOutput">
      <tr>
        <th>Titulo</th>
        <th>Categoria</th>
        <th>Valor</th>
        <th>Data</th>
        <th>Editar / Excluir</th>
      </tr>      
      {expenseTransactions.map(expenseTransaction => (
        <ExpenseTransaction
          key={expenseTransaction.id}
          expenseTransaction={expenseTransaction}
        />
      ))}      
    </table>
    </div>
  );
};

export default ExpenseList;


