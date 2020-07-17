import React from 'react';

const Login = () => {

	const submitButton = (event) => {
		event.preventDefault();
	};

	return (
		<>
			<h1>Iniciar sesión</h1>
			<form className='loginContainer'>
				<label htmlFor="fname">Correo electrónico:</label><br />
				<input type="text" id="fname" name="fname" /><br />
				<label htmlFor="lname">Contraseña:</label><br />
				<input type="password" id="lname" name="lname" /><br /><br />
				<input className='loginButton' type="submit" value="Submit" onClick={submitButton} />
			</form>
		</>
	);
};

export default Login;
