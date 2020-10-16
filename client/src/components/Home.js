import React from 'react';

const Home = (props) => {
	return (
		<>
			<div className="content_header">
				<h1>Inicio</h1>
				<p>Tu herramienta de gestión de inventarios y ventas</p>
			</div>
			<div className="container">
				<div className="content_container">
					<h3>Estado actual</h3>
					<div className="cards_container">
						<div>
							<h2>Ventas totales del día</h2>
							<p>$3500.00</p>
						</div>
						<div>
							<h2>Ventas totales del mes</h2>
							<p>$12300.21</p>
						</div>
					</div>
				</div>
				<div className="actions_container">

				</div>
			</div>
		</>
	);
};

export default Home;
