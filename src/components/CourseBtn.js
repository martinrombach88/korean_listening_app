import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CourseBtn = ({course, lesson}) => {
    return ( 
        <ListItem sx={{width:"100%"}}>

                            <Button sx={{width:"100%"}} align="center" variant="outlined" href={`${course.id}/lesson/${lesson.number}`}>

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