import mediaTop from '../images/mediaTop.png'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import lessonDialogue from '../json/lesson_dialogue.json'
import DialogueBtn from './DialogueBtn';

//Iyagi Int
// 0-70 "Priority seats for the elderly" OK
// 71-146 "Bookstores" OK
// 147-248 "Coping with stress" OK




const Lesson = () => {
    let list = lessonDialogue[2].data;
    return ( 
        <div>
            <Container align="center">
                <Grid>
                    <Typography sx={{ m: 2}} variant="h5">
                        Lesson: {list[147].lesson_name}
                    </Typography>
                </Grid>
            
                <Card sx={{width:800}}>
                    <CardMedia
                        component="img"
                        alt="topMedia"
                        height="50"
                        image={mediaTop}
                    />
                     <Grid >
                            <List>
                                {/* List components should generated with a map call */}
                                    <DialogueBtn dialogueList={list[222]}/>
                                    <DialogueBtn dialogueList={list[201]}/>
                                    <DialogueBtn dialogueList={list[247]}/>
                                    <DialogueBtn dialogueList={list[248]}/>
                                    <DialogueBtn dialogueList={list[247]}/>
                                    <DialogueBtn dialogueList={list[248]}/>
                            </List>
                    </Grid>
                </Card>

                <Button variant="contained" sx={{m:1}} href="/">Home</Button>
            </Container>
        </div>
     );
}
 
export default Lesson;