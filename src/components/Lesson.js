
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import DialogueTable from './DialogueTable';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDialogues } from './Query'
import CardMedia from '@mui/material/CardMedia';
import mediaTop from '../images/tradPattern.png';

const Lesson = () => {
    const [engSubtitles, setEngSubtitles] = useState(false);
    const {courseid, lessonid} = useParams();
    const dialogues = getDialogues(courseid, lessonid);

    return ( 
        <div>
            <Container align="center">
                <Card sx={{width:"100%"}}>
                    <CardMedia
                    component="img"
                    alt="topMedia"
                    height="40"
                    image={mediaTop}
                    />         
                    <Grid sx={{display:'flex', flexDirection:'row', justifyContent:'center'}}>     

                        <Grid>
                        <Typography sx={{ m: 1, mb: 1}} variant="p">
                            Lesson {dialogues[0].lesson_number}: {dialogues[0].lesson_name}
                        </Typography>
                            <Grid sx={{display:'flex', flexDirection:'row'}}>
                                <Button onClick={()=> setEngSubtitles(true)}>ENG</Button>
                                <Button>KWO</Button>
                                <Button onClick={()=> setEngSubtitles(false)}>HIDE</Button>
                                <Button href={'/korean_listening_app/'}>
                                    HOME
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                        
                    <DialogueTable dialogues={dialogues} engSubtitles={engSubtitles} setEngSubtitles={setEngSubtitles}/>

                </Card>
            </Container>
        </div>
     );
}
 
export default Lesson;