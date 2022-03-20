import React, { useContext } from "react";
import { NavLink } from 'react-router-dom'
import { GlobalContext } from "../context/GlobalState";

const IncomeTransaction = ({ incomeTransaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  var timeElapsed = Date.now();
  var today = new Date(timeElapsed);

  return (
    <tr className="tr_table">
      <td className="display_box_td_type">
        <div className="margin_right_type">
          <div className={"type_input_"+incomeTransaction.inputType}></div>
        </div>
        <dic className="type_input_title">
          <span className="transaction-text">{incomeTransaction.inputTitle}</span>
        </dic>
      </td>
      <td>
        <span className="transaction-text">{incomeTransaction.inputCategory}</span>
      </td>
      <td>
        <span className="transaction-amount">
          R${incomeTransaction.inputValue}
        </span>
      </td>
      <td>
        <span>{today.toLocaleDateString()}</span>
      </td>
      <td className="display_button_table">
        <div className="delete-btn">
          <NavLink to={'/formEntrada/'+incomeTransaction.id}>
            <button >
              <img className="icon_width_table" alt="Edit" src={require('../assets/icons/edit.png')}/>  
            </button>
          </NavLink>
        </div>
        <div className="delete-btn">
          <button onClick={() => deleteTransaction(incomeTransaction.id)} >
            <img className="icon_width_table" alt="Deletar" src={require('../assets/icons/delete.png')}/>  
          </button>
        </div>
      </td>
    </tr>
  );
};

export default IncomeTransaction;
