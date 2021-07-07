import React, { useState, useEffect } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { ImageInImageGallery } from '../pages/Gallery';
import GalleryDialog from '../components/GalleryDialog';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';


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
    const [selectedImageIndex, setSelectedImageIndex] = useState<number>(1);

    const [columnNumber, setColumnNumber] = useState<number>(3);

    const classes = useStyles();

    useEffect(() => {
        const setResponsiveness = () => {
            // return window.innerWidth < 1050 ? setMobileView(true) : setMobileView(false);
            if (window.innerWidth > 900) {
                return setColumnNumber(3);
            }
            else if (window.innerWidth > 600) {
                return setColumnNumber(2);
            }
            else {
                return setColumnNumber(1);
            }

        };

        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());

        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        }

    }, []);

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
        // console.log(`Clicked picture ${idx}`);
        // console.log(`Before: ${selectedImageIndex}`);
        setSelectedImageIndex(idx);
        // console.log(`After: ${selectedImageIndex}`);
        setDialogOpen(true);
    }

    const handleClickOpenDialog = () => {
        setDialogOpen(true);
    }

    const handleCloseDialog = (value: number) => {
        setDialogOpen(false);
        setSelectedImageIndex(value);
    }

    const changeImageIndex = (newIndex: number) => {
        setSelectedImageIndex(newIndex);
    }

    // This function is to be called from the GalleryDialog component
    const getSelectedImageIndex = () => {
        return selectedImageIndex;
    }

    return (
        <div className={classes.root}>
            <GalleryDialog allImages={allImages} getSelectedImageIndex={getSelectedImageIndex} changeImageIndex={changeImageIndex} open={dialogOpen} onClose={handleCloseDialog} />
            <GridList cellHeight={160} className={classes.gridList} cols={columnNumber}>
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
