import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styles from './Register.module.css'
import OutputForm from '../../components/outputForm/outputForm'

function RegisterOutput(){
  return (
    <div className={styles.card_register}>          
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
    
  export default RegisterOutput;