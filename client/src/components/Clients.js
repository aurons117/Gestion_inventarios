import React, { useState, useEffect } from 'react';
import ClientsMenu from './ClientsMenu';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ClientsSearch from './ClientsSearch';
import { makeStyles } from '@material-ui/core/styles';
import ClientsTable from './ClientsTable';
import { fetchData } from '../utils';
import ClientsAdd from './ClientsAdd';
import ClientsModify from './ClientsModify';
import ClientsDelete from './ClientsDelete';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '80%'
    }
}));

function Clients() {
    const classes = useStyles();
    const { path } = useRouteMatch();

    const [clients, setClients] = useState([]);
    const [search, setSearch] = useState('');
    // const [filteredClients, setFilteredClients] = useState();

    useEffect(() => {
        async function getClients() {
            const data = await fetchData('/api/clients');
            setClients(data);
        }
        getClients();
    }, []);

    const filteredClients = clients.filter(client =>
        client.rfc.toLowerCase().includes(search.toLowerCase())
    );

    return (

        <div className={classes.root}>
            <h1>Clientes</h1>
            <ClientsMenu />
            <Switch>
                <Route path={path} exact >
                    <p>Seleccionar una opción</p>
                </Route>
                <Route path={`${path}/search`} exact >
                    <ClientsSearch clients={clients} setSearch={setSearch} searching={'rfc'} />
                    <ClientsTable data={filteredClients} />
                </Route>
                <Route path={`${path}/add`} exact >
                    <ClientsAdd />
                </Route>
                <Route path={`${path}/edit`} exact >
                    <ClientsSearch clients={clients} setSearch={setSearch} searching={'rfc'} />
                    <ClientsModify client={filteredClients[0]} />
                </Route>
                <Route path={`${path}/delete`} exact >
                    <ClientsSearch clients={clients} setSearch={setSearch} searching={'rfc'} />
                    <ClientsDelete client={filteredClients[0]} />
                </Route>
            </Switch>
        </div>
    );
}

export default Clients;
