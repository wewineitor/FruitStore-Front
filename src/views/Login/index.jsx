import { Avatar, Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link, useLocation } from 'wouter';
import { useForm } from 'react-hook-form';

const Login = () => {

    const { register, handleSubmit } = useForm()
    const [location, navigate] = useLocation();

    const onSubmit = async(data) => {
        console.log(data)
        try {
            const response = await fetch('http://localhost:8080/user/login', {
                method: 'post',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "email": data.email,
                    "password": data.password
                })
            })
    
            const json = await response.json()
            console.log(json)
            navigate("register")
    
        }
        catch(error) {
            console.log("Ocurio un error: ", error)
        }
    }

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
                    Inicio de sesion
                </Typography>

                <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Correo electronico"
                        name="email"
                        autoComplete="email"
                        {...register("email")}
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Contrasena"
                        type="password"
                        id="password"
                        {...register("password")}
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Ingresar
                    </Button>

                    <Grid container>
                        <Grid item>
                            <Link to="/register">
                                {"No tienes una cuenta? Creala aqui"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
}

export default Login