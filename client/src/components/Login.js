import React, { useState } from 'react';

const Login = (props) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const submitButton = async (event) => {
		event.preventDefault();
		const url = '/api/login';
		const data = {
			email: email,
			password: password
		};

		const res = await fetch(url, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			},
			// credentials: 'same-origin'
		});
		const response = await res.json();
		console.log(response);
	};

	return (
		<>
			<h1>Iniciar sesión</h1>
			<form className='loginContainer'>
				<label htmlFor="mailLabel">Correo electrónico:</label><br />
				<input type="text" id="mailInput" name="mailInput" value={email} onChange={e => setEmail(e.target.value)} /><br />
				<label htmlFor="passwordLabel">Contraseña:</label><br />
				<input type="password" id="passwordInput" name="passwordInput" value={password} onChange={e => setPassword(e.target.value)} /><br /><br />
				<input className='loginButton' type="submit" value="Acceder" onClick={submitButton} />
			</form>
		</>
	);
};

export default Login;
