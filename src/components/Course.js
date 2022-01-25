
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import iyagiPic from '../images/iyagi.jpg'
import mediaTop from '../images/mediaTop.png'

const Course = () => {
    return (       
    
        <Container align="center">

            <Grid>
                <Typography sx={{ m: 2}} variant="h4">
                IYAGI Intermediate – Listening in 100% Natural Korean
                </Typography>
            </Grid>
            
            <Card sx={{width: 600}}>
                <CardMedia
                    component="img"
                    alt="topMedia"
                    height="50"
                    image={mediaTop}
                />
                <Grid>
                    <List sx={{width: 500, justifyContent:"center"}}>
                        {/* List components should generated with a map call */}
                        <ListItem>
                            <Button variant="outlined" href="lesson">
                                <ListItemAvatar>
                                    <Avatar alt="iyagi" src={iyagiPic} />
                                </ListItemAvatar>

                                <ListItemText
                                    primary={
                                        
                                        <Typography
                                            variant="h5"
                                            color="text.primary"
                                        >Lesson 1. Priority seats for the elderly
                                        </Typography>
                                    }        
                                    secondary={
                                        <Typography
                                            variant="h5"
                                            color="text.link"
                                        >
                                        아침 식사
                                        </Typography>
                                    }
                                />
                            </Button>
                        </ListItem>

        
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