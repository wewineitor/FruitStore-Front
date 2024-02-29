import { Typography, Box, Avatar } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { Link } from 'wouter';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';

const Header = () => {
    return (
        <Box sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'row',
            gap: 3,
        }}>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
            <Typography variant="h5">
                <Link to='/' style={{textDecoration: 'none', color: 'black'}}><HomeIcon/>Inicio</Link>
            </Typography>
            <Typography variant="h5">
                <Link to='/' style={{textDecoration: 'none', color: 'black'}}><StoreIcon/>Tienda</Link>
            </Typography>
            <Typography variant="h5">
                <Link to='/' style={{textDecoration: 'none', color: 'black'}}><LocalGroceryStoreIcon/>Carrito</Link>
            </Typography>
        </Box>
    )
}

export default Header