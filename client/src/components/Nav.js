import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import ContactsOutlinedIcon from '@material-ui/icons/ContactsOutlined';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';

const Nav = () => {

	return (
		<div className='navbar'>
			<img src="/img/foto-perfil.jpg" alt="Foto de perfil" />
			<h3>Nombre de usuario</h3>
			<Divider />
			<List component="nav" aria-label="main mailbox folders">
				<Link to='/'>
					<ListItem button>
						<ListItemIcon> <HomeOutlinedIcon /> </ListItemIcon>
						<ListItemText primary="Inicio" />
					</ListItem>
				</Link>
				<Link to='/sales'>
					<ListItem button>
						<ListItemIcon> <MonetizationOnOutlinedIcon /></ListItemIcon>
						<ListItemText primary="Venta" />
					</ListItem>
				</Link>
				<Link to='/clients'>
					<ListItem button>
						<ListItemIcon> <ContactsOutlinedIcon /> </ListItemIcon>
						<ListItemText primary="Clientes" />
					</ListItem>
				</Link>
				<Link to='/suppliers'>
					<ListItem button>
						<ListItemIcon> <LocalShippingOutlinedIcon /> </ListItemIcon>
						<ListItemText primary="Proveedores" />
					</ListItem>
				</Link>
				<Link to='/reports'>
					<ListItem button>
						<ListItemIcon> <AssessmentOutlinedIcon /> </ListItemIcon>
						<ListItemText primary="Reportes" />
					</ListItem>
				</Link>
			</List>
			<Divider />
		</div>
	);
};

export default Nav;
