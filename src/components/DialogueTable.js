import PaginatedTable from '@fidelisppm/paginated-table';
import Typography from '@mui/material/Typography';
import 'react-h5-audio-player/lib/styles.css';
import DialogueAudio from './DialogueAudio';
import { useRef } from 'react';
import '../index.css'


const DialogueTable = ({dialogues, engSubtitles, setEngSubtitles}) => {
    const playerRef = useRef();
    const rows = [];

    dialogues.map((row)=> {
        const onPlay = () => {
            if(playerRef.current.audio.current.currentTime < row.dialogue_stop) {
                playerRef.current.audio.current.currentTime = row.dialogue_start;
            }   
        }

        const onListen = () => {
            if(playerRef.current.audio.current.currentTime >= row.dialogue_stop) {
                playerRef.current.audio.current.currentTime = row.dialogue_start;
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
            sound: <DialogueAudio dialogue={row}/>
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
        entriesPerPage={3}
        className="paginatedTable"
        />
     );
}
 
export default DialogueTable;

