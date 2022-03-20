import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./Balance.css"

const Balance = () => {
  const { incomeTransactions } = useContext(GlobalContext);

  const incomeAmounts = incomeTransactions.map(
    incomeTransaction => incomeTransaction.inputValue
  );

  const totalIncome = incomeAmounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div>
      <main className="cards">
        <section className="card amount">
          <div className="body_card">
            <div className="title_card">
              <h3>Entrada</h3>
            </div>
            <div className="value_card">
              <p className="value_card_p">R$</p><span>{totalIncome}</span>
            </div>   
          </div> 
        </section>

        <section className="card output">
          <div className="body_card">
            <div className="title_card">
              <h3>Saída</h3>
            </div>
            <div className="value_card">
              <p className="value_card_p">R$</p><span>{totalIncome}</span>
            </div>  
          </div> 
        </section>

        <section className="card input">
          <div className="body_card">
            <div className="title_card">
              <h3>Saldo</h3>
            </div>
            <div className="value_card">
              <p className="value_card_p">R$</p><span>{"123"}</span>
            </div>  
          </div> 
        </section>
      </main>
           
    </div>
    
  );
};

export default Balance;