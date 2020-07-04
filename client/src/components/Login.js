import React from 'react';

const Login = () => {

	const submitButton = (event) => {
		event.preventDefault();
	};

	return (
		<>
			<form>
				<label htmlFor="fname">First name:</label><br />
				<input type="text" id="fname" name="fname" /><br />
				<label htmlFor="lname">Last name:</label><br />
				<input type="text" id="lname" name="lname" /><br /><br />
				<input type="submit" value="Submit" onClick={submitButton} />
			</form>
		</>
	);
};

export default Login;
