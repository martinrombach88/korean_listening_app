import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import IyagiInt from './IyagiInt'
import iyagiPic from '../images/iyagi.jpg';
import mediaTop from '../images/mediaTop.png';

const Home = () => {
    return ( 
        <Container align="center" sx={{ width: '100%'}} >

            <Grid>
                <Typography sx={{ m: 2}}variant="h5">
                Korean Audio Courses
                </Typography>

                <Typography sx={{ m: 2}}variant="h5">한국어 오디오 코스</Typography>
            </Grid>

            <Grid>
                <Typography sx={{ m: 2}} variant="h4">
                Course List
                </Typography>
            </Grid>
            
            <Card sx={{width: 350}}>
                <CardMedia
                    component="img"
                    alt="topMedia"
                    height="50"
                    image={mediaTop}
                />
                <Grid>
                    <List>
                        {/* List components should generated with a map call */}
  
                        <ListItem alignItems="flex-start" sx={{width: 340}}>
                            <Button variant="outlined" href="Course"> 
                                <ListItemAvatar>
                                    <Avatar alt="iyagi" src={require('../images/' + IyagiInt.image)} />
                                </ListItemAvatar>

                                <ListItemText
                                    primary={
                                        
                                        <Typography
                                            variant="h5"
                                            color="text.primary"
                                        >{IyagiInt.title}
                                        </Typography>
                                    }        
                                    secondary={
                                        <Typography
                                            variant="h6"
                                            color="text.link"
                                        >
                                            {IyagiInt.company}
                                        </Typography>
                                    }
                                />
                            </Button>
                        </ListItem>
                        <ListItem sx={{width: 340}}>
                            <Button variant="outlined" >
                                <ListItemAvatar>
                                    <Avatar alt="iyagi" src={iyagiPic} />
                                </ListItemAvatar>

                                <ListItemText
                                    primary={
                                        
                                        <Typography
                                            variant="h5"
                                            color="text.primary"
                                        >Iyagi Beginner
                                        </Typography>
                                    }        
                                    secondary={
                                        <Typography
                                            variant="h6"
                                            color="text.link"
                                        >
                                            Talk To Me In Korean
                                        </Typography>
                                    }
                                />
                            </Button>
                        </ListItem>
                    </List>
                </Grid>
            </Card>
        </Container> 
    )
}
 
export default Home;