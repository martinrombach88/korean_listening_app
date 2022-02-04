import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const HomeBtn = ({courseObject}) => {

    return ( 
    <ListItem sx={{justifyContent:"space-between"}}>
        <Button variant="outlined" href={`course/${courseObject.id}`} sx={{minWidth:"100%"}}> 


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
    </ListItem> 
    );
}
 
export default HomeBtn;