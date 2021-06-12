import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

interface AboutProps {

}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
    }),
);

const About: React.FC<AboutProps> = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container maxWidth="md">
                <Typography variant="h6" align="center" paragraph>
                    This is the About Page!
                </Typography>
            </Container>
        </div>
    );
}

export default About;