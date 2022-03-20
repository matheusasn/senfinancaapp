import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useParams } from "react-router-dom";
import EditForm from '../../components/editForm/EditForm'
import styles from './Register.module.css'

function RegisterInput(){

  const params = useParams();

  return (
    <div className={styles.card_register}>      
      <section className={styles.section_input}>
        <Card xl className={styles.body_card_input}>
          <CardContent>
            <Typography variant="h5" component="div" className={styles.title_card_register_input}>
              Editar Cadastro
            </Typography>
            <Typography variant="body2">
              <ul>
                <EditForm
                  idRegister={params.id}
                />
              </ul>
            </Typography>
          </CardContent>
        </Card>
      </section>  
    </div>   
  );
}
    
export default RegisterInput;