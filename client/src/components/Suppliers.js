import React, { useState, useEffect } from 'react';
import SuppliersMenu from './SuppliersMenu';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import SuppliersSearch from './SuppliersSearch';
import { makeStyles } from '@material-ui/core/styles';
import SuppliersTable from './SuppliersTable';
import { fetchData } from '../utils';
import SuppliersAdd from './SuppliersAdd';
import SuppliersModify from './SuppliersModify';
import SuppliersDelete from './SuppliersDelete';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '80%'
    }
}));

function Suppliers() {
    const classes = useStyles();
    const { path } = useRouteMatch();

    const [suppliers, setSuppliers] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        async function getSuppliers() {
            const data = await fetchData('/api/suppliers');
            setSuppliers(data);
        }
        getSuppliers();
    }, []);

    const filteredSuppliers = suppliers.filter(supplier =>
        supplier.rfc.toLowerCase().includes(search.toLowerCase())
    );

    return (

        <div className={classes.root}>
            <h1>Proveedores</h1>
            <SuppliersMenu />
            <Switch>
                <Route path={path} exact >
                    <p>Seleccionar una opción</p>
                </Route>
                <Route path={`${path}/search`} exact >
                    <SuppliersSearch suppliers={suppliers} setSearch={setSearch} searching={'rfc'} />
                    <SuppliersTable data={filteredSuppliers} />
                </Route>
                <Route path={`${path}/add`} exact >
                    <SuppliersAdd />
                </Route>
                <Route path={`${path}/edit`} exact >
                    <SuppliersSearch suppliers={suppliers} setSearch={setSearch} searching={'rfc'} />
                    <SuppliersModify supplier={filteredSuppliers[0]} />
                </Route>
                <Route path={`${path}/delete`} exact >
                    <SuppliersSearch suppliers={suppliers} setSearch={setSearch} searching={'rfc'} />
                    <SuppliersDelete supplier={filteredSuppliers[0]} />
                </Route>
            </Switch>
        </div>
    );
}

export default Suppliers;
