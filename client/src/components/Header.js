import React from 'react';
import { logOut } from '../utils';

const HeaderInfo = (props) => {
    const handleClick = async (event) => {
        const response = await logOut();
        console.log(response);
        document.location = '/';
    };

    return (
        <div className='headerInfo'>
            <img src="./img/logo.jpg" alt="Logo de empresa" />
            <button onClick={handleClick}>Cerrar Sesión</button>
        </div>
    );
};

export default HeaderInfo;
