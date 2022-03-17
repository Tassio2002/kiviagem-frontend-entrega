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
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';



const Menu = () => {

    /*Função para o dropdown*/
    const dropDownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);
    console.log(isActive)

    return (
        <nav className='menu-nav'>
            <Link to="/Index" className='menu-link'>
                <LogoMenu />
            </Link>

            <Link to="/Index" className='menu-link'>
                <div className='link-box'>
                    <div className='icons'>
                        <FontAwesomeIcon icon={faHome} className='icon' />
                    </div>
                    <span>Página inicial</span>
                </div>
            </Link>

            <Link to="/Destinos" className='menu-link'>
                <div className='link-box'>
                    <div className='icons'>
                        <FontAwesomeIcon icon={faPlane} className='icon' />
                    </div>
                    <span>Destinos</span>
                </div>
            </Link>

            <Link to="/Pacotes" className='menu-link'>
                <div className='link-box'>
                    <div className='icons'>
                        <FontAwesomeIcon icon={faCube} className='icon' />
                    </div>
                    <span>Pacotes</span>
                </div>
            </Link>

            <Link to="/Contato" className='menu-link'>
                <div className='link-box' >
                    <div className='icons'>
                        <FontAwesomeIcon icon={faInfoCircle} className='icon' />
                    </div>
                    <span>Contato</span>
                </div>
            </Link>


            <div className="link-box menu-link dropdown menu-container" onClick={onClick}>
                <div className="icons">
                    <FontAwesomeIcon icon={faDatabase} className="icon" />
                </div>
                <span>CRUD</span>
                <FontAwesomeIcon icon={faCaretDown} className="icon" id="down" />
            </div>

            <nav
                ref={dropDownRef}
                className={`menu ${isActive ? "active" : "inactive"} dropdown-itens`}
            >
                <ul>
                    <Link to="/ClienteCRUD" className='menu-link'>
                        <li>Clientes</li>
                    </Link>
                    <Link to="/destinoCRUD" className='menu-link'>
                        <li>Destinos</li>
                    </Link>
                    <Link to="/contatoCRUD" className='menu-link'>
                        <li>Contato</li>
                    </Link>
                </ul>
            </nav>


            {/* 
            <Link to="/ClienteCreate" className='menu-link'>
            <div className='link-box'>
                <div className='icons'>
                    <FontAwesomeIcon icon={faDatabase} className='icon'/>
                </div>  
                <span>CRUD</span>               
            </div> 
            </Link>   
            */}
        </nav>
    );
}

export default Menu;