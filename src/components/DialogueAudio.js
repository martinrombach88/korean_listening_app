import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import { useRef } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const DialogueAudio = ({dialogueList}) => {

    const playerRef = useRef();

    const onPlay = () => {
        if(playerRef.current.audio.current.currentTime < dialogueList.dialogue_stop) {
            console.log(playerRef.current.audio.current.currentTime);
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
                <AudioPlayer 
                            style={{
                                // width:'80px',
                                boxShadow:'none',
                                margin:0,
                                padding:0,
                                background: 'none',
                            }}
                            ref={playerRef}
                            layout="horizontal"
                            showJumpControls={false}
                            customVolumeControls={[]}
                            showProgressBar={false}
                            customProgressBarSection={[]}
                            src={require('../audio/int/' + dialogueList.mp3file)}
                            preload="auto"
                            listenInterval={10}
                            onPlay={()=> onPlay()}
                            onListen={() => onListen()}

                        />
     );
}
 
export default DialogueAudio;