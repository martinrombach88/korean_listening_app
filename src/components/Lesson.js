
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
    const [kwoSubtitles, setKwoSubtitles] = useState(false);
    const {courseid, lessonid} = useParams();
    const dialogues = getDialogues(courseid, lessonid);

    const engSub = () => {
        setEngSubtitles(true);
        setKwoSubtitles(false);
    };

    const kwoSub = () => {
        setEngSubtitles(false)
        setKwoSubtitles(true)
    };

    const noSub = () => {
        setEngSubtitles(false)
        setKwoSubtitles(false)
    };

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
                        <Typography sx={{ m: 2}} variant="p">
                            Lesson {dialogues[0].lesson_number}: {dialogues[0].lesson_name}
                        </Typography>

                            <Grid sx={{display:'flex', flexDirection:'row'}}>
                                <Button onClick={()=> engSub()}>ENG</Button>
                                <Button onClick={()=> kwoSub()}>KWO</Button>
                                <Button onClick={()=> noSub()}>HIDE</Button>
                                <Button href={'/'}>
                                    HOME
                                </Button>
                            </Grid>
                    </Grid>
                        
                    <DialogueTable 
                    dialogues={dialogues} 
                    engSubtitles={engSubtitles} 
                    setEngSubtitles={setEngSubtitles} 
                    kwoSubtitles={kwoSubtitles} 
                    setKwoSubtitles={setKwoSubtitles}
                    />

                </Card>
            </Container>
        </div>
     );
}
 
export default Lesson;