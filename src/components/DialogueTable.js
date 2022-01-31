import PaginatedTable from '@fidelisppm/paginated-table';
import lessonDialogue from '../json/lesson_dialogue.json'
import { useRef } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Typography from '@mui/material/Typography';
import '../index.css'


const DialogueTable = ({dialogues, engSubtitles, setEngSubtitles}) => {
    const playerRef = useRef();
    const rows = [];

    dialogues.map((row)=> {
        const onPlay = () => {
            if(playerRef.current.audio.current.currentTime < dialogues.dialogue_stop) {
                console.log(playerRef.current.audio);
                playerRef.current.audio.current.currentTime = dialogues.dialogue_start;
            }   
        }

        const onListen = () => {
            if(playerRef.current.audio.current.currentTime >= dialogues.dialogue_stop) {
                playerRef.current.audio.current.currentTime = dialogues.dialogue_start;
                playerRef.current.audio.current.pause();   
            }
        }
        let displayedKRText = '';
        let displayedENGText = '';
        if (engSubtitles) {
            displayedKRText = `${row.speaker_hangeul}: ${row.original_text}`;
            displayedENGText = `${row.speaker_roman}: ${row.gt_text}`
        } else {
            displayedKRText = `${row.speaker_hangeul}: ${row.original_text}`;
        }
        
        rows.push(
            {
            sentence:
                <>
                <Typography sx={{ m: 1}}>
                    {displayedKRText}
                </Typography>
                <Typography sx={{ m: 1}}>
                    {displayedENGText}
                </Typography>
                </>,
            sound: <AudioPlayer
                    style={{
                        // width:'80px',
                        boxShadow:'none',
                        margin:0,
                        padding:0,
                        background:'none',
                    }}
                    ref={playerRef} 
                    src={require('../audio/int/' + row.mp3file)}                            
                    layout="horizontal"
                    showJumpControls={false}
                    customVolumeControls={[]}
                    // showProgressBar={false}
                    // customProgressBarSection={[]}
                    preload="auto"
                    listenInterval={10}
                    onPlay={()=> onPlay()}
                    onListen={() => onListen()}
            /> 
            })
    });

    const headers = [
        { key: 'sentence', center: false, sortable: false}, // Center defaults to false
        { key: 'sound', center: false, sortable: false }, // Sortable defaults to true
    ];

    return ( 
        
        <PaginatedTable 
        headers={headers} 
        dataRows={rows} 
        entriesPerPage={5}
        className="paginatedTable"
        />
     );
}
 
export default DialogueTable;

