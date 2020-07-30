/* eslint-disable no-use-before-define */
// import React, { useState, useEffect } from 'react';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
// import { fetchData } from '../utils';

export default function SuppliersSearch({ setSearch, suppliers, searching }) {

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
                options={suppliers.map((supplier) => {
                    return supplier[searching];
                })}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Buscar proveedor por RFC"
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
