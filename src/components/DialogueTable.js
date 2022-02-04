import PaginatedTable from '@fidelisppm/paginated-table';
import Typography from '@mui/material/Typography';
import 'react-h5-audio-player/lib/styles.css';
import DialogueAudio from './DialogueAudio';
import { useRef } from 'react';
import '../index.css'


const DialogueTable = ({dialogues, engSubtitles, setEngSubtitles, kwoSubtitles, setKwoSubtitles}) => {
    const playerRef = useRef();
    const rows = [];

    dialogues.map((row)=> {

        let displayedKRText = '';
        let displayedENGText = '';
        let displayedKWOText = '';
        if (engSubtitles) {
            displayedKRText = `${row.speaker_hangeul}: ${row.original_text}`;
            displayedENGText = `${row.speaker_roman}: ${row.gt_text}`
            displayedKWOText = '';

        } else if (kwoSubtitles){
            displayedKRText = `${row.speaker_hangeul}: ${row.original_text}`;
            displayedKWOText = `${row.speaker_roman}: ${row.ke_text}`;
            displayedENGText = '';
        } else {
            displayedKRText = `${row.speaker_hangeul}: ${row.original_text}`;
            displayedENGText = '';
            displayedKWOText = '';
        }
        
        rows.push(
            {
            sentence: 
                <>
                <Typography sx={{ m: 1}}>
                    {displayedKRText}
                </Typography>
                <Typography sx={{ m: 1}}>
                    {displayedENGText}{displayedKWOText}
                </Typography>
                </>,
            sound: <DialogueAudio dialogue={row}/>
            })
    });

    const headers = [
        { key: 'sentence', center: false, sortable: false},
        { key: 'sound', center: false, sortable: false },
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

