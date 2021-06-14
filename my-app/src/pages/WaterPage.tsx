import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

interface WaterPageProps {

}


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
    }),
);

const WaterPage: React.FC<WaterPageProps> = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container maxWidth="md">
                <Typography variant="h6" align="center" paragraph>
                    <br />
                    Boring etter vatn
                    <br />
                    Denne sida er under konstruksjon
                </Typography>
            </Container>
        </div>
    );

}


export default WaterPage;