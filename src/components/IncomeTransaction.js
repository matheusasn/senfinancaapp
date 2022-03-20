import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeTransaction = ({ incomeTransaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  var timeElapsed = Date.now();
  var today = new Date(timeElapsed);

  return (
    <tr className="tr_table">
      <td>
        <span className="transaction-text">{incomeTransaction.inputType}</span>
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
        <div>
          <button onClick={() => deleteTransaction(incomeTransaction.id)} className="delete-btn">
            <img className="icon_width_table" alt="Edit" src={require('../assets/icons/edit.png')}/>  
          </button>
        </div>
        <div>
          <button onClick={() => deleteTransaction(incomeTransaction.id)} className="delete-btn">
            <img className="icon_width_table" alt="Deletar" src={require('../assets/icons/delete.png')}/>  
          </button>
        </div>
      </td>
    </tr>
  );
};

export default IncomeTransaction;
