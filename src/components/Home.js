import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import mediaTop from '../images/tradPattern.png';
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
        <Container align="center" sx={{mt:5}}>
            <Card sx={{width: '80%'}}>
                <CardMedia
                    component="img"
                    alt="topMedia"
                    height="40"
                    image={mediaTop}
                />
                                <Typography variant="h6" sx={{mt:2}}>
                Korean Audio Courses
                </Typography>

                <Typography variant="h6">한국어 오디오 코스</Typography>
                <Grid >
                    <List>
                        {renderedHomeBtns}                    
                    </List>
                </Grid>
            </Card>
        </Container> 
    )
}
 
export default Home;