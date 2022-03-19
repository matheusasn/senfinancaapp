import React from 'react';
import styles from './Home.module.css';
import Balance from '../../components/balance/Balance';
import IncomeList from '../../components/IncomeList';
import ExpenseList from '../../components/ExpenseList'

function Home(){
  return (
    <>
      <div className={styles.section_home}>
        <section>
          <Balance/>
        </section>
        <section>
          <IncomeList/>
        </section>
        <section>
          <ExpenseList/>
        </section>
      </div>   
    </>
  );
}
  
export default Home;