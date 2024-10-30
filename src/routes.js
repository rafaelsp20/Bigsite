import Servico from "./components/pages/Servico/Servico";
import Galeria from "./components/pages/Galeria/Galeria";
//import ContatoForm from "./components/pages/Contato/Contato1";
import Teste from "./components/pages/Teste/Teste";



import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Teste />} />
        <Route path="/servico" element={<Servico />} />
        <Route path="/galeria" element={<Galeria />} />       
        </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
