import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignIn({ history }) {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitButton = async (event) => {
        event.preventDefault();
        const url = '/api/login';
        const dataLogin = {
            email: email,
            password: password
        };
        try {
            const res = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(dataLogin),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            // const data = await res.json();
            if (res.status === 201) {
                history.push('/');
            } else {
                alert("Acceso denegado");
                setEmail("");
                setPassword("");
            }

        } catch (error) {
            console.log("Error");
        }
    };

    return (
        <Container component="main" maxWidth="xs" className="layout__login">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Autenticación
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Correo electrónico"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Contraseña"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={submitButton}>
                        Acceder
                    </Button>

                </form>
            </div>
        </Container>
    );
}