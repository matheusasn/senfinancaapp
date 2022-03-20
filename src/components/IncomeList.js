import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import IncomeTransaction from "./IncomeTransaction";
import { NavLink } from 'react-router-dom'
import styles from '../components/navbar/NavBar'
import TextField from '@mui/material/TextField';
import "./table.css"

const IncomeList = () => {
  const { incomeTransactions } = useContext(GlobalContext);

  const [valueSearch] = useState({

  });

  return (
    <div className="div_table_input">
      <div className="title_table_input">
        <div>
          <h2>Entrada</h2>
        </div>
        <div className="navbar_table">
          <div>
            <TextField fullWidth label="Pesquisar" id="searchTable" />
          </div>
          <div className="button_register_table">
            <NavLink  className={({isActive}) => (isActive ? styles.active : '')} to='/formEntrada' >
                <img className="icon_register" alt="Cadastrar" src={require('../assets/icons/cadastro.png')}/>        
            </NavLink>
          </div>
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
