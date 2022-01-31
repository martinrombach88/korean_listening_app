import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import iyagiPic from '../images/iyagi.jpg'

const CourseBtn = ({course, lesson}) => {
    return ( 
        <ListItem sx={{width:"100%"}}>

                            <Button variant="outlined" href={`${course.id}/lesson/${lesson.number}`}>
                                <ListItemAvatar>
                                    <Avatar alt="iyagi" src={iyagiPic} />
                                </ListItemAvatar>

                                <ListItemText
                                    primary={
                                        
                                        <Typography
                                            variant="body1"
                                            color="text.primary"
                                        >Lesson {lesson.number}: {lesson.roman_name}
                                        </Typography>
                                    }        
                                    secondary={
                                        <Typography
                                            variant="subtitle1"
                                            color="text.link"
                                        >
                                        {lesson.hangeul_name}
                                        </Typography>
                                    }
                                />
                            </Button>
                        </ListItem>
     );
}
 
export default CourseBtn;