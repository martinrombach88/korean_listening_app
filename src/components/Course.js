import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import mediaTop from '../images/tradPattern.png';
import CourseBtn from './CourseBtn';
import { useParams } from 'react-router-dom';
import { getCourse } from './Query'


const Course = () => {
    const {courseid} = useParams();
    const course = getCourse(courseid);
    const renderedCourseBtns = course.lessons.map((lesson)=> {
        if (isNaN(lesson.roman_name) === false) {
            return (
                <Typography variant="h6" sx={{p:1, color:"red"}} key={lesson.id}>
                Lesson Not Configured.
                </Typography>
            )

        } else {
            return (
                <CourseBtn lesson={lesson} key={lesson.id} course={course}/>
                )
        }
 
    });
    return (       
        <Container align="center" sx={{mt:4}}>
            <Card>
                <CardMedia
                    component="img"
                    alt="topMedia"
                    height="40"
                    image={mediaTop}
                />
                <Grid>
    `                <Typography  variant="h4" fontWeight="bold" sx={{p:1}}>
                    {course.roman_name} 
                    </Typography>
                    <Typography  variant="h6">
                    {course.company}
                    </Typography>
                </Grid>
                <Grid >
                    <List >
                        {renderedCourseBtns}
                    </List>
                </Grid>
                    <Button  href={'#'}variant="contained" sx={{mt:2, mb:3}}>Home</Button>
            </Card>
        </Container> 
    );
}
 
export default Course;