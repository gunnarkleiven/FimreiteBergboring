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
        }
    }),
);

interface Props {
    linkPaths: NameAndPath[];
}

const Header: React.FunctionComponent<Props> = ({ linkPaths }) => {
    const [pages, setPages] = useState<Props>({ linkPaths });

    const classes = useStyles();

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
                    <MenuDrawer linkPaths={linkPaths} />
                </Toolbar>
            </AppBar>
        </div >
    );

}

export default Header;