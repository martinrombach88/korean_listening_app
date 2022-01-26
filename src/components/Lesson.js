import mediaTop from '../images/mediaTop.png'
import Dialogue from '../components/Dialogue';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import lessonDialogue from '../json/lesson_dialogue.json'

//Iyagi Int
// 0-70 "Priority seats for the elderly"  //OK


//Iyagi Beg

const Lesson = () => {
    let list = lessonDialogue[2].data;
    
    return ( 
        <div>
            <Container align="center">
                <Grid>
                    <Typography sx={{ m: 2}} variant="h5">
                        {/* Lesson: {title} */}
                    </Typography>
                </Grid>
            
                <Card align="center">
                    <CardMedia
                        component="img"
                        alt="topMedia"
                        height="50"
                        image={mediaTop}
                    />
                     <Grid >
                            <List >
                                {/* List components should generated with a map call */}
                                <ListItem>
                                    <Dialogue dialogueList={list[70]}/>
                                </ListItem>
                                <ListItem>
                                    <Dialogue dialogueList={list[61]}/>
                                </ListItem>
                                <ListItem>
                                    <Dialogue dialogueList={list[62]}/>
                                </ListItem>
                                <ListItem>
                                    <Dialogue dialogueList={list[63]}/>
                                </ListItem>
                                <ListItem>
                                    <Dialogue dialogueList={list[64]}/>
                                </ListItem>
                                <ListItem>
                                    <Dialogue dialogueList={list[65]}/>
                                </ListItem>
                                <ListItem>
                                    <Dialogue dialogueList={list[66]}/>
                                </ListItem>
                                <ListItem>
                                    <Dialogue dialogueList={list[67]}/>
                                </ListItem>
                                <ListItem>
                                    <Dialogue dialogueList={list[68]}/>
                                </ListItem>
                                <ListItem>
                                    <Dialogue dialogueList={list[69]}/>
                                </ListItem>
    

                            </List>
                    </Grid>
                </Card>

                <Button variant="contained" sx={{m:1}} href="/">Home</Button>
            </Container>
        </div>
     );
}
 
export default Lesson;