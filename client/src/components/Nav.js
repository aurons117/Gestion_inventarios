import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
}));

const Nav = () => {
	const classes = useStyles();

	return (
		<>
			<nav>
				<div className={classes.root}>
					<List component="nav" aria-label="main mailbox folders">
						<Link to='/'><ListItem button>
							<ListItemIcon>
								<HomeOutlinedIcon />
							</ListItemIcon>
							<ListItemText primary="Inicio" />
						</ListItem></Link>
						<Link to='/sales'><ListItem button>
							<ListItemIcon>
								<MonetizationOnOutlinedIcon />
							</ListItemIcon>
							<ListItemText primary="Ventas" />
						</ListItem></Link>
						<Link to='/clients'><ListItem button>
							<ListItemIcon>
								<ContactsOutlinedIcon />
							</ListItemIcon>
							<ListItemText primary="Clientes" />
						</ListItem></Link>
						<Link to='/suppliers'><ListItem button>
							<ListItemIcon>
								<LocalShippingOutlinedIcon />
							</ListItemIcon>
							<ListItemText primary="Proveedores" />
						</ListItem></Link>
						<Link to='/reports'><ListItem button>
							<ListItemIcon>
								<AssessmentOutlinedIcon />
							</ListItemIcon>
							<ListItemText primary="Reportes" />
						</ListItem></Link>
					</List>
					<Divider />
				</div>
			</nav>
		</>
	);
};

export default Nav;
