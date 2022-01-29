
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import DialogueTable from './DialogueTable';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDialogues } from './Query'


const Lesson = () => {
    const [engSubtitles, setEngSubtitles] = useState(false);
    const {courseid, lessonid} = useParams();
    const dialogues = getDialogues(courseid, lessonid);
    
    return ( 
        <div>
            <Container align="center">
                    <Typography sx={{ m: 2}} variant="h5">
                    <Button variant="contained" sx={{m:2}} href="/">Home</Button>  Lesson: 
                    </Typography>

            
                <Card sx={{width:"100%"}}>
  
                    <Grid sx={{p:2}}>
                    <Typography sx={{ m: 2}} variant="h6" >
                        SUBTITLE
                    </Typography>
                        <Button onClick={()=> setEngSubtitles(true)}>ENG</Button>
                        <Button>KWO</Button>
                        <Button onClick={()=> setEngSubtitles(false)}>HIDE</Button>
                    </Grid>
                    
                    <DialogueTable dialogues={dialogues} engSubtitles={engSubtitles} setEngSubtitles={setEngSubtitles}/>
                </Card>

                
            </Container>
        </div>
     );
}
 
export default Lesson;