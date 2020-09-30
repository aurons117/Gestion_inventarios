import React from 'react';
import { useHistory } from 'react-router-dom';
import { logOut } from '../utils';
import AppButton from './AppButton';


const HeaderInfo = () => {
    const history = useHistory();
    
    const handleClick = async (event) => {
        const response = await logOut();
        console.log(response);
        history.push('/login');
    };

    return (
        <div className='headerInfo'>
            <img src="./img/logo.jpg" alt="Logo de empresa" />
            <AppButton textButton={'Cerrar Sesión'} handle={handleClick} />
        </div>
    );
};

export default HeaderInfo;
