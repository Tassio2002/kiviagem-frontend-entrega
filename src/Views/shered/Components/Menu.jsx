import React from 'react';
import { Link } from 'react-router-dom';
import LogoMenu from './Logo';
import '../css/menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';



const Menu = () => {
    return ( 
        <nav className='menu-nav'>
            <LogoMenu />


            <Link to="/" className='menu-link'>
                <div className='link-box'>
                    <div className='icons'>
                        <FontAwesomeIcon icon={faHome} className='icon'/>
                    </div>  
                    <span>Página inicial</span>
                </div>
            </Link>
            
            <Link to="/Destinos" className='menu-link'>
                <div className='link-box'>
                    <div className='icons'>
                        <FontAwesomeIcon icon={faPlane} className='icon'/>
                    </div>             
                    <span>Destinos</span>
                </div>
            </Link>

            <Link to="/Pacotes" className='menu-link'>
                <div className='link-box'>
                    <div className='icons'>
                        <FontAwesomeIcon icon={faCube} className='icon'/>
                    </div>    
                    <span>Pacotes</span>   
                </div>
            </Link>

            <Link to="/Contato" className='menu-link'>
            <div className='link-box'>
                <div className='icons'>
                    <FontAwesomeIcon icon={faInfoCircle} className='icon'/>
                </div>  
                <span>Contato</span>               
            </div> 
            </Link>   

            <Link to="/ClienteCreate" className='menu-link'>
            <div className='link-box'>
                <div className='icons'>
                    <FontAwesomeIcon icon={faDatabase} className='icon'/>
                </div>  
                <span>CRUD</span>               
            </div> 
            </Link>                  
        </nav>    
     );
}
 
export default Menu;