/* eslint-disable no-use-before-define */
// import React, { useState, useEffect } from 'react';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
// import { fetchData } from '../utils';

export default function ClientsSearch({ setSearch, clients, value }) {

    function handleChange(e) {
        setSearch(e.target.value);
    }

    return (
        <div style={{ width: '30%' }}>
            <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                onKeyUp={handleChange}
                options={clients.map((client) => client.nombre)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Buscar Cliente"
                        margin="normal"
                        variant="outlined"
                        InputProps={{ ...params.InputProps, type: 'search' }}
                    />
                )}
            />
        </div>
    );
}
