import React from "react";
import styles from "./Home.module.css";
import Header from "../../Header/Header";
import Banner from "../../Banner";

import foto from '../../../img/bus1.png'
import foto1 from '../../../img/bus2.png'
import foto2 from '../../../img/bus3.png'
import Footer from '../../Footer';


function Home() {
  return (
    <>  
         
      <Header /> 
      <div className={styles.home}>      
        <h1>Bem-vindo à Expresso Gordinho</h1>
        </div>
        <Banner />       

      <div className="conteudo-missao-visao-valores">
           <div className="conteudo-texto-p">         
                    <p><strong>&diams; Missão</strong> A Gordinho tur está pronta para atendê-lo. 
                    Nossa moderna frota de ônibus busca sempre oferecer total segurança e 
                    comodidade aos nossos clientes.</p>      
           </div>
           <div className="conteudo-texto-p">  
                      <p><strong>&diams; Visão</strong> Visamos sempre o bem-estar e a qualidade para o cliente,
                        atendendo ás normas mais exigentes de acordo com o nosso código de ética no trabalho, 
                      e com inspeções veiculares conforme exigências legais.</p>     
           </div>
           <div className="conteudo-texto-p">     
                      <p><strong>&diams; Valores</strong> Qualidade | Segurança | Confiabilidade
                      São algumas das diretrizes, buscadas através de serviços de manutenção periódicas nos
                      veículos e treinamento constante dos funcionários.</p>
           </div>
      </div>    
      <div className="site-content">
        <p>Realizamos frequentemente: Manutenções corretivas, preventivas 
          e preditivas, bem como inspeções veiculares conforme exigências legais.
           As manutenções são realizadas por plano interno, por equipe treinada em 
           intervalos de Kilometragem pré - determinado.</p>
        </div>
        
        <h2>Conheça nossa frota</h2>       

      <div className="fotos-onibus">
        <div className="box"><img src={foto} alt="foto onibus"/>
        <div className="btn">NeoBus</div>
        </div>        
        <div className="box"><img src={foto1} alt="foto-onibus"/>
        <div className="btn">Solar</div></div>
        <div className="box"><img src={foto2} alt="foto_onibus"/>
        <div className="btn">G6</div></div>  
        <br />      
        <hr className="custom-hr" />          
        </div>  
         <div>          
         
        </div>      
        <div className="frase">"A Gordinho Tur não faz o mundo rodar, mas faz com que a viajem valha a pena"</div>
        <br />
        <div className="orcamento">        
              <h2>Se Interessou?</h2>      
              <div className="orcamento-btn">Solicite um Orçamento</div>    
        </div>       
        <Footer />  
        
    </>
  );
}

export default Home;
