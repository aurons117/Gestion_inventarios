import React, { useState, useEffect } from 'react';
import ReportsMenu from './ReportsMenu';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { fetchData } from '../utils';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '80%'
    }
}));

function Reports() {
    const classes = useStyles();
    const { path } = useRouteMatch();

    const [Reports, setReports] = useState([]);
    const [search, setSearch] = useState('');
    // const [filteredReports, setFilteredReports] = useState();

    useEffect(() => {
        async function getReports() {
            const data = await fetchData('/api/Reports');
            setReports(data);
        }
        getReports();
    }, []);

    const filteredReports = Reports.filter(client =>
        client.nombre.toLowerCase().includes(search.toLowerCase())
    );

    return (

        <div className={classes.root}>
            <h1>Módulo de reportes</h1>
            <ReportsMenu />
            <Switch>
                <Route path={path} exact >
                    <p>Seleccionar una opción</p>
                </Route>
                <Route path={`${path}/dia`} exact >
                    <GraficaVentasDiarias data={filteredReports} />
                </Route>
                <Route path={`${path}/masvendidos`} exact >
                    <h2>Más vendidos</h2>
                </Route>
                <Route path={`${path}/existencias`} exact >
                    <h2>Stock</h2>
                </Route>
                <Route path={`${path}/objetivodiario`} exact >
                    <h2>Objetivo del día</h2>
                </Route>
            </Switch>
        </div>
    );
}

export default Reports;
