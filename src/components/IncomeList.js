import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import IncomeTransaction from "./IncomeTransaction";
import { NavLink } from 'react-router-dom'
import styles from '../components/navbar/NavBar'
import "./table.css"

const IncomeList = () => {
  
  const { incomeTransactions } = useContext(GlobalContext);

  const [valueSearch, setValueSearch] = useState({
    searchTable: "",
    select: "",
  });

  const onChangeFilter = (e) => {
    
    setValueSearch({ ...valueSearch, [e.target.name]: e.target.value });
  };

  const { searchTable, select } = valueSearch;
  
  // retorna o tipo de tabela all, entrada ou saida
  const filterTable = valueSearch.select === "" || valueSearch.select === 'all'? 
  incomeTransactions 
  : incomeTransactions.filter(incomeTransactions => incomeTransactions.inputType === valueSearch.select);

  console.log(typeof valueSearch.select)
  // filtra tabela pelo campo pesquisar
  const typeTable = valueSearch.searchTable != ""? 
  filterTable.filter(filterTable => filterTable.inputTitle.includes(valueSearch.searchTable) 
    || filterTable.inputCategory.includes(valueSearch.searchTable)) 
    : filterTable

  return (
    <div className="div_table_input">
      <div className="title_table_input">
        <section className="section_title_table_register">
          <div>
            <h2>Registro</h2>
          </div>
          <div className="div_type_register">
            <section className="section_type_register">
              <div>
                <div className="tag_output"/>
              </div>
              <div>
                <p>Entrada</p>
              </div>
            </section>
            <section className="section_type_register">
              <div>
                <div className="tag_input"/>
              </div>
              <div>
                <p>Saida</p>
              </div>
            </section>
            <section className="section_select_filter_input_output">
              <select name="select" className="style_select_table" onChange={onChangeFilter}>
                <option value="all" selected></option>
                <option name="filterInput" value="input">Entrada</option>
                <option name="filterOutput" value="output">Saida</option>
              </select>
            </section>
          </div>
        </section>
        <div className="navbar_table">
          <div>
            <input type="text" id="search" name="searchTable" placeholder="Pesquisar" autoComplete="off" onChange={onChangeFilter}/>
          </div>
          <div className="div_button_register_table">
            <NavLink  className={({isActive}) => (isActive ? styles.active : '')} to='/formEntrada' >
                <button className="button_register_table"><p>Cadastrar</p></button>        
            </NavLink>
          </div>
        </div>
      </div>
        <table id="customers" className="custonInput">
          <tr>
            <td>Titulo</td>
            <td>Categoria</td>
            <td>Valor</td>
            <td>Data</td>
            <td>Editar / Excluir</td>
          </tr>

          {
            
            typeTable.map(table => (
                  <IncomeTransaction
                    key={table.id}
                    incomeTransaction={table}
                  />
                ))
            
            }     
        </table>
    </div>
  );
};

export default IncomeList;
