import './Galeria.css'; // Importar o CSS para estilização
import '../../../global1.css';

import Header from '../../Header/Header';
import Footer from '../../Footer';


import foto from '../../../img/bus1.png'
import foto1 from '../../../img/bus2.png'
import foto2 from '../../../img/bus3.png'
import foto3 from '../../../img/city4.jpg'

const PhotoGallery = () => {

  return (<>

<div className="conteudo_principal">
    
    <Header />     
    <div className="home">      
        <h1>Galeria de Fotos</h1>
        </div>

    <div className="gallery">
       <div className="photo"><img src={foto} alt="foto onibus"/>
           <div className="btn">NeoBus</div>      
      </div>    
      <div className="photo"><img src={foto1} alt="foto onibus"/>
           <div className="btn">NeoBus</div>      
      </div>    
      <div className="photo"><img src={foto2} alt="foto onibus"/>
           <div className="btn">NeoBus</div>      
      </div>    
      <div className="photo"><img src={foto3} alt="foto onibus"/>
           <div className="btn">NeoBus</div>      
      </div>    
      <div className="photo"><img src={foto1} alt="foto onibus"/>
           <div className="btn">NeoBus</div>      
      </div>    
      <div className="photo"><img src={foto1} alt="foto onibus"/>
           <div className="btn">NeoBus</div>      
      </div>    
      <div className="photo"><img src={foto3} alt="foto onibus"/>
           <div className="btn">NeoBus</div>      
      </div>    
      <div className="photo"><img src={foto1} alt="foto onibus"/>
           <div className="btn">NeoBus</div>      
      </div>       
    </div>
    <Footer />
    </div>
    </>
    
  );
};

export default PhotoGallery;



