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
					<li> <Link to='/'> <HomeLogo className='icon' /> Inicio </Link> </li>
					<li> <Link to='/sales'> <SaleLogo className='icon' /> Registrar venta</Link> </li>
					<li> <Link to='/clients'> <ClientLogo className='icon' /> Registro de clientes</Link> </li>
					<li> <Link to='/suppliers'> <SupplierLogo className='icon' /> Registro de proveedores</Link> </li>
					<li> <Link to='/reports'> <ReportLogo className='icon' /> Generar reporte</Link> </li>
				</ul>
			</nav>
		</>
	);
};

export default Nav;
