// import React from 'react';
// import { Link } from 'react-router-dom';

// export async function fetchData(setLogged, setToken) {
//     const url = '/api/validate';
//     let res = await fetch(url, {
//         method: 'GET',
//         credentials: 'same-origin'
//     });
//     if (res.status !== 400) {
//         setLogged(<button onClick={async () => {
//             const res = await fetch('/api/logout', {
//                 method: 'GET',
//                 credentials: 'same-origin'
//             });
//             const data = await res.json();
//             console.log(data);
//             setToken(null);
//         }}><Link to='/'>Cerrar Sesión</Link></button>);
//     } else {
//         setLogged(<button><Link to='/login'>Iniciar sesión</Link></button>);
//     }
// }

export async function isLogin() {
    const url = '/api/validate';
    let res = await fetch(url, {
        method: 'GET',
        credentials: 'same-origin'
    });
    if (res.status === 400) {
        return false;
    } else {
        return true;
    }
}

export async function logOut() {
    const url = '/api/logout';
    let res = await fetch(url, {
        method: 'GET',
        credentials: 'same-origin'
    });
    if (res.status === 400) {
        return false;
    } else {
        return true;
    }
}
