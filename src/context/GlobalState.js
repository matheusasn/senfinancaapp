import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  incomeTransactions:
    JSON.parse(localStorage.getItem("incomeTransactions")) || []
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem(
      "incomeTransactions",
      JSON.stringify(state.incomeTransactions)
    );

  });

  const deleteTransaction = id => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    });
  };

  const editTransaction = register => {
    dispatch({
      type: "EDIT_TRANSACTION",
      payload: register      
    });
  };

  // const SearchTrasactionTable = valueSearchTrasactionTable => {
  //   dispatch({
  //     type: "SEARCH_VALUE",
  //     payload: valueSearchTrasactionTable
  //   });
  // } 

  const addIncome = incomeTransaction => {
    dispatch({
      type: "ADD_INCOME",
      payload: incomeTransaction
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        incomeTransactions: state.incomeTransactions,
        editTransaction,
        deleteTransaction,
        addIncome
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
