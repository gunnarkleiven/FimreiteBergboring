import React, { useState, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import image1 from '../assets/bilde1.jpeg';
import image2 from '../assets/bilde2.jpeg';
import image3 from '../assets/bilde3.jpeg';
import image4 from '../assets/bilde4.jpeg';
import Card from '@material-ui/core/Card';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import { Carousel } from 'react-responsive-carousel';
// import Carousel from "react-responsive-carousel/lib/js/components/Carousel/index";
import { CarouselProps, AnimationHandler, AnimationHandlerResponse } from 'react-responsive-carousel/lib/ts/components/Carousel/types';
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface ItemObject {
    name: string;
    image: string;
    loaded: boolean;
}

interface SlideshowSettings {

}

const fadeAnimationHandler: AnimationHandler = (props, state): AnimationHandlerResponse => {
    const transitionTime = props.transitionTime + 'ms';
    const transitionTimingFunction = 'ease-in-out';

    let slideStyle: React.CSSProperties = {
        position: 'absolute',
        display: 'block',
        zIndex: -2,
        minHeight: '100%',
        opacity: 0,
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        transitionTimingFunction: transitionTimingFunction,
        msTransitionTimingFunction: transitionTimingFunction,
        MozTransitionTimingFunction: transitionTimingFunction,
        WebkitTransitionTimingFunction: transitionTimingFunction,
        OTransitionTimingFunction: transitionTimingFunction,
    };

    if (!state.swiping) {
        slideStyle = {
            ...slideStyle,
            WebkitTransitionDuration: transitionTime,
            MozTransitionDuration: transitionTime,
            OTransitionDuration: transitionTime,
            transitionDuration: transitionTime,
            msTransitionDuration: transitionTime,
        };
    }

    return {
        slideStyle,
        selectedStyle: { ...slideStyle, opacity: 1, position: 'relative' },
        prevStyle: { ...slideStyle },
    };
};

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

const SlideshowUpdated: React.FC = () => {
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


    return (
        <Carousel
            showArrows
            showThumbs={false}
            infiniteLoop
            autoPlay
            stopOnHover
            showStatus={false}
            interval={4000}
            // Because we want to use the fade animation, we set swipeable to false
            swipeable={false}
        // animationHandler={fadeAnimationHandler}
        >
            {/* <div>
                <img src={items[0].image} alt={items[0].name} />
            </div>
            <div>
                <img src={items[1].image} alt={items[1].name} />
            </div>
            <div>
                <img src={items[2].image} alt={items[2].name} />
            </div> */}
            {items.map((item, idx) => {
                return (
                    <div key={idx}>
                        <img src={item.image} alt={item.name} />
                    </div>
                )
            })}
        </Carousel>

    );

}

export default SlideshowUpdated;