import React from 'react'
import { makeStyles, createStyles, Theme, createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

interface FundamentPageProps {

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

const FundamentPage: React.FC<FundamentPageProps> = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container maxWidth="md">
                <ThemeProvider theme={theme}>
                    <Typography variant="h6" align="center" paragraph>
                        <br />
                        Fundament
                        <br />
                        Denne sida er under konstruksjon
                    </Typography>
                </ThemeProvider>
            </Container>
        </div>
    );
}


export default FundamentPage;