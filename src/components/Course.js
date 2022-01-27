
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import mediaTop from '../images/mediaTop.png'
import CourseBtn from './CourseBtn'
import IyagiInt from './IyagiInt'
import lessonDialogue from '../json/lesson_dialogue.json'

//Iyagi Int
// 0-70 "Priority seats for the elderly" OK
// 71-146 "Bookstores" OK
// 147-248 "Coping with stress" OK

const Course = () => {
    
    return (       
        
        <Container align="center">

            <Grid>
                <Typography sx={{ m: 2}} variant="h4">
                {IyagiInt.title} - {IyagiInt.company}
                
                </Typography>
            </Grid>
            
            <Card sx={{width: 800}}>
                <CardMedia
                    component="img"
                    alt="topMedia"
                    height="50"
                    image={mediaTop}
                />
                <Grid >
                    <List >
                        <CourseBtn lessonInfo={lessonDialogue[2].data[1]}/>
                        <CourseBtn lessonInfo={lessonDialogue[2].data[71]}/>
                        <CourseBtn lessonInfo={lessonDialogue[2].data[147]}/>
                    </List>
                </Grid>
            </Card>

            <Button variant="contained" sx={{m:1}} href="/">Home</Button>
        </Container> 
    
    );
}
 
export default Course;

/*
 SAMPLE LESSON
Lesson 3. [Conversation Only] Have You Ever Raised a Pet? – 애완동물
Lesson 4. Have You Ever Raised a Pet? – 애완동물
Lesson 5. [Conversation Only] Dramas – 드라마
Lesson 6. Dramas – 드라마
Lesson 7. [Conversation Only] What do you do on Summer Vacation? – 여름 휴가
Lesson 8. What do you do on Summer Vacation? – 여름 휴가
Lesson 9. [Conversation Only] What is your ideal type? – 이상형
Lesson 10. What is your ideal type? – 이상형
Lesson 11. [Conversation Only] How to spend time alone – 혼자 시간을 보내는 방법
Lesson 12. How to spend time alone – 혼자 시간을 보내는 방법
Lesson 13. [Conversation Only] Do you use social media? – SNS
Lesson 14. Do you use social media? – SNS
Lesson 15. [Conversation Only] What kind of books do you like to read? – 책
Lesson 16. What kind of books do you like to read? – 책
Lesson 17. [Conversation Only] Do you like traveling? 여행
Lesson 18. Do you like traveling? – 여행
Lesson 19. [Conversation Only] What kind of food do you like to eat? – 음식
Lesson 20. What kind of food do you like to eat? – 음식
*/