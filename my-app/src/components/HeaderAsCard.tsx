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
import Paper from '@material-ui/core/Paper';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import logo from "../assets/Fimreite-logo-1.png";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {

            backgroundColor: "black",
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
        },
        logoRoot: {
            maxWidth: 345
        },
        media: {
            maxWidth: 345,
        },
        backgroundStyle: {
            backgroundColor: "black"
        }
    }),
);

interface Props {
    linkPaths: NameAndPath[];
}

const HeaderAsCard: React.FunctionComponent<Props> = ({ linkPaths }) => {
    const [pages, setPages] = useState<Props>({ linkPaths });

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={logo}
                title="Logo"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Fimreite Bergboring
                </Typography>
            </CardContent>

        </Card>
    );
}

export default HeaderAsCard;