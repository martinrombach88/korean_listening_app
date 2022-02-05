import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';

const CourseBtn = ({course, lesson}) => {
    return ( 
        <ListItem >
            <Link align="center"  to={`lesson/${lesson.number}`} style={{ textDecoration: 'none', minWidth:"100%"}}>
                <Button>
                    <ListItemText
                        primary={
                            
                            <Typography
                            
                                variant="h6"
                                color="text.primary"
                            >Lesson {lesson.number}: {lesson.roman_name}
                            </Typography>
                        }        
                        secondary={
                            <Typography
                                align="center"
                                variant="h6"
                                color="text.link"
                            >
                            강의{lesson.number}: {lesson.hangeul_name}
                            </Typography>
                        }
                    />
                </Button>
            </Link>
        </ListItem>
     );
}
 
export default CourseBtn;