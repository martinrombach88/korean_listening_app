import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { useRef } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import ListItem from '@mui/material/ListItem';


const DialogueBtn = ({dialogueList, audioFile}) => {

    const playerRef = useRef();

    const onPlay = () => {
        if(playerRef.current.audio.current.currentTime < dialogueList.dialogue_stop) {
            // console.log(playerRef.current.audio.current.currentTime);
            playerRef.current.audio.current.currentTime = dialogueList.dialogue_start;
        }
        
    }

    const onListen = () => {
        if(playerRef.current.audio.current.currentTime >= dialogueList.dialogue_stop) {
            playerRef.current.audio.current.currentTime = dialogueList.dialogue_start;
            playerRef.current.audio.current.pause();

            
        }
    }

    return ( 
        <ListItem sx={{justifyContent:"center"}}> 
            <Card sx = {{display:"flex", flexDirection:"row", p:2}}>

                <Grid sx = {{width: 700, display:"flex", flexDirection:"column"}}>
                    <Typography sx={{ ml: 2, mr:2}}>
                        {dialogueList.speaker_hangeul}: {dialogueList.original_text}
                    </Typography>

                    <Typography sx={{ ml:2, mr:2, fontSize:"12px"}}>
                        {dialogueList.speaker_roman}: {dialogueList.gt_text}
                    </Typography>

                </Grid>
                <AudioPlayer 
                            style={{
                                // width:'80px',
                                boxShadow:'none',
                                margin:0,
                                padding:0,
                            }}
                            ref={playerRef}
                            layout="horizontal"
                            showJumpControls={false}
                            showProgressBar={false}
                            customVolumeControls={[]}
                            customProgressBarSection={[]}
                            src={require('../audio/int/' + dialogueList.mp3file)}
                            preload="auto"
                            listenInterval={10}
                            onPlay={()=> onPlay()}
                            onListen={() => onListen()}

                        />
            </Card>
        </ListItem>
     );
}
 
export default DialogueBtn;