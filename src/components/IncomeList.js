import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import IncomeTransaction from "./IncomeTransaction";
import { NavLink } from 'react-router-dom'
import styles from '../components/navbar/NavBar'
import "./table.css"

const IncomeList = () => {
  const { incomeTransactions } = useContext(GlobalContext);

  console.log(incomeTransactions);

  return (
    <div className="div_table_input">
      <div className="title_table_input custonInput">
        <div>
          <h2>Tabela de Entrada</h2>
        </div>
        <div className={styles.item}>
          <NavLink  className={({isActive}) => (isActive ? styles.active : '')} to='/formEntrada' >
              <img className="icon_register" alt="Cadastrar" src={require('../assets/icons/cadastro.png')}/>        
          </NavLink>
        </div>
      </div>
      <table id="customers" className="custonInput">
      <tr>
        <th>Titulo</th>
        <th>Categoria</th>
        <th>Valor</th>
        <th>Data</th>
        <th>Editar / Excluir</th>
      </tr>      
      {incomeTransactions.map(incomeTransaction => (
          <IncomeTransaction
            key={incomeTransaction.id}
            incomeTransaction={incomeTransaction}
          />
        ))}     
    </table>
    </div>
  );
};

export default IncomeList;
