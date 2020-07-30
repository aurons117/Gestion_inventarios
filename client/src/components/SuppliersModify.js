import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { putData } from '../utils';

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

export default function SuppliersModify({ supplier }) {
    const classes = useStyles();

    const [razonSocial, setRazonSocial] = useState();
    const [rfc, setRFC] = useState();
    const [emailContacto, setEmailContacto] = useState();
    const [telefono, setTelefono] = useState();
    const [domicilio, setDomicilio] = useState();

    const submitHandle = async (e) => {
        e.preventDefault();

        const dataSubmit = {
            razonSocial: razonSocial || supplier.razonSocial,
            rfc: rfc || supplier.rfc,
            emailContacto: emailContacto || supplier.emailContacto,
            telefono: telefono || supplier.telefono,
            domicilio: domicilio || supplier.domicilio,
        };
        
        const res = await putData(`/api/suppliers/${supplier._id}`, dataSubmit);
        if (res === 200) {
            alert('Se creó documento');
            document.location = '/suppliers/search';
        } else {
            alert('Falla en la creación de documento');
        }
    };

    return (
        <Container component="main" >
            <div className={classes.paper}>
                <p>Coloque los campos que desea cambiar</p>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="razonSocial"
                                id="razonSocial"
                                label="Razon Social"
                                required
                                fullWidth
                                variant="outlined"
                                onChange={(e) => setRazonSocial(e.target.value)}
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
                                name="emailContacto"
                                id="emailContacto"
                                label="Correo electrónico de contacto"
                                required
                                fullWidth
                                variant="outlined"
                                type="email"
                                onChange={(e) => setEmailContacto(e.target.value)}
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
                                name="domicilio"
                                id="domicilio"
                                label="Domicilio"
                                required
                                fullWidth
                                variant="outlined"
                                onChange={(e) => setDomicilio(e.target.value)}
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
                        Editar Proveedor
                    </Button>
                </form>
            </div>
        </Container>
    );
}
