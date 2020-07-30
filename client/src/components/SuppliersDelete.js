import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { deleteData } from '../utils';

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

export default function SuppliersDelete({ supplier }) {
    const classes = useStyles();

    const submitHandle = async (e) => {
        e.preventDefault();

        let confirmation = false;
        confirmation = window.confirm(`¿Seguro que desea eliminar al proveedor ${supplier.razonSocial}?`);

        if (confirmation) {
            const res = await deleteData(`/api/suppliers/${supplier._id}`);
            if (res === 200) {
                alert('Se eliminó documento');
                document.location = '/suppliers/delete';
            } else {
                alert('Falla en la eliminación de documento');
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
                        Eliminar Proveedor
                    </Button>
                </form>
            </div>
        </Container>
    );
}
