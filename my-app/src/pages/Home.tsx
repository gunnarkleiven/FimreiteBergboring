import React, { useEffect } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ICategory from '../interfaces/Category';

import CategoryCard from '../components/CategoryCard';

// Import the pictures
import waterImage from "../assets/water.jpeg";
import piercingImage from "../assets/piercing.jpeg";
import energywellImage from "../assets/energywell.jpeg";
import fundamentImage from "../assets/fundament.jpeg";


interface Props {
    pageName: string;
}


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        card: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
        },
        cardGrid: {
            paddingTop: theme.spacing(8),
            paddingBottom: theme.spacing(8),
        },
    }),
);


const HomePage: React.FunctionComponent<Props> = ({ pageName }) => {
    useEffect(() => {
        logging.info(`Loading ${pageName}`);
    }, [])

    const classes = useStyles();

    const categories: ICategory[] = [
        {
            name: "water",
            image: waterImage,
            header: "Boring etter vatn:",
            text: "Boring etter vatn for vassforsyning til gardsbruk, bustadhus, hytter, bustadfelt osv.",
            path: "/water/",

        },
        {
            name: "piercing",
            image: piercingImage,
            header: "Gjennomboring:",
            text: "Gjennomboring av fjellknausar, kryssing av vegar, tomter og eksisterande bebyggelse.. Dette er eit rimleg og miljøvenleg alternativ til konvensjonelle grøfter.",
            path: "/piercing/",

        },
        {
            name: "energywells",
            image: energywellImage,
            header: "Energibrønnar:",
            text: "Boring av energibrønnar til varmepumper i bustadhus, dette er ei eingongsinvistering som gjer at du kan utnytte ein miljøvenleg og fornybar energiresurs.",
            path: "/energywells/",
        },
        {
            name: "fundament",
            image: fundamentImage,
            header: "Fundamentering:",
            text: "Fundamentering: Er ein teknikk som blir benytta der det er usikker grunn for etablering av bygg.",
            path: "/fundament/",
        }
    ]

    return (
        <div className={classes.root}>
            <Container maxWidth="sm">
                <Typography variant="h6" align="center" paragraph>
                    <br />
                    Me er eit selskap med base i Sogndal som driv med bergboring, og starta våren 2014. Me er no 3 ansatte.
                    Arbeidsområdet er Sogn og Fjordane, Hordalang og Møre og Romsdal, men me er fleksible utover dette.
                    <br />
                    Eigar er Per Magne Fimreite.
                    <br />
                    Me tilbyr tenester til konkurransedyktige prisar innan:
                </Typography>

            </Container>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={3}>
                    {categories.map((cat, idx) => {
                        return (
                            <CategoryCard key={idx} cat={cat} />
                        );
                    })}
                </Grid>
            </Container>
        </div>
    );
}

export default HomePage;

