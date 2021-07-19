import React, { useState, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel';
import image1 from '../assets/bilde1.jpeg';
import image2 from '../assets/bilde2.jpeg';
import image3 from '../assets/bilde3.jpeg';
import image4 from '../assets/bilde4.jpeg';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


interface SlideshowSettings {
    autoPlay: boolean;
    animation: animation;
    indicators: boolean;
    timeout: number;
    interval: number;
    navButtonsAlwaysVisible: boolean;
    navButtonsAlwaysInvisible: boolean;
    cycleNavigation: boolean;

}

interface ItemObject {
    name: string;
    image: string;
    loaded: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        media: {
            maxHeight: 380,
            maxWidth: 1150,

        },
        typography: {
            color: "#FFFFFF",
        },
        card: {
            minWidth: 275,
            backgroundColor: "black",
        },
        paper: {
            maxHeight: 380,
            maxWidth: 1150,
        },
    }),
);


type animation = "fade" | "slide"

const Slideshow: React.FC = () => {
    const [settings, setSettings] = useState<SlideshowSettings>({
        autoPlay: true,
        animation: "fade",
        indicators: false,
        timeout: 500,
        interval: 4000,
        navButtonsAlwaysVisible: false,
        navButtonsAlwaysInvisible: false,
        cycleNavigation: true,
    })
    const [items, setItems] = useState<ItemObject[]>([
        {
            name: "Picture 1",
            image: image1,
            loaded: false,
        },
        {
            name: "Picture 2",
            image: image2,
            loaded: false,
        },
        {
            name: "Picture 3",
            image: image3,
            loaded: false,
        },
        {
            name: "Picture 4",
            image: image4,
            loaded: false,
        },
    ]);

    useEffect(() => {


    });

    const classes = useStyles();

    const handleImageLoad = (idx: number) => {
        let prevItems = items;
        prevItems[idx].loaded = true;
        displayItem(prevItems[idx]);
        setItems(prevItems);
    }

    const displayItem = (item: ItemObject) => {
        console.log(`Updated item: Name=${item.name}, loaded: ${item.loaded}`);
    }



    return (
        <div>
            <Carousel
                autoPlay={settings.autoPlay}
                indicators={settings.indicators}
                animation={settings.animation}
                timeout={settings.timeout}
                cycleNavigation={settings.cycleNavigation}
                navButtonsAlwaysVisible={settings.navButtonsAlwaysVisible}
                navButtonsAlwaysInvisible={settings.navButtonsAlwaysInvisible}
            >
                {items.map((item, idx) => {
                    return (
                        // <Card
                        //     key={idx}
                        //     className={classes.card}
                        // >
                        //     {item.loaded ?
                        //         <CardMedia
                        //             className={classes.media}
                        //             component="img"
                        //             title={item.name}
                        //             image={item.image}
                        //             // Only do onLoad once
                        //             onLoad={() => { if (!item.loaded) { handleImageLoad(idx) } }}
                        //         /> :
                        //         <CircularProgress />}
                        // </Card>
                        <Card
                            key={idx}
                            className={classes.card}
                        >
                            <Grid container spacing={0}>
                                <Grid item xs={12} >
                                    <CardMedia
                                        className={classes.media}
                                        component="img"
                                        title={item.name}
                                        image={item.image}
                                    // Only do onLoad once
                                    // onLoad={() => { if (!item.loaded) { handleImageLoad(idx) } }}
                                    />
                                </Grid>
                            </Grid>
                        </Card>
                        // <Paper className={classes.paper} square>
                        //     <img src={item.image} alt={item.name} />
                        // </Paper>
                        //     <Paper
                        //         key={idx}
                        //         // className={classes.paper}
                        //         style={{
                        //             maxHeight: 380,
                        //             maxWidth: 1150,
                        //             backgroundImage: `url(${item.image})`
                        //         }}
                        //         square
                        //     />
                    )
                })}
            </Carousel>
        </div >
    );

}

export default Slideshow;