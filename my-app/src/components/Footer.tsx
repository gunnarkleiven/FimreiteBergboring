import React, { useState } from 'react';
import { createStyles, makeStyles, Theme, createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
        },
        footer: {
            backgroundColor: "#4a4e57",
            padding: theme.spacing(6, 0),
        },
        container: {
            backgroundColor: "#4a4e57",
            alignItems: "flex-end",
        },
        typography: {
            color: "#FFFFFF",
        },
    }),
);

interface Props {

}

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const Footer: React.FunctionComponent = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Container maxWidth="sm">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <ThemeProvider theme={theme}>
                            <Typography className={classes.typography} variant="h6" component="h2" align="center" gutterBottom>
                                BESØKSADRESSE:
                            </Typography>
                            <Typography className={classes.typography} variant="body2" component="p" align="center">
                                FIMREITE BERGBORING AS <br />
                                Kloppavegen 9, 6854 Kaupanger <br />
                                Telefon: 000 00 000 <br />
                                post@fimreitebergboring.no
                            </Typography>
                        </ThemeProvider>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <ThemeProvider theme={theme}>
                            <Typography className={classes.typography} variant="body2" align="center" gutterBottom>
                                <br />
                                <br />
                                FIMREITE BERGBORING AS <br />
                                Fimreite, 6856 Sogndal <br />
                                Telefon: 000 00 000 <br />
                                post@fimreitebergboring.no <br />
                            </Typography>
                        </ThemeProvider>
                    </Grid>
                </Grid>
                <ThemeProvider theme={theme}>
                    <Typography className={classes.typography} variant="body2" align="center">
                        <br />
                        {'© Fimreite Bergboring - 2018 - Utvikla av Gunnar Fimreite Kleiven'}
                    </Typography>
                </ThemeProvider>
            </Container>
        </footer>
    );

}

export default Footer;