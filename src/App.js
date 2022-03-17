import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Menu from './Views/shered/Components/Menu';
import Index from './Views/Index/Index'
import IndexDestinos from './Views/Destinos/IndexDestinos';
import IndexPacotes from './Views/Pacotes/IndexPacotes';
import IndexContato from './Views/Contato/IndexContato';
import Footer from './Views/shered/Components/Footer';
import Error404Page from './Views/Error/Error404Page';
import ClientRead from './Views/crud/cliente/components/cliente-read/ClienteRead';
import ClienteCreate from './Views/crud/cliente/components/cliente-create/ClienteCreate';
import ContatoRead from './Views/crud/contato/contato-read/ContatoRead';
import DestinoRead from './Views/crud/destino/destino-read/DestinoRead';
import DestinoCreate from './Views/crud/destino/destino-create/DestinoCreate';



/*Criar um link pra tabela*/ 
function App() {
  return (
    <div className='principal'>
      <BrowserRouter>
        <Menu />
        <div className='flex-container'>
          <Routes>
            <Route path="/" element={<Index/>} />
            <Route path="/Index" element={<Index/>} />
            <Route path="/Destinos" element={<IndexDestinos/>} />
            <Route path="/Pacotes" element={<IndexPacotes/>} />
            <Route path="/Contato" element={<IndexContato/>} />
            <Route path="/ClienteCRUD" element={<ClientRead/>} />
            <Route path="/contatoCRUD" element={<ContatoRead/>} />
            <Route path="/destinoCRUD" element={<DestinoRead/>} />
            <Route path="/addCliente" element={<ClienteCreate/>} />
            <Route path="/addDestino" element={<DestinoCreate/>} />
            <Route path="/addContato" element={<IndexContato/>} />
            <Route path="/clientes/edit/:id" element={<ClienteCreate/>} />
            <Route path="/destinos/edit/:id" element={<DestinoCreate/>} />
            <Route path="/contatos/edit/:id" element={<IndexContato/>} />
            <Route path="*" element={<Error404Page/>} />
          </Routes>    
          <Footer />
          
        </div>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
