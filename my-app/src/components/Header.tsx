import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { NameAndPath } from '../App';
import MenuDrawer from './MenuDrawer';
import Slideshow from './Slideshow';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import logo from "../assets/Fimreite-logo-1.png";
import FacebookIcon from '@material-ui/icons/Facebook';
import Container from '@material-ui/core/Container';
import { CardActionArea } from '@material-ui/core';
import { Link } from 'react-router-dom';



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            backgroundColor: "black",
        },
        appbar: {
            alignItems: "center",
            backgroundColor: "black",
            //position: "absolute",
            //flexGrow: 1,
        },
        menuButton: {
            marginLeft: theme.spacing(2),
        },
        title: {
            marginRight: theme.spacing(2),
        },
        toolbar: {
            //justifyContent: 'space-between',
            //overflowX: 'auto',
            backgroundColor: "black",
        },
        logo: {
            //maxWidth: 345,
            margin: "auto",
        },
        media: {
            // height: "100%",
            // width: "100%",
            height: 100,
            width: 300,
            paddingTop: '30px',
            paddingBottom: '30px',
            flex: 1,
        },
        card: {
            minWidth: 275,
            backgroundColor: "black",
            flex: 1,
        },
        typography: {
            color: "#FFFFFF",
        },
        icon: {
        },
    }),
);

interface Props {
    linkPaths: NameAndPath[];
}

const Header: React.FunctionComponent<Props> = ({ linkPaths }) => {
    // const [pages, setPages] = useState<Props>({ linkPaths });

    const classes = useStyles();

    const phoneNumber = "000 00 000"

    return (
        <AppBar position="static" className={classes.appbar}>
            <Container maxWidth="lg">
                <Toolbar className={classes.toolbar}>
                    <Card className={classes.card}>
                        <CardActionArea component={Link} to="/">
                            <CardMedia className={classes.media} image={logo} title={"Logo"} component="img" />
                        </CardActionArea>
                    </Card>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography variant="h6" className={classes.typography}>
                                Telefon: {phoneNumber}
                            </Typography>
                            <Typography variant="body2" className={classes.typography}>
                                Ta kontakt for synfaring og tilbod
                            </Typography>
                        </CardContent>
                    </Card>
                    <IconButton className={classes.icon}>
                        <FacebookIcon color="primary" />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Meny
                    </Typography>
                    <MenuDrawer linkPaths={linkPaths} />
                </Toolbar>
                <Toolbar className={classes.toolbar}>
                    <Slideshow />
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;