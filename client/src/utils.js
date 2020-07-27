// import React from 'react';
// import { Link } from 'react-router-dom';

export async function fetchData(url, method) {
    let res = await fetch(url, {
        method: method,
        credentials: 'same-origin'
    });
    if (res.status !== 400) {
        const data = await res.json();
        return data;
    }
    else {
        return 'Error';
    }
}


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
