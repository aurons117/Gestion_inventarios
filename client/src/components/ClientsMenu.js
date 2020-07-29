import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function ClientsMenu() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
                <Button component={Link} to='/clients/search'>Buscar</Button>
                <Button component={Link} to='/clients/add'>Añadir</Button>
                <Button component={Link} to='/clients/edit'>Editar</Button>
                <Button component={Link} to='/clients/delete'>Eliminar</Button>
            </ButtonGroup>
        </div>
    );
}
