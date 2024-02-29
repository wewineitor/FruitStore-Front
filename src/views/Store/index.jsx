import { Container, Grid, Card, CardMedia, CardContent, Typography, CardActions, Button, Box, CardActionArea } from '@mui/material';
import { useEffect, useState } from 'react';
import Header from '@components/header';

const Store = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        try {
            const fetchData = async () => {
                const request = await fetch("http://localhost:8080/fruit")
                const response = await request.json()
                console.log(response)
                setData(response)
            }

            fetchData()
        }
        catch (e) {
            console.log("Ocurrio un error: ", e)
        }
    }, [])
    return (
        <Container component="main" maxWidth="lg">
            <Header/>
            <Box sx={{
                marginTop: 8,
                marginBottom: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
                <Grid container spacing={2}>
                    {
                        data.map(fruit => (
                            <Grid key={fruit.id} item xs={12} sm={6} md={4} lg={4} xl={4}>
                                <Card style={{ height: '100%', overflow: 'hidden' }}>
                                    <CardActionArea>
                                        <CardMedia
                                            sx={{ height: 280 }}
                                            image={fruit.image}
                                            title="manzana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {fruit.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                ${fruit.price}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {fruit.description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>

                                    <CardActions>
                                        <Button size="small">Anadir al carrito</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>

        </Container>
    )
}

export default Store