import React, { useState } from 'react';

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const submitButton = async (event) => {
		event.preventDefault();
		const url = '/api/login';
		const dataLogin = {
			email: email,
			password: password
		};
		try {
			const res = await fetch(url, {
				method: 'POST',
				body: JSON.stringify(dataLogin),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const data = await res.json();
			console.log(data.status);
			document.location = '/';
		} catch (error) {
			console.log("Error");
		}
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
