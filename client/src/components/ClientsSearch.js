/* eslint-disable no-use-before-define */
// import React, { useState, useEffect } from 'react';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
// import { fetchData } from '../utils';

export default function ClientsSearch({ setSearch, clients, searching }) {

    function handleChange(e) {
        setSearch(e.target.value);
    }

    return (
        <div style={{ width: '30%' }}>
            <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                onKeyDown={handleChange}
                options={clients.map((client) => {
                    return client[searching];
                })}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Buscar Cliente por RFC"
                        margin="normal"
                        variant="outlined"
                        autoFocus
                        InputProps={{ ...params.InputProps, type: 'search' }}
                    />
                )}
            />
        </div>
    );
}
