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
            
                <Card >
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
                                    <Dialogue dialogueList={list[0]} audioFile={0}/>
                                </ListItem>
                                <ListItem>
                                    <Dialogue dialogueList={list[1]} audioFile={1}/>
                                </ListItem>
                                <ListItem>
                                    <Dialogue dialogueList={list[2]} audioFile={2}/>
                                </ListItem>
                                <ListItem>
                                    <Dialogue dialogueList={list[3]} audioFile={3}/>
                                </ListItem>
                                <ListItem>
                                    <Dialogue dialogueList={list[4]} audioFile={4}/>
                                </ListItem>
                                <ListItem>
                                    <Dialogue dialogueList={list[5]} audioFile={5}/>
                                </ListItem>
                                <ListItem>
                                    <Dialogue dialogueList={list[6]} audioFile={6}/>
                                </ListItem>
                                <ListItem>
                                    <Dialogue dialogueList={list[7]} audioFile={7}/>
                                </ListItem>
                                <ListItem>
                                    <Dialogue dialogueList={list[8]} audioFile={8}/>
                                </ListItem>
                                <ListItem>
                                    <Dialogue dialogueList={list[9]} audioFile={9}/>
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