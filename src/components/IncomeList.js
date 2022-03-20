import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import IncomeTransaction from "./IncomeTransaction";
import { NavLink } from 'react-router-dom'
import styles from '../components/navbar/NavBar'
import "./table.css"

const IncomeList = () => {
  
  const { incomeTransactions} = useContext(GlobalContext);

  console.log(incomeTransactions.map(incomeTransaction => (
    
      console.log(incomeTransaction.inputTitle === "asdfsaf"))
  ))

  const [valueSearch, setValueSearch] = useState({
    searchTable: "",
  });

  const onChangeIncome = (e) => {
    
    setValueSearch({ ...valueSearch, [e.target.name]: e.target.value });
  };

  const { searchTable } = valueSearch;
  
  // const onSubmitSearch = (e) =>{
  //   // e.preventDefault();

  //   if (searchTable !== ""){
  //     const SearchTrasaction = {
  //       valueSearch,
  //     }
      
  //     console.log(SearchTrasaction)

  //     SearchTrasactionTable(SearchTrasaction)
    
  //   }


  // }

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
              <select name="select" className="style_select_table">
                <option value="default" selected></option>
                <option value="filterInput">Entrada</option>
                <option value="filterOutput">Saida</option>
              </select>
            </section>
          </div>
        </section>
        <div className="navbar_table">
          <div>
            <input type="text" id="search" name="searchTable" value={searchTable} placeholder="Pesquisar" autoComplete="off" onChange={onChangeIncome}/>
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
