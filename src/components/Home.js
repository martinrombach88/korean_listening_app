import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import mediaTop from '../images/tradPattern.png';
import HomeBtn from './HomeBtn'
import { getCourses } from './Query'
import {Link} from 'react-router-dom';

const Home = () => {
    const courses = getCourses();
    const renderedHomeBtns = courses.map((course)=> {
        return (
            <HomeBtn courseObject={course} key={course.id}/>
        )
    });
    return ( 
        <Container align="center" sx={{mt:5}}>
            <Card>
                <CardMedia
                    component="img"
                    alt="topMedia"
                    height="40"
                    image={mediaTop}
                />
                <Typography  variant="h5" fontWeight="bold" sx={{pt:1, mt:2, }}>
                Korean Listening By Sentence
                </Typography>

                <Typography  variant="h5" fontWeight="bold" sx={{p:1}}>
                한국어 문장 듣기
                </Typography>

                <Grid sx={{display:"flex", width:"100%", flexDirection:"column", alignItems:"center"}}>
                    <List >
                        {renderedHomeBtns}                    
                    </List>
                </Grid>

                <Typography variant="subtitle1" sx={{m:2}}>
                    This website is a not affiliated with TalkToMeInKorean.com or any other audio courses.
                    It is a portfolio project intended for demonstration purposes and for personal use
                    by a Talk To Me In Korean subscriber.
                    If you are interested in the courses, please support the official website.
                <br></br>
                <Link sx={{m:2}} to="https://www.talktomeinkorean.com/"> 
                Talk To Me In Korean
                </Link>
                </Typography>
            </Card>
        </Container> 
    )
}
 
export default Home;