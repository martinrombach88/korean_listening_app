import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const HomeBtn = ({courseObject}) => {

    return ( 
    <ListItem alignItems="flex-start" sx={{width: 340}}>
        <Button variant="outlined" href={`course/${courseObject.id}`}> 
            <ListItemAvatar>
                <Avatar alt="iyagi" src={require('../images/' + courseObject.image)} />
            </ListItemAvatar>

            <ListItemText
                primary={
                    
                    <Typography
                        variant="h6"
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
        </Button>
    </ListItem> 
    );
}
 
export default HomeBtn;