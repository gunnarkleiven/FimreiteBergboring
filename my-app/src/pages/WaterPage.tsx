import React from 'react'
import { makeStyles, createStyles, Theme, createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import DrillingImage from '../assets/DrillingStockImage.png';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

interface WaterPageProps {

}

let theme = createTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        container: {
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
        },
        cardMedia: {
            height: 650,
        },
    }),
);

const WaterPage: React.FC<WaterPageProps> = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container maxWidth="md" className={classes.container}>
                <Grid
                    container
                    direction="row"
                    // justifyContent="space-between"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <Grid item xs={6} sm={6}>
                        <ThemeProvider theme={theme}>
                            <Typography variant="h6" align="center" paragraph>
                                Some information about this topic
                            </Typography>
                        </ThemeProvider>
                    </Grid>

                    <Grid item xs={6} sm={6}>
                        <Card>
                            <CardMedia
                                className={classes.cardMedia}
                                image={DrillingImage}
                            />
                        </Card>

                    </Grid>

                </Grid>

            </Container>
        </div>
    );

}


export default WaterPage;