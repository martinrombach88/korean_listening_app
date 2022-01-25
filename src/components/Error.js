import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const Home = () => {
    return ( 
    <div>
        <Container>
            <Grid align="center">
                <Typography sx={{ m: 1}}variant="h4">
                It seems there's been an error. 
                </Typography> 
                <Button href="/" sx={{ m: 1 }} variant="outlined">Home</Button>
            </Grid>


        </Container> 
    </div>);
}
 
export default Home;