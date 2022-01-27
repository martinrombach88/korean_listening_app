import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import IyagiInt from './IyagiInt'
import mediaTop from '../images/mediaTop.png';
import HomeBtn from './HomeBtn'

const Home = () => {
    return ( 
        <Container align="center" sx={{ width: '100%'}} >

            <Grid>
                <Typography sx={{ m: 2}}variant="h5">
                Korean Audio Courses
                </Typography>

                <Typography sx={{ m: 2}}variant="h5">한국어 오디오 코스</Typography>
            </Grid>

            <Grid>
                <Typography sx={{ m: 2}} variant="h4">
                Course List
                </Typography>
            </Grid>
            
            <Card sx={{width: 350}}>
                <CardMedia
                    component="img"
                    alt="topMedia"
                    height="50"
                    image={mediaTop}
                />
                <Grid>
                    <List>
                        {/* List components should generated with a map call */}
  
                        < HomeBtn courseObject={IyagiInt} />
                    
                    </List>
                </Grid>
            </Card>
        </Container> 
    )
}
 
export default Home;