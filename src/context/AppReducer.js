export default (state, action) => {
  switch (action.type) {
    case "ADD_INCOME":
      return {
        ...state,
          incomeTransactions: [action.payload, ...state.incomeTransactions]
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        incomeTransactions: state.incomeTransactions.filter(
          incomeTransaction => incomeTransaction.id !== action.payload
        )
      };
    case "EDIT_TRANSACTION":
      const registers = state.incomeTransactions
      const registerIndex = registers.findIndex((reg => reg.id === action.payload.id))
      registers[registerIndex] = action.payload;

      return {
        ...state,
          incomeTransactions: registers,
      }

    default:
      return state;
  }
};
