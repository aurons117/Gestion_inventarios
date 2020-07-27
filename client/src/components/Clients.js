import React from 'react';
import ClientsMenu from './ClientsMenu';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ClientsSearch from './ClientsSearch';

function Clients() {
    const { path } = useRouteMatch();
    return (
        <>
            <h1>Clientes</h1>
            <ClientsMenu />
            <Switch>
                <Route path={path} exact >
                    <ClientsSearch />
                </Route>
                <Route path={`${path}/search`} exact >
                    <h2>Buscar</h2>
                </Route>
                <Route path={`${path}/add`} exact >
                    <h2>Añadir</h2>
                </Route>
                <Route path={`${path}/edit`} exact >
                    <h2>Editar</h2>
                </Route>
                <Route path={`${path}/delete`} exact >
                    <h2>Eliminar</h2>
                </Route>
            </Switch>
        </>
    );
}

export default Clients;
