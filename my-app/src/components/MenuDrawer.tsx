import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { NameAndPath } from '../App';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PageLinkButton from './PageLinkButton';


const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

interface Props {
    linkPaths: NameAndPath[];
}

const MenuDrawerV2: React.FunctionComponent<Props> = ({ linkPaths }) => {
    const classes = useStyles();
    const [pages, setPages] = useState<Props>({ linkPaths })
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    }

    const closeDrawer = () => {
        setIsOpen(false);
    }



    return (
        <div>
            <div>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
                    <MenuIcon />
                </IconButton>
            </div>
            <Drawer
                anchor="right"
                variant="temporary"
                open={isOpen}
                onClick={toggleDrawer}
                onClose={closeDrawer}
            >
                {pages.linkPaths.map((path, index) => {
                    return (
                        <PageLinkButton
                            key={index}
                            path={path.path}
                            name={path.name}
                            displayPageName={true}
                        />
                    );
                })}
                <Divider />

            </Drawer>
        </div>
    );
}

export default MenuDrawerV2;