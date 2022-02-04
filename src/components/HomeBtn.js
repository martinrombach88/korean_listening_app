import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';

const HomeBtn = ({courseObject}) => {

    return ( 
    <ListItem sx={{justifyContent:"space-between"}}  >
        <Link to={`course/${courseObject.id}`} sx={{minWidth:"100%"}} style={{ textDecoration: 'none' }}>
        <Button variant="outlined" > 


            <ListItemText sx={{ml:2}} 
                primary={
                    
                    <Typography
                        variant="h5"
                        color="text.primary"
                    >{courseObject.roman_name}
                    </Typography>
                }        
                secondary={
                    <Typography
                        variant="p"
                        color="text.link"
                    >
                        {courseObject.company}
                    </Typography>
                }
            />
            <ListItemAvatar sx={{mr:0}}> 
                <Avatar sx={{mr:0}} alt="iyagi" src={require('../images/' + courseObject.image)} />
            </ListItemAvatar>
        </Button>
        </Link>
    </ListItem> 
    );
}
 
export default HomeBtn;