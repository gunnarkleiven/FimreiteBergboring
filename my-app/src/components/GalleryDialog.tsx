import React, { useState } from "react";
import { makeStyles, Theme, useTheme, createStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { ImageInImageGallery } from "../pages/Gallery";

import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import MobileStepper from '@material-ui/core/MobileStepper';
import IconButton from '@material-ui/core/IconButton';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import GalleryDialogFullscreen from '../components/GalleryDialogFullscreen';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Backdrop from '@material-ui/core/Backdrop';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            // display: 'flex',
            // flexDirection: 'row',
        },
        header: {
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            height: 50,
            paddingLeft: theme.spacing(4),
            //backgroundColor: theme.palette.background.default,
            backgroundColor: 'transparent',

        },
        details: {
            display: "flex",
            flexDirection: "column",
        },
        media: {

        },
        img: {
            //height: 300,
            //maxWidth: 600,
            overflow: 'hidden',
            display: 'block',
            width: '100%',
            height: '100%',
        },
        paper: {
            height: 50,
            position: 'relative',
            backgroundColor: 'transparent'
        },
        backdrop: {
            position: 'absolute',
            zIndex: 1,
        },
    }),
);

interface Props {
    open: boolean;
    allImages: ImageInImageGallery[];
    selectedImageIndex?: number;
    onClose: (value: number) => void;
    getSelectedImageIndex: () => number;
    changeImageIndex: (newIndex: number) => void;
}

const GalleryDialog: React.FC<Props> = (props: Props) => {
    const classes = useStyles();
    const theme = useTheme();

    const [fullscreenView, setFullscreenView] = useState<boolean>(false);
    const [maxWidth, setMaxWidth] = useState('lg');

    // const { onClose, allImages, selectedImageIndex, open } = props;
    const onClose = props.onClose;
    const allImages = props.allImages;
    const open = props.open;
    // const [currentImageIndex, setCurrentImageIndex] = useState<number>(props.selectedImageIndex);

    const getIndexCallbackFunction = props.getSelectedImageIndex;
    const changeImageIndexCallbackFunction = props.changeImageIndex;


    const handleClose = () => {
        // onClose(currentImageIndex);
        onClose(getIndexCallbackFunction());
        setFullscreenView(false);
    };

    const handleListItemClick = (value: number) => {
        onClose(value);
    };

    const handleOnClickPrev = () => {
        // console.log("Clicked PREV");
        // setCurrentImageIndex(
        //     currentImageIndex > 0 ? currentImageIndex - 1 : allImages.length - 1
        // );
        const currentIndex = getIndexCallbackFunction();
        changeImageIndexCallbackFunction(
            currentIndex > 0 ? currentIndex - 1 : allImages.length - 1
        );
    };

    const handleOnClickNext = () => {
        // console.log("Clicked NEXT");
        // setCurrentImageIndex(
        //     currentImageIndex < allImages.length - 1 ? currentImageIndex + 1 : 0
        // );
        const currentIndex = getIndexCallbackFunction();
        changeImageIndexCallbackFunction(
            currentIndex < allImages.length - 1 ? currentIndex + 1 : 0
        );
    };

    const handleFullscreenClick = () => {
        console.log("Clicked the fullscreen button");
        setFullscreenView(true);

        // setFullscreenOpen(true);
    }

    const handleCloseFullscreenDialog = () => {
        // setFullscreenOpen(false);
    }

    return (
        <div>
            {/* <GalleryDialogFullscreen
                imageProp={allImages[getIndexCallbackFunction()].source}
                openProp={fullscreenOpen}
                

            /> */}
            <Dialog
                onClose={handleClose}
                aria-labelledby="simple-dialog-title"
                open={open}
                fullWidth={fullscreenView}
                maxWidth="xl"
            >
                {/* <Paper
                    className={classes.img}
                    square
                    style={{
                        backgroundImage: `url(${allImages[getIndexCallbackFunction()].source})`,
                        backgroundRepeat: 'no-repeat',
                    }}
                > */}
                {/* <Paper square elevation={0} className={classes.header}>
                    <IconButton onClick={handleFullscreenClick}>
                        <FullscreenIcon fontSize="large" />
                    </IconButton>
                </Paper> */}
                {/* <Paper className={classes.paper}>
                    <Backdrop open={open} className={classes.backdrop}> */}
                {/* <Fab>
                            <FullscreenIcon fontSize="large" />
                        </Fab> */}
                {/* <IconButton onClick={handleFullscreenClick}>
                            <FullscreenIcon fontSize="large" />
                        </IconButton>
                    </Backdrop>
                </Paper> */}
                <img
                    className={classes.img}
                    src={allImages[getIndexCallbackFunction()].source}
                    alt={allImages[getIndexCallbackFunction()].alt}
                />
                {/* </Paper> */}

                {!fullscreenView &&
                    <div>
                        <MobileStepper
                            steps={allImages.length}
                            position="static"
                            variant="text"
                            activeStep={getIndexCallbackFunction()}
                            nextButton={
                                <Button size="small" onClick={handleOnClickNext}>
                                    Neste
                                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                                </Button>
                            }
                            backButton={
                                <Button size="small" onClick={handleOnClickPrev}>
                                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                                    Forrige
                                </Button>
                            }
                        />

                    </div>
                }


            </Dialog>
        </div>
    );
};

export default GalleryDialog;
