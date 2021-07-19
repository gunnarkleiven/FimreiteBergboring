import React, { useState } from "react";
import { makeStyles, useTheme, } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from '@material-ui/core/DialogTitle';
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
    imageProp: string;
    openProp: boolean;
    onClose: () => void;
}

const GalleryDialog: React.FC<Props> = ({ imageProp, openProp }) => {
    const classes = useStyles();
    const theme = useTheme();

    const [image, setImage] = useState(imageProp);
    const [open, setOpen] = useState(openProp);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog
            onClose={handleClose}
            open={open}
        // fullWidth
        // maxWidth="xl"
        >
            <DialogTitle id="simple-dialog-title">
                Dialog title
            </DialogTitle>

            <img src={image} alt="" />

        </Dialog>
    );
};

export default GalleryDialog;
