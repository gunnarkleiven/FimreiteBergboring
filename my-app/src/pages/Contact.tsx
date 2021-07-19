import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import contactImage from "../assets/likeAWallpaper.jpeg";
// import contactImage1 from "../assets/likeAWallpaper1.png";
import contactImage2 from "../assets/likeAWallpaper2.png";
import Divider from '@material-ui/core/Divider';
import MessageForm from "../components/MessageForm";

interface ContactProps {

}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        gridContainer: {
            padding: theme.spacing(1),
        },
        paper: {
            backgroundImage: `url(${contactImage})`,
            //backgroundSize: "cover",
            minHeight: 400,
        },
        card: {
            minWidth: 275,
            border: "none",
            boxShadow: "none",
        },
        mediaCard: {
            //maxWidth: 900,
        },
    }),
);


const Contact: React.FC<ContactProps> = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>

            {/* <mage
                    src={contactImage}
                    aspectRatio={(16 / 9)}
                /> */}
            {/* <Paper className={classes.paper}>
                <Grid container>
                    <Grid item>
                        <div>
                            <Typography variant="h2">
                                Test
                            </Typography>
                        </div>
                    </Grid>

                </Grid>
            </Paper> */}
            <Container maxWidth="lg">

                <Grid
                    container
                    className={classes.gridContainer}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={3}
                >
                    <Grid item xs={12}>
                        <Card className={classes.mediaCard} square>
                            <CardMedia
                                image={contactImage2}
                                title={"Logo"}
                                component="img"
                            />

                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h6" >
                                    Besøksadresse:
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    FIMREITE BERGBORING AS
                                    <br />
                                    Kloppavegen 9
                                    <br />
                                    6854 Kaupanger
                                    <br />
                                </Typography>
                                <Divider />
                                <Typography variant="h6" gutterBottom>
                                    Postaddrese
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Fimreite Bergboring AS
                                    <br />
                                    Fimreite
                                    <br />
                                    6856 Sogndal
                                </Typography>
                                <Divider />
                                <Typography variant="body1" gutterBottom>
                                    <br />
                                    Dagleg leiar: Per Magne Fimreite
                                    <br />
                                    Tlf: 000 00 00
                                    <br />
                                    Epost: mail@something.com
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        {/* <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h6" align="center">
                                    "Legg igjen melding" under konstruksjon
                                </Typography>
                            </CardContent>
                        </Card> */}

                        <MessageForm />
                    </Grid>
                </Grid>

            </Container>
        </div >
    );
}


export default Contact;