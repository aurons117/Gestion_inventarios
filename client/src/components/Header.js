import React from 'react';
import { Link } from 'react-router-dom';

const HeaderInfo = () => {
    return (
        <div className='headerInfo'>
            <img src="./img/logo.jpg" alt="Logo de empresa" />
            <button><Link to='/login'>Iniciar sesión</Link></button>
        </div>
    );
};

export default HeaderInfo;
