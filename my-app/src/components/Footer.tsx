import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        footer: {
            backgroundColor: "black",
            padding: theme.spacing(6, 0),
        },
        container: {
            backgroundColor: "black",
            minHeight: 100,
            alignItems: "flex-end",
        },
        typography: {
            color: "#FFFFFF",
        },
    }),
);

interface Props {

}

const Footer: React.FunctionComponent = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Container maxWidth="lg">
                <Typography className={classes.typography} variant="h6" align="center" gutterBottom>
                    Goodbye world
                </Typography>
            </Container>

        </footer>
    );

}

export default Footer;