import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import "./table.css"

const ExpenseTransaction = ({ expenseTransaction }) => {
  const { deleteTransaction, editTransaction } = useContext(GlobalContext);

  return (
    <tr>
      <td>
        <span className="transaction-text">{expenseTransaction.outputTitle}</span>
      </td>
      <td>
        <span className="transaction-text">{expenseTransaction.outputCategory}</span>
      </td>
      <td>
        <span className="transaction-amount">
          R${expenseTransaction.outputValue}
        </span>
      </td>
      <td>
        <span>20/05/2022</span>
      </td>
      <td>
        <button
          onClick={() => deleteTransaction(expenseTransaction.id)}
          className="delete-btn"
        >
          <i className="fas fa-trash"></i>
        </button>
      </td>
    </tr>
  );
};

export default ExpenseTransaction;
