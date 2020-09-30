import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { deleteData } from '../utils';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        width: 'auto'
    },
}));

export default function ClientsDelete({ client }) {
    const classes = useStyles();
    const history = useHistory();

    const submitHandle = async (e) => {
        e.preventDefault();

        let confirmation = true;
        if (client.deudaActual > 0) {
            confirmation = window.confirm(`Seguro que desea eliminar al cliente ${client.nombre} con $${client.deudaActual} de deuda?`);
        }

        if (confirmation) {
            const res = await deleteData(`/api/clients/${client._id}`);
            if (res === 200) {
                alert('Se eliminó documento');
                history.push('/clients/delete');
            } else {
                alert('Falla en la creación de documento');
            }
        }

    };

    return (
        <Container component="main" >
            <div className={classes.paper}>
                <form className={classes.form} noValidate>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={submitHandle}
                        className={classes.submit}>
                        Eliminar Cliente
                    </Button>
                </form>
            </div>
        </Container>
    );
}
