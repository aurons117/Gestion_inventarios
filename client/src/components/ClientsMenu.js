import React from 'react';
import Button from '@material-ui/core/Button';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}));

export default function ClientsMenu() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button component={Link} to='/clients/search' className="navLinks">Buscar</Button>
            <Button component={Link} to='/clients/add' className="navLinks">Agregar</Button>
            <Button component={Link} to='/clients/edit' className="navLinks">Editar</Button>
            <Button component={Link} to='/clients/delete' className="navLinks">Eliminar</Button>
        </div>
    );
}
