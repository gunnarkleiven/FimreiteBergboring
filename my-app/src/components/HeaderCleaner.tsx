import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { NameAndPath } from '../App';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import logo from "../assets/Fimreite-logo-1.png";
import FacebookIcon from '@material-ui/icons/Facebook';
import Container from '@material-ui/core/Container';
import { CardActionArea } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MenuListLinks from './MenuListLinks';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            backgroundColor: "#4a4e57",
        },
        appbar: {
            alignItems: "center",
            backgroundColor: "#4a4e57",
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
            backgroundColor: "##4a4e57",
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
            backgroundColor: "#4a4e57",
            flex: 1,
            border: "none",
            boxShadow: "none",
        },
        typography: {
            color: "#FFFFFF",
        },
        icon: {
        },
        button: {
            color: "#FFFFFF",
        }
    }),
);

interface Props {
    linkPaths: NameAndPath[];
}

interface HeaderButtonField {
    name: string;
    path: string;
}

const HeaderCleaner: React.FunctionComponent<Props> = ({ linkPaths }) => {
    // const [pages, setPages] = useState<Props>({ linkPaths });

    const classes = useStyles();

    const buttonField: HeaderButtonField[] = [
        {
            name: "Hovedside",
            path: process.env.PUBLIC_URL + '/'
        },
        {
            name: "Tjenester",
            path: "/services/"
        },
        {
            name: "Galleri",
            path: "/gallery/"
        },
        {
            name: "Om oss",
            path: "/about/"
        },
        {
            name: "Kontakt",
            path: "/contact/"
        }
    ]

    const services: NameAndPath[] = [
        {
            name: "Boring etter vatn",
            path: "/water/",
        },
        {
            name: "Gjennomboring",
            path: "/piercing/",
        },
        {
            name: "Energibrønnar",
            path: "/energywells/",
        },
        {
            name: "Fundamentering",
            path: "/fundament/",
        },
    ]


    const phoneNumber = "000 00 000"

    return (
        <AppBar position="static" className={classes.appbar}>
            <Container maxWidth="lg">
                <Toolbar className={classes.toolbar}>
                    <Card className={classes.card}>
                        <CardActionArea component={Link} to={process.env.PUBLIC_URL + '/'}>
                            <CardMedia
                                className={classes.media}
                                image={logo}
                                title={"Logo"}
                                component="img"
                            />
                        </CardActionArea>
                    </Card>
                    {buttonField.map((btn, idx) => {
                        if (btn.name === "Tjenester") {
                            // return (
                            //     <Button
                            //         key={idx}
                            //         className={classes.button}
                            //         component={Link}
                            //         to={btn.path}
                            //         size="large"
                            //         endIcon={<ArrowDropDownIcon />}
                            //     >
                            //         {btn.name}
                            //     </Button>
                            // );
                            return (
                                <MenuListLinks key={idx} btnName={btn.name} btnServices={services} />
                            );
                        }
                        else {
                            return (
                                <Button
                                    key={idx}
                                    className={classes.button}
                                    component={Link}
                                    to={btn.path}
                                    size="large"
                                >
                                    {btn.name}
                                </Button>
                            );
                        }
                    })}
                    <Button
                        // TODO enable this button
                        disabled={true}
                        component={Link}
                        to={{ pathname: "https://www.facebook.com/Fimreitebergboring/" }}
                        target="_blank"
                        startIcon={<FacebookIcon style={{ fontSize: 40, color: "white" }} />}
                    />
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default HeaderCleaner;