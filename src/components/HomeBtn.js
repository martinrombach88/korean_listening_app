import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';

const HomeBtn = ({courseObject}) => {

    return ( 
    <ListItem sx={{width:"100%"}}>
        <Link to={`course/${courseObject.id}`} style={{ textDecoration: 'none' }}>
        <Button > 
        <ListItemAvatar sx={{mr:0}}> 
                <Avatar sx={{mr:0}} alt="iyagi" src={require('../images/' + courseObject.image)} />
            </ListItemAvatar>

            <ListItemText  
                primary={
                    
                    <Typography
                        align="left"
                        variant="h5"
                        color="text.primary"
                    >{courseObject.roman_name}
                    </Typography>
                }        
                secondary={
                    <Typography
                        align="left"
                        variant="subtitle1"
                        color="text.link"
                    >
                        {courseObject.company}
                    </Typography>
                }
            />

        </Button>
        </Link>
    </ListItem> 
    );
}
 
export default HomeBtn;