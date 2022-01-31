import { useRef} from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const DialogueAudio = ({dialogue}) => {

    const playerRef = useRef();

    const onPlay = (e) => {
        if(e.currentTarget.currentTime < dialogue.dialogue_stop) {
            e.currentTarget.currentTime = dialogue.dialogue_start;
        }   
    }

    const onListen = (e) => {
        if(e.currentTarget.currentTime >= dialogue.dialogue_stop) {
            e.currentTarget.currentTime = dialogue.dialogue_start;
            e.currentTarget.pause();  
        
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
                            layout="horizontal"
                            showJumpControls={false}
                            customVolumeControls={[]}
                            customAdditionalControls={[]}
                            showProgressBar={false}
                            customProgressBarSection={[]}
                            src={require('../audio/int/' + dialogue.mp3file)}
                            preload="auto"
                            loop={false}
                            listenInterval={10}
                            onPlay={(e)=> onPlay(e)}
                            onListen={(e) => onListen(e)}
                        />
     );
}
 
export default DialogueAudio;