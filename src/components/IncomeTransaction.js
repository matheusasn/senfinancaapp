import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeTransaction = ({ incomeTransaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  var timeElapsed = Date.now();
  var today = new Date(timeElapsed);

  return (
    <tr className="tr_table">
      <td>
        <span className="transaction-text">{incomeTransaction.inputTitle}</span>
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
      <td>
        <button
          onClick={() => deleteTransaction(incomeTransaction.id)}
          className="delete-btn"
        >
          <i className="fas fa-trash"></i>
        </button>
      </td>
    </tr>
  );
};

export default IncomeTransaction;
