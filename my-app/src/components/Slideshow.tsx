import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';
import image1 from '../assets/bilde1.jpeg';
import image2 from '../assets/bilde2.jpeg';
import image3 from '../assets/bilde3.jpeg';
import image4 from '../assets/bilde4.jpeg';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import logo from "../assets/Fimreite-logo-1.png";
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';




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
    }),
);


type animation = "fade" | "slide"

const Slideshow: React.FC = () => {
    const [settings, setSettings] = useState<SlideshowSettings>({
        autoPlay: true,
        animation: "slide",
        indicators: true,
        timeout: 500,
        interval: 5000,
        navButtonsAlwaysVisible: false,
        navButtonsAlwaysInvisible: false,
        cycleNavigation: true,
    })
    const [items, setItems] = useState<ItemObject[]>([
        {
            name: "Picture 1",
            image: image1,
        },
        {
            name: "Picture 2",
            image: image2,
        },
        {
            name: "Picture 3",
            image: image3,
        },
        {
            name: "Picture 1",
            image: image1,
        },
    ]);

    const classes = useStyles();


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
                        <Card
                            key={idx}
                            className={classes.card}
                        >
                            <CardMedia
                                className={classes.media}
                                component="img"
                                title={item.name}
                                image={item.image}
                            />
                        </Card>
                    )
                })}
            </Carousel>
        </div >
    );

}

export default Slideshow;