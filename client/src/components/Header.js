import React from 'react';
import { useHistory } from 'react-router-dom';
import { logOut } from '../utils';
// import AppButton from './AppButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const HeaderInfo = () => {
    const history = useHistory();

    const handleClick = async (event) => {
        const response = await logOut();
        console.log(response);
        history.push('/login');
    };

    return (
        <>
            <div className='headerInfo' >
                <img src='' alt='Logo de la empresa' />
                <div className='header_quit' onClick={handleClick}>
                    <List component="nav" aria-label="main mailbox folders">
                        <ListItem button>
                            <ListItemIcon> <ExitToAppIcon /> </ListItemIcon>
                            <ListItemText primary="Salir" />
                        </ListItem>
                    </List>
                </div>
            </div>
        </>
    );
};

export default HeaderInfo;
