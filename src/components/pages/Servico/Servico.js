//import "./Teste.css";
//import Banner from "../../Banner";
import Header from "../../Header/Header";

import React from "react";
import styles from"./Servico.module.css";
import '../../../global1.css';
import FotoServico from '../../../img/city4.jpg';

function Servico() {
  return (
    <>
    <div className="conteudo_principal">
      <Header />   
            
         <div className={styles.container1}>       
          <div className={styles.text}>
            <h2>Fretamento</h2>                            
                <p>lorespum dolor sit amet asdada lorespum dolor sit amet asdada lorespum dolor sit amet asdada
                lorespum dolor sit amet asdada lorespum dolor sit amet asdada lorespum dolor sit amet asdada
                lorespum dolor sit amet asdada lorespum dolor sit amet asdada lorespum dolor sit amet asdada
                lorespum dolor sit amet asdada lorespum dolor sit amet asdada lorespum dolor sit amet asdada
                lorespum dolor sit amet asdada lorespum dolor sit amet asdada lorespum dolor sit amet asdada</p>
                <h3>Dicas Úteis</h3>
                <p>lorespum dolor sit amet asdada lorespum dolor sit amet asdada lorespum dolor sit amet asdada
                lorespum dolor sit amet asdada lorespum dolor sit amet asdada lorespum dolor sit amet asdada
                lorespum dolor sit amet asdada lorespum dolor sit amet asdada lorespum dolor sit amet asdada
                lorespum dolor sit amet asdada lorespum dolor sit amet asdada lorespum dolor sit amet asdada</p>
                </div>              
                <div className={styles.image}><img src={FotoServico} alt="foto onibus"/>
                </div>
       
         </div>
         </div>
         
    </>
  );
}

export default Servico;
