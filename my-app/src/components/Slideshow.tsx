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

    const classes = useStyles();

    const items = [
        {
            Name: "Picture 1",
            Image: image1
        },
        {
            Name: "Picture 2",
            Image: image2
        },
        {
            Name: "Picture 3",
            Image: image3
        },
        {
            Name: "Picture 4",
            Image: image4
        },
    ];

    /*
    return (
        <div>
            <Carousel
                autoPlay={settings.autoPlay}
                indicators={settings.indicators}
                timeout={settings.timeout}
                cycleNavigation={settings.cycleNavigation}
                navButtonsAlwaysVisible={settings.navButtonsAlwaysVisible}
                navButtonsAlwaysInvisible={settings.navButtonsAlwaysInvisible}
            >
                {items.map((item, idx) => {
                    return (
                        <img key={idx} src={item.Image} alt={item.Name} />
                    )
                })}
            </Carousel>
        </div>
    );

    */
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
                                title={item.Name}
                                image={item.Image}
                            />
                        </Card>
                    )
                })}
            </Carousel>
        </div >
    );

}

export default Slideshow;