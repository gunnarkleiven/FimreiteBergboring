import React, { useState } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { ImageInImageGallery } from '../pages/Gallery';
import GalleryDialog from '../components/GalleryDialog';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
        },
        gridList: {
            width: 800,
            height: 700,
        },
        image: {

        },
    }),
);


interface Props {
    images: ImageInImageGallery[];
}

// interface Props {
//     images: string[];
// }

const GalleryComponent: React.FC<Props> = ({ images }) => {
    const [allImages, setAllImages] = useState<ImageInImageGallery[]>(images);
    // const [allImages, setAllImages] = useState<string[]>(images);

    const [dialogOpen, setDialogOpen] = useState<boolean>(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

    const classes = useStyles();

    const handleMouseOver = (idx: number) => {
        // onsole.log(`Hovering picture ${idx}`);
        setAllImages(
            allImages.map((elem, mapIndex) => {
                if (mapIndex === idx) {
                    return (
                        { ...elem, hovered: true }
                    )
                }
                else {
                    return elem
                }
            }));
        // console.log(`State: ${allImages.map((elem) => { return (elem.hovered) })}`)
    }

    const handleMouseOut = (idx: number) => {
        // console.log(`No longer hovering picture ${idx}`);
        setAllImages(
            allImages.map((elem, mapIndex) => {
                if (mapIndex === idx) {
                    return (
                        { ...elem, hovered: false }
                    )
                }
                else {
                    return elem
                }
            }));
    }

    const handleClick = (image: ImageInImageGallery, idx: number) => {
        console.log(`Clicked picture ${idx}`);
        setDialogOpen(true);
        setSelectedImageIndex(idx);
    }

    const handleClickOpenDialog = () => {
        setDialogOpen(true);
    }

    const handleCloseDialog = (value: number) => {
        setDialogOpen(false);
        setSelectedImageIndex(value);
    }


    return (
        <div className={classes.root}>
            <GalleryDialog allImages={allImages} selectedImageIndex={selectedImageIndex} open={dialogOpen} onClose={handleCloseDialog} />
            <GridList cellHeight={160} className={classes.gridList} cols={3}>
                {allImages.map((image, idx) => {
                    return (
                        <GridListTile key={idx} cols={1}>
                            <img
                                src={image.source}
                                alt={image.alt}
                                onMouseOver={() => handleMouseOver(idx)}
                                onMouseOut={() => handleMouseOut(idx)}
                                onClick={() => handleClick(image, idx)}
                                style={{
                                    //transform: allImages[idx].hovered ? 'scale(1.2)' : undefined,
                                    // filter: allImages[idx].hovered ? 'grayscale(80%)' : undefined,
                                    // filter: allImages[idx].hovered ? 'blur(10px)' : undefined,
                                    filter: allImages[idx].hovered ? 'opacity(25%)' : undefined,
                                    transition: allImages[idx].hovered ? '0.4s' : undefined,
                                }}
                            />
                        </GridListTile>
                    )
                })}

            </GridList>
        </div>
    );
}

export default GalleryComponent;