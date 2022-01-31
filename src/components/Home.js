import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import mediaTop from '../images/mediaTop.png';
import HomeBtn from './HomeBtn'
import { getCourses } from './Query'

const Home = () => {
    const courses = getCourses();
    const renderedHomeBtns = courses.map((course)=> {
        return (
        <HomeBtn courseObject={course} key={course.id}/>
        )
    });
    return ( 
        <Container align="center" sx={{ width: '100%'}} >

            <Grid>
                <Typography sx={{ mt:2}} variant="h6">
                Korean Audio Courses
                </Typography>

                <Typography sx={{ mb:2}}variant="h6">한국어 오디오 코스</Typography>
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
                        {renderedHomeBtns}                    
                    </List>
                </Grid>
            </Card>
        </Container> 
    )
}
 
export default Home;