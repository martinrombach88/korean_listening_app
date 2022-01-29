import MaterialTable, { MTableToolbar, MTableHeader } from 'material-table'
import lessonDialogue from '../json/lesson_dialogue.json'
// import {Link} from 'react-router-dom';
import { useRef } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const DialogueTable = ({dialogues, engSubtitles, setEngSubtitles}) => {
    
    const playerRef = useRef();

    const onPlay = (dialogueList) => {
        if(playerRef.current.audio.current.currentTime < dialogueList.dialogue_stop) {
            console.log(playerRef.current.audio.current.currentTime);
            playerRef.current.audio.current.currentTime = dialogueList.dialogue_start;
        }
        
    }

    const onListen = (dialogueList) => {
        if(playerRef.current.audio.current.currentTime >= dialogueList.dialogue_stop) {
            playerRef.current.audio.current.currentTime = dialogueList.dialogue_start;
            playerRef.current.audio.current.pause();   
        }
    }

    const columns = [ 
        {
            title: 'Sentence',
            field: 'textContent',
            
            render: (rowData) => {
                
                if (engSubtitles) {
                    return <div>{rowData.speaker_hangeul}: {rowData.original_text} <br></br>{rowData.speaker_roman}:{rowData.gt_text}</div>
                } else {
                    return `${rowData.speaker_hangeul}: ${rowData.original_text}`;
                }
                
            }
        },
        {
            title: '',
            field: 'link',
            render: (rowData) => (

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
                            // showProgressBar={false}
                            customVolumeControls={[]}
                            // customProgressBarSection={[]}
                            src={require('../audio/int/' + rowData.mp3file)}
                            preload="auto"
                            listenInterval={10}
                            onPlay={()=> onPlay()}
                            onListen={() => onListen()}

                        />
            ),
        },
    ];


    return ( 
        <MaterialTable
                    title=""
                    data={dialogues}
                    columns={columns}
                    options={{
                        search: false,
                        paging: true,
                        pageSize: 5,
                        onPageChange: true,
                        
                    }}
                    components={{
                        Toolbar: props => (
                            <div style={{ display:"none" }}>
                                <MTableToolbar {...props} />
                            </div>
                        ),
                        Header: props => (
                            <div style={{display:"none"}}>
                                <MTableHeader {...props} />
                            </div>
                        )
                    }}
        />
     );
}
 
export default DialogueTable;

