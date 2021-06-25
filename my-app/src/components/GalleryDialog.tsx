import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';

import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { ImageInImageGallery } from '../pages/Gallery';



const useStyles = makeStyles({
    root: {
        // display: 'flex',
        // flexDirection: 'row',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    media: {

    },
});

interface Props {
    open: boolean;
    allImages: ImageInImageGallery[];
    selectedImageIndex: number;
    onClose: (value: number) => void;
}


const GalleryDialog: React.FC<Props> = (props: Props) => {
    const classes = useStyles();
    const { onClose, allImages, selectedImageIndex, open } = props;
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(selectedImageIndex);

    const handleClose = () => {
        onClose(selectedImageIndex);
    };

    const handleListItemClick = (value: number) => {
        onClose(value);
    };

    const handleOnClickPrev = () => {
        // console.log("Clicked PREV");
        setCurrentImageIndex(
            currentImageIndex > 0 ? currentImageIndex - 1 : allImages.length - 1
        );
    }


    const handleOnClickNext = () => {
        // console.log("Clicked NEXT");
        setCurrentImageIndex(
            currentImageIndex < allImages.length - 1 ? currentImageIndex + 1 : 0
        );
    };


    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            {/* <DialogTitle id="simple-dialog-title">This is a picture.</DialogTitle> */}
            {/* <List>
                {emails.map((email) => (
                    <ListItem button onClick={() => handleListItemClick(email)} key={email}>
                        <ListItemAvatar>
                            <Avatar className={classes.avatar}>
                                <PersonIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={email} />
                    </ListItem>
                ))}
                <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
                    <ListItemAvatar>
                        <Avatar>
                            <AddIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Add account" />
                </ListItem>
            </List> */}

            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={1}>
                    <IconButton aria-label="prev" onClick={handleOnClickPrev}>
                        <ArrowBackIosIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={10}>
                    <Card className={classes.root}>
                        <CardMedia
                            className={classes.media}
                            image={allImages[currentImageIndex].source}
                            component="img"
                        />
                    </Card>
                </Grid>
                <Grid item xs={1}>
                    <IconButton aria-label="next" onClick={handleOnClickNext}>
                        <ArrowForwardIosIcon />
                    </IconButton>
                </Grid>
            </Grid>

        </Dialog>
    );
}

export default GalleryDialog;

