import { Box, Container, Typography } from '@mui/material';
import Header from '@components/header';

const Home = () => {
    return (
        <Container component="main" maxWidth="lg">
            <Header/>
            <Typography variant="h2" sx={{marginTop: 8}}>Los Beneficios de Comer Frutas: Una Guía para una Vida Saludable</Typography>
            <Box sx={{
                marginTop: 8,
                marginBottom: 2,
            }}>
                <Typography sx={{
                    textAlign: 'justify',
                    fontSize: 20
                }}>
                    En la búsqueda de un estilo de vida más saludable, a menudo nos encontramos buscando formas simples pero
                    efectivas de mejorar nuestra dieta. Una de las mejores maneras de lograrlo es incorporando una variedad de
                    frutas frescas en nuestra alimentación diaria. Las frutas no solo son deliciosas, sino que también están
                    repletas de nutrientes esenciales que son fundamentales para mantener nuestro cuerpo en óptimas condiciones.
                    Aquí te presentamos una guía sobre por qué comer frutas es bueno para ti:
                </Typography>
            </Box>

            <Box sx={{
                marginTop: 8,
                marginBottom: 2,
            }}>
                <Typography sx={{
                    textAlign: 'justify',
                    fontSize: 20
                }}>
                    <Typography sx={{
                        fontWeight: 'bold'
                    }}>1. Nutrientes Esenciales:</Typography>
                    Las frutas son una excelente fuente de vitaminas, minerales y antioxidantes que son
                    esenciales para el buen funcionamiento de nuestro cuerpo. Desde la vitamina C en las naranjas hasta el potasio
                    en los plátanos, cada fruta ofrece una combinación única de nutrientes que contribuyen a nuestra salud general.
                </Typography>
            </Box>

            <Box sx={{
                marginTop: 8,
                marginBottom: 2,
            }}>
                <Typography sx={{
                    textAlign: 'justify',
                    fontSize: 20
                }}>
                    <Typography sx={{
                        fontWeight: 'bold'
                    }}>2. Fibra Digestiva:</Typography>
                    La fibra es crucial para mantener un sistema digestivo saludable. Las frutas son naturalmente ricas en fibra dietética,
                    lo que ayuda a prevenir el estreñimiento, promueve la regularidad intestinal y puede reducir el riesgo de enfermedades
                    cardíacas y diabetes tipo 2.
                </Typography>
            </Box>

            <Box sx={{
                marginTop: 8,
                marginBottom: 2,
            }}>
                <Typography sx={{
                    textAlign: 'justify',
                    fontSize: 20
                }}>
                    <Typography sx={{
                        fontWeight: 'bold'
                    }}>3. Hidratación Natural:</Typography>
                    Muchas frutas tienen un alto contenido de agua, lo que las convierte en una excelente opción para mantenernos hidratados. 
                    La sandía, por ejemplo, está compuesta por más del 90% de agua, lo que la convierte en una opción refrescante durante los 
                    días calurosos.
                </Typography>
            </Box>

            <Box sx={{
                marginTop: 8,
                marginBottom: 2,
            }}>
                <Typography sx={{
                    textAlign: 'justify',
                    fontSize: 20
                }}>
                    <Typography sx={{
                        fontWeight: 'bold'
                    }}>4. Control de Peso:</Typography>
                    Las frutas son naturalmente bajas en calorías y grasas, pero ricas en nutrientes, lo que las convierte en una opción ideal 
                    para mantenernos llenos y satisfechos sin excedernos en calorías. Incorporar frutas en nuestra dieta puede ayudar en los 
                    esfuerzos de control de peso y en la prevención de la obesidad.
                </Typography>
            </Box>

            <Box sx={{
                marginTop: 8,
                marginBottom: 2,
            }}>
                <Typography sx={{
                    textAlign: 'justify',
                    fontSize: 20
                }}>
                    <Typography sx={{
                        fontWeight: 'bold'
                    }}>5. Mejora de la Salud Cardiovascular:</Typography>
                    Consumir regularmente frutas frescas se ha asociado con un menor riesgo de enfermedades cardíacas y accidentes cerebrovasculares. 
                    Esto se debe a su contenido de antioxidantes y compuestos beneficiosos que ayudan a reducir la presión arterial, mejorar los 
                    niveles de colesterol y proteger la salud del corazón en general.
                </Typography>
            </Box>

            <Box sx={{
                marginTop: 8,
                marginBottom: 2,
            }}>
                <Typography sx={{
                    textAlign: 'justify',
                    fontSize: 20
                }}>
                    <Typography sx={{
                        fontWeight: 'bold'
                    }}>6. Refuerzo Inmunológico:</Typography>
                    Las frutas son una excelente fuente de vitamina C y otros antioxidantes que fortalecen el sistema inmunológico, ayudando a 
                    nuestro cuerpo a combatir enfermedades e infecciones. Consumir una variedad de frutas puede ayudar a mantenernos sanos y 
                    protegidos durante todo el año.
                </Typography>
            </Box>

            <Box sx={{
                marginTop: 3,
                marginBottom: 2,
            }}>
                <Typography sx={{
                    textAlign: 'justify',
                    fontSize: 20
                }}>
                    En resumen, incorporar una amplia variedad de frutas frescas en nuestra dieta diaria no solo mejora nuestro bienestar 
                    general, sino que también puede prevenir una serie de enfermedades crónicas y promover una vida más larga y saludable. 
                    Así que la próxima vez que sientas ganas de picar algo, opta por una deliciosa fruta fresca y disfruta de todos sus 
                    increíbles beneficios para la salud. ¡Tu cuerpo te lo agradecerá!
                </Typography>
            </Box>
        </Container>
    )
}

export default Home