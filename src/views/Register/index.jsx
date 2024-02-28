import { Avatar, Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Register = () => {

    
    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>

                <Typography component="h1" variant="h5">
                    Registro
                </Typography>

                <Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="name"
                                required
                                fullWidth
                                id="name"
                                label="Nombre(s)"
                                autoFocus
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Apellidos"
                                name="lastName"
                            />
                        </Grid>
                    </Grid>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Correo electronico"
                        name="email"
                        autoComplete="email"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="phone"
                        label="Telefono"
                        name="phone"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="address"
                        label="Direccion"
                        name="address"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Contrasena"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Registrarse
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}

export default Register