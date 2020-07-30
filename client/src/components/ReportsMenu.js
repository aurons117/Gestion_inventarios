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

export default function reportsMenu() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
                <Button component={Link} to='/reports/dia'>Ventas del día</Button>
                <Button component={Link} to='/reports/masvendidos'>Productos más vendidos</Button>
                <Button component={Link} to='/reports/existencias'>Existencias</Button>
                <Button component={Link} to='/reports/objetivodiario'>Objetivo de ventas</Button>
            </ButtonGroup>
        </div>
    );
}
