import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as HomeLogo } from '../styles/img/home.svg';
import { ReactComponent as SaleLogo } from '../styles/img/pencil.svg';
import { ReactComponent as ClientLogo } from '../styles/img/address-book.svg';
import { ReactComponent as SupplierLogo } from '../styles/img/books.svg';
import { ReactComponent as ReportLogo } from '../styles/img/pie-chart.svg';

const Nav = () => {
	return (
		<>
			<nav>
				<ul>
					<li> <HomeLogo className='icon' /> <Link to='/'>Inicio</Link> </li>
					<li> <SaleLogo className='icon' /> <Link to='/sales'>Registrar venta</Link> </li>
					<li> <ClientLogo className='icon' /> <Link to='/clients'>Registro de clientes</Link> </li>
					<li> <SupplierLogo className='icon' /> <Link to='/suppliers'>Registro de proveedores</Link> </li>
					<li> <ReportLogo className='icon' /> <Link to='/reports'>Generar reporte</Link> </li>
				</ul>
			</nav>
		</>
	);
};

export default Nav;
