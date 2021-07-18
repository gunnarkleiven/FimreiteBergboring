import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GalleryComponent from '../components/GalleryComponent';
import Grid from '@material-ui/core/Grid';

// Manually importing all the pictures. This is definately not the best solution for all these pictures
import picture1 from '../assets/picture1.jpeg';
import picture2 from '../assets/picture2.jpeg';
import picture3 from '../assets/picture3.jpeg';
import picture4 from '../assets/picture4.jpeg';
import picture5 from '../assets/picture5.jpeg';
import picture6 from '../assets/picture6.jpeg';
import picture7 from '../assets/picture7.jpeg';
import picture8 from '../assets/picture8.jpeg';
import picture9 from '../assets/picture9.jpeg';
import picture10 from '../assets/picture10.jpeg';
import picture11 from '../assets/picture11.jpeg';
import picture12 from '../assets/picture12.jpeg';
import picture13 from '../assets/picture13.jpeg';
import picture14 from '../assets/picture14.jpeg';
import picture15 from '../assets/picture15.jpeg';



interface GalleryProps {

}

export interface ImageInImageGallery {
    source: string,
    alt: string;
    hovered: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        gridContainer: {
            padding: theme.spacing(2),
        },
    }),
);


const Gallery: React.FC<GalleryProps> = () => {

    const classes = useStyles();

    // Generate a list of all the img sources
    // const allImages: ImageInImageGallery[] = Array.from(Array(10).keys()).map((n) => {
    //     return {
    //         source: "../assets/picture" + (n + 1) + ".jpeg",
    //         alt: "something",
    //     }
    // });

    // const allImages: string[] = [picture1, picture2, picture3, picture4, picture5, picture6, picture7, picture8, picture9, picture10];

    const allImages: ImageInImageGallery[] = [
        {
            source: picture1,
            alt: "picture1",
            hovered: false,
        },
        {
            source: picture2,
            alt: "picture2",
            hovered: false,
        },
        {
            source: picture3,
            alt: "picture3",
            hovered: false,
        },
        {
            source: picture4,
            alt: "picture4",
            hovered: false,
        },
        {
            source: picture5,
            alt: "picture5",
            hovered: false,
        },
        {
            source: picture6,
            alt: "picture6",
            hovered: false,
        },
        {
            source: picture7,
            alt: "picture7",
            hovered: false,
        },
        {
            source: picture8,
            alt: "picture8",
            hovered: false,
        },
        {
            source: picture9,
            alt: "picture9",
            hovered: false,
        },
        {
            source: picture10,
            alt: "picture10",
            hovered: false,
        },
        {
            source: picture11,
            alt: "picture11",
            hovered: false,
        },
        {
            source: picture12,
            alt: "picture12",
            hovered: false,
        },
        {
            source: picture13,
            alt: "picture13",
            hovered: false,
        },
        {
            source: picture14,
            alt: "picture14",
            hovered: false,
        },
        {
            source: picture15,
            alt: "picture15",
            hovered: false,
        },
    ]

    return (
        <div className={classes.root}>
            <Container maxWidth="lg">
                <Grid
                    container
                    className={classes.gridContainer}
                    direction="row"
                    justifyContent="center"
                    spacing={3}
                >
                    <Grid item xs={12}>
                        <GalleryComponent images={allImages} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}


export default Gallery;