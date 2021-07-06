import React, { useEffect, useState } from 'react';
import logging from '../config/logging';
import { makeStyles, createStyles, Theme, createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import CategoryCard from '../components/CategoryCard';
import Slideshow from '../components/Slideshow';
import categories from '../misc/categories';

// Import the pictures
import frontPicture from "../assets/picture11.jpeg";


interface Props {
    pageName: string;
}


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        // paper: {
        //     padding: theme.spacing(2),
        //     textAlign: 'center',
        //     color: theme.palette.text.secondary,
        // },
        card: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
        },
        cardGrid: {
            paddingTop: theme.spacing(8),
            paddingBottom: theme.spacing(8),
        },
        paper: {
            position: 'relative',
            //backgroundColor: theme.palette.grey[800],
            backgroundColor: "#4a4e57",
            color: theme.palette.common.white,
            marginBottom: theme.spacing(4),
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        },
    }),
);

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);



const HomePage: React.FunctionComponent<Props> = ({ pageName }) => {
    const [radioValue, setRadioValue] = useState<string>("1");

    useEffect(() => {
        logging.info(`Loading ${pageName}`);
    }, [])

    const classes = useStyles();



    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadioValue((event.target as HTMLInputElement).value);
    };

    const renderHomepage = () => {
        if (radioValue === "1") {
            return (
                <div>
                    <Paper className={classes.paper} elevation={0}>
                        <Container maxWidth="lg">
                            <Grid
                                container
                                spacing={3}
                                justify="center"
                                alignItems="center"
                            >
                                <Grid item xs={12} sm={6}>
                                    <ThemeProvider theme={theme}>
                                        <Typography variant="h6" align="center" paragraph>
                                            <br />
                                            Me er eit selskap med base i Sogndal som driv med bergboring, og starta våren 2014. Me er no 3 ansatte.
                                            <br />
                                            <br />
                                            Arbeidsområdet er Sogn og Fjordane, Hordaland og Møre og Romsdal, men me er fleksible utover dette.
                                            <br />
                                            Eigar er Per Magne Fimreite.
                                            <br />
                                            <br />
                                            Me tilbyr tenester til konkurransedyktige prisar innan:
                                        </Typography>
                                    </ThemeProvider>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Card>
                                        <CardMedia
                                            component="img"
                                            alt="frontPageImage"
                                            src={frontPicture}
                                        />
                                    </Card>
                                </Grid>
                            </Grid>
                        </Container>
                    </Paper>
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
            )
        }
        else if (radioValue === "2") {
            return (
                <div>
                    <Container maxWidth="sm">
                        <ThemeProvider theme={theme}>
                            <Typography variant="h6" align="center" paragraph>
                                <br />
                                Me er eit selskap med base i Sogndal som driv med bergboring, og starta våren 2014. Me er no 3 ansatte.
                                <br />
                                <br />
                                Arbeidsområdet er Sogn og Fjordane, Hordaland og Møre og Romsdal, men me er fleksible utover dette.
                                <br />
                                Eigar er Per Magne Fimreite.
                                <br />
                                <br />
                                Me tilbyr tenester til konkurransedyktige prisar innan:
                            </Typography>
                        </ThemeProvider>
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
            )
        }
        else if (radioValue === "3") {
            return (
                <div>
                    <Paper className={classes.paper} elevation={0}>
                        <Container maxWidth="md">
                            <Slideshow />
                        </Container>
                    </Paper>
                    <Container maxWidth="sm">
                        <ThemeProvider theme={theme}>
                            <Typography variant="h6" align="center" paragraph>
                                <br />
                                Me er eit selskap med base i Sogndal som driv med bergboring, og starta våren 2014. Me er no 3 ansatte.
                                <br />
                                <br />
                                Arbeidsområdet er Sogn og Fjordane, Hordaland og Møre og Romsdal, men me er fleksible utover dette.
                                <br />
                                Eigar er Per Magne Fimreite.
                                <br />
                                <br />
                                Me tilbyr tenester til konkurransedyktige prisar innan:
                            </Typography>
                        </ThemeProvider>
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
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

    return (
        <div className={classes.root}>
            {renderHomepage()}
            <FormControl component="fieldset">
                <FormLabel component="legend">Different homepages</FormLabel>
                <RadioGroup value={radioValue} row onChange={handleRadioChange}>
                    <FormControlLabel value="1" control={<Radio />} label="1" />
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                    <FormControlLabel value="3" control={<Radio />} label="3" />
                </RadioGroup>
            </FormControl>
        </div>
    );
}

export default HomePage;

