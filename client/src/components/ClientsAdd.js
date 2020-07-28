import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { postData } from '../utils';

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
    },
}));

export default function ClientsAdd() {
    const classes = useStyles();

    const [nombre, setNombre] = useState();
    const [rfc, setRFC] = useState();
    const [email, setEmail] = useState();
    const [telefono, setTelefono] = useState();
    const [credito, setCredito] = useState();
    const [deudaActual, setDeudaActual] = useState();

    const submitHandle = async (e) => {
        e.preventDefault();
        const dataSubmit = {
            nombre, rfc, email, telefono, credito, deudaActual
        };
        const res = await postData('/api/clients', dataSubmit);
        if (res === 200) {
            alert('Se creó documento');
            document.location = '/clients';
        } else {
            alert('Falla en la creación de documento');
        }
    };

    return (
        <Container component="main" >
            <div className={classes.paper}>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="nombre"
                                id="nombre"
                                label="Nombre Completo"
                                required
                                fullWidth
                                autoFocus
                                variant="outlined"
                                onChange={(e) => setNombre(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="rfc"
                                id="rfc"
                                label="RFC"
                                required
                                fullWidth
                                variant="outlined"
                                onChange={(e) => setRFC(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="email"
                                id="email"
                                label="Correo electrónico"
                                required
                                fullWidth
                                variant="outlined"
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="telefono"
                                id="telefono"
                                label="Teléfono"
                                required
                                fullWidth
                                variant="outlined"
                                type="number"
                                onChange={(e) => setTelefono(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="credito"
                                id="credito"
                                label="Crédito"
                                required
                                fullWidth
                                variant="outlined"
                                type="number"
                                onChange={(e) => setCredito(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="deudaActual"
                                id="deudaActual"
                                label="Deuda actual"
                                fullWidth
                                variant="outlined"
                                type="number"
                                onChange={(e) => setDeudaActual(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={submitHandle}
                        className={classes.submit}>
                        Crear cliente
                    </Button>
                </form>
            </div>
        </Container>
    );
}
