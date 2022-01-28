
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import lessonDialogue from '../json/lesson_dialogue.json'
import DialogueTable from './DialogueTable';
import { useState } from 'react';

//Iyagi Int
// 0-70 "Priority seats for the elderly" OK Lesson 1
// 71-146 "Bookstores" OK Lesson 2
// 147-248 "Coping with stress" OK Lesson 3




const Lesson = () => {
    let list = lessonDialogue[2].data;
    const [engSubtitles, setEngSubtitles] = useState(false);

    return ( 
        <div>
            <Container align="center">
                    <Typography sx={{ m: 2}} variant="h5">
                    <Button variant="contained" sx={{m:2}} href="/">Home</Button>  Lesson: {list[0].lesson_name} 
                    </Typography>

            
                <Card sx={{width:"100%"}}>
                     {/* <Grid >
                            <List>
                                    <DialogueBtn dialogueList={list[222]}/>
                                    <DialogueBtn dialogueList={list[201]}/>
                                    <DialogueBtn dialogueList={list[247]}/>
                                    <DialogueBtn dialogueList={list[248]}/>
                                    <DialogueBtn dialogueList={list[247]}/>
                            </List>
                    </Grid> */}
                    <Grid sx={{p:2}}>
                    <Typography sx={{ m: 2}} variant="h6" >
                        SUBTITLE
                    </Typography>
                        <Button onClick={()=> setEngSubtitles(true)}>ENG</Button>
                        <Button>KWO</Button>
                        <Button onClick={()=> setEngSubtitles(false)}>HIDE</Button>
                    </Grid>
                    
                    <DialogueTable engSubtitles={engSubtitles} setEngSubtitles={setEngSubtitles}/>
                </Card>

                
            </Container>
        </div>
     );
}
 
export default Lesson;