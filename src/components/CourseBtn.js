import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import iyagiPic from '../images/iyagi.jpg'

const CourseBtn = ({lessonInfo}) => {
    return ( 
        <ListItem sx={{justifyContent:"center"}}>
                            <Button variant="outlined" href="lesson">
                                <ListItemAvatar>
                                    <Avatar alt="iyagi" src={iyagiPic} />
                                </ListItemAvatar>

                                <ListItemText
                                    primary={
                                        
                                        <Typography
                                            variant="h5"
                                            color="text.primary"
                                        >Lesson {lessonInfo.lesson_number}: {lessonInfo.lesson_name}
                                        </Typography>
                                    }        
                                    secondary={
                                        <Typography
                                            variant="h5"
                                            color="text.link"
                                        >
                                        kr_lesson_name e.g. - 노인 우선석
                                        </Typography>
                                    }
                                />
                            </Button>
                        </ListItem>
     );
}
 
export default CourseBtn;