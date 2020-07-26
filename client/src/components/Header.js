import React from 'react';
import { logOut } from '../utils';
import AppButton from './AppButton';


const HeaderInfo = (props) => {
    const handleClick = async (event) => {
        const response = await logOut();
        console.log(response);
        document.location = '/';
    };

    return (
        <div className='headerInfo'>
            <img src="./img/logo.jpg" alt="Logo de empresa" />
            <AppButton textButton={'Cerrar Sesión'} handle={handleClick} />
        </div>
    );
};

export default HeaderInfo;
