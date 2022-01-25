import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Int1 from './Int1';
// import Int from './AudioFiles';

const Dialogue = ({dialogueList, audioFile}) => {
    let playMessage = `Now playing: ${dialogueList.lesson_name}.`

    function setTimeStamp() {
        let audioPlayer = document.getElementById("audioPlayer");
        audioPlayer.currentTime='00.18'
    }

    return ( 
            <Card sx = {{display:"flex", flexDirection:"column", p:2}}>

                <Grid sx = {{display:"flex", flexDirection:"column"}}>
                    <Typography sx={{ ml: 2, mr:2}}>
                        {dialogueList.speaker_hangeul}: {dialogueList.original_text}
                    </Typography>

                    <Typography sx={{ mb:2, ml:2, mr:2, fontSize:"12px"}}>
                        {dialogueList.speaker_roman}: {dialogueList.gt_text}
                    </Typography>

                    <Grid sx = {{ mt:2 }}>
                    <AudioPlayer id="audioPlayer"
                            showJumpControls={false}
                            src={Int1[audioFile]}
                            onPlay={(e)=> console.log(playMessage)}
                            //You can use a callback function here instead of the console log.
                            
                            // other props here

                        />
                    </Grid>
                </Grid>
            </Card>
     );
}
 
export default Dialogue;