/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { fetchData } from '../utils';

export default function ClientsSearch() {
    const [clients, setClients] = useState(['test1', 'test2']);

    useEffect(() => {
        async function getClients() {
            const data = await fetchData('/api/clients', 'GET');
            console.log(data);
            setClients(data);
        }
        getClients();
    }, []);

    return (
        <div style={{ width: 300 }}>
            <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
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

// import React, { useState, useEffect } from 'react';
// import { fetchData } from '../utils';
// import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';

// const useStyles = makeStyles((theme) => ({
//     formControl: {
//         margin: theme.spacing(1),
//         minWidth: 120,
//     },
//     selectEmpty: {
//         marginTop: theme.spacing(2),
//     },
// }));

// export default function ClientsSearch() {
//     const classes = useStyles();
//     const [state, setState] = React.useState({
//         age: '',
//         name: 'hai',
//     });

//     const handleChange = (event) => {
//         const name = event.target.name;
//         setState({
//             ...state,
//             [name]: event.target.value,
//         });
//     };

//     const [clients, setClients] = useState(['test1', 'test2']);

//     useEffect(() => {
//         async function getClients() {
//             const data = await fetchData('/api/clients', 'GET');
//             setClients(data);
//         }
//         getClients();
//     }, []);

//     return (
//         <div>
//             <FormControl variant="filled" className={classes.formControl}>
//                 <InputLabel htmlFor="filled-age-native-simple">Cliente</InputLabel>
//                 <Select
//                     native
//                     value={state.age}
//                     onChange={handleChange}
//                     inputProps={{
//                         name: 'age',
//                         id: 'filled-age-native-simple',
//                     }}
//                 >
//                     <option aria-label="None" value="" />
//                     {
//                         clients.map((client) => <option value={client.nombre}>{client.nombre}</option>)
//                     }
//                 </Select>
//             </FormControl>
//         </div>
//     );
// }
