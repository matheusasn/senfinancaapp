import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styles from './Register.module.css'
import InputForm from '../../components/inputForm/InputForm'
import OutputForm from '../../components/outputForm/outputForm'

function Cadastro(){
  return (
    <div className={styles.card_register}>      
      <section className={styles.section_input}>
        <Card xl className={styles.body_card_input}>
          <CardContent>
            <Typography variant="h5" component="div" className={styles.title_card_register_input}>
              Cadastro
            </Typography>
            <Typography variant="body2">
              <ul>
                <InputForm/>
              </ul>
            </Typography>
          </CardContent>
        </Card>
      </section>          
      <section className={styles.section_output}>
        <Card xl className={styles.body_card_output}>
          <CardContent>
            <Typography variant="h5" component="div" className={styles.title_card_register_output}>
              Cadastrar Saída
            </Typography>
            <Typography variant="body2">
              
              <ul>
                <OutputForm/>
              </ul>
            </Typography>
          </CardContent>
        </Card>
      </section>
    </div>   
  );
}
    
  export default Cadastro;