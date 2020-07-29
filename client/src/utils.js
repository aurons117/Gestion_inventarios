// import React from 'react';
// import { Link } from 'react-router-dom';

export async function fetchData(url) {
    let res = await fetch(url, {
        method: 'GET',
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

export async function postData(url, reqData) {
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(reqData),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return res.status;
}

export async function putData(url, reqData) {
    const res = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(reqData),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return res.status;
}

export async function deleteData(url) {
    const res = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return res.status;
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
