import React from 'react';
import {ReactComponent as LogoDesktop} from '../assets/img/logo-completa.svg';
import {ReactComponent as LogoMobile} from '../assets/img/logo-compacta.svg';

import '../css/logo.css';

const LogoMenu = () => {
    return ( 
        <>
        <LogoDesktop className='logo-desktop' />
        <LogoMobile className='logo-mobile' />
        </>
        
     );
}
 
export default LogoMenu;