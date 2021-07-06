import React from "react";
import { makeStyles, useTheme, } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { ImageInImageGallery } from "../pages/Gallery";

import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import MobileStepper from '@material-ui/core/MobileStepper';

const useStyles = makeStyles({
    root: {
        // display: 'flex',
        // flexDirection: 'row',
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
    },
});

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

    return (
        <Dialog
            onClose={handleClose}
            aria-labelledby="simple-dialog-title"
            open={open}
        >
            {/* <Grid container direction="row" justify="center" alignItems="center">
                <Grid item xs={1}>
                    <IconButton aria-label="prev" onClick={handleOnClickPrev}>
                        <ArrowBackIosIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={10}>
                    <Card className={classes.root}>
                        <CardMedia
                            className={classes.media}
                            image={allImages[getIndexCallbackFunction()].source}
                            component="img"
                        />
                    </Card>
                </Grid>
                <Grid item xs={1}>
                    <IconButton aria-label="next" onClick={handleOnClickNext}>
                        <ArrowForwardIosIcon />
                    </IconButton>
                </Grid>
            </Grid> */}
            <img
                className={classes.img}
                src={allImages[getIndexCallbackFunction()].source}
                alt={allImages[getIndexCallbackFunction()].alt}
            />
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

        </Dialog>
    );
};

export default GalleryDialog;
