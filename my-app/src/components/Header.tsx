import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { NameAndPath } from '../App';
import PageLinkButton from './PageLinkButton';
import { Link } from 'react-router-dom';
import MenuDrawer from './MenuDrawer';
import Slideshow from './Slideshow';
import Paper from '@material-ui/core/Paper';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import logo from "../assets/Fimreite-logo-1.png";
import FacebookIcon from '@material-ui/icons/Facebook';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        toolbar: {
            justifyContent: 'space-between',
            overflowX: 'auto',
            backgroundColor: "black",
        },
        logoRoot: {
            //maxWidth: 345
        },
        media: {
            height: 140,
        },
        card: {
            minWidth: 275,
            backgroundColor: "black",
        },
        typography: {
            color: "#FFFFFF",
        }
    }),
);

interface Props {
    linkPaths: NameAndPath[];
}

const Header: React.FunctionComponent<Props> = ({ linkPaths }) => {
    const [pages, setPages] = useState<Props>({ linkPaths });

    const classes = useStyles();

    const phoneNumber = "465 81 000"

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <img src={logo} alt="logo" className={classes.logoRoot} />
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
                    <IconButton>
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
            </AppBar>
        </div >
    );

    /*
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    {pages.linkPaths.map((path, index) => {
                        return (
                            <PageLinkButton
                                key={index}
                                path={path.path}
                                name={path.name}
                            />
                        );
                    })}
                    <Typography variant="h6">
                        Meny
                    </Typography>
                    <MenuDrawer linkPaths={linkPaths} />
                </Toolbar>
            </AppBar>
        </div >
    );
    */

}

export default Header;