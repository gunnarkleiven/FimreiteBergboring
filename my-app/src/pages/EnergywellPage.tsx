import React from 'react';
import { makeStyles, createStyles, Theme, createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


interface EnergywellPageProps {

}

let theme = createTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
    }),
);


const EnergywellPage: React.FC<EnergywellPageProps> = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container maxWidth="md">
                <ThemeProvider theme={theme}>
                    <Typography variant="h6" align="center" paragraph>
                        <br />
                        Energibrønnar
                        <br />
                        Denne sida er under konstruksjon
                    </Typography>
                </ThemeProvider>
            </Container>
        </div>
    );
}


export default EnergywellPage;