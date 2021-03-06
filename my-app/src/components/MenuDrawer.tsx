import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import { NameAndPath } from '../App';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PageLinkButton from './PageLinkButton';
import List from '@material-ui/core/List';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        list: {
            width: 200,
        },
        fullList: {
            width: 'auto',
        },
        menuButton: {
            marginLeft: theme.spacing(1),
        },
    })
);

interface Props {
    linkPaths: NameAndPath[];
}

const MenuDrawer: React.FunctionComponent<Props> = ({ linkPaths }) => {
    const classes = useStyles();
    const [pages, setPages] = useState<Props>({ linkPaths })
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        //setIsOpen((prevState) => !prevState);
        // console.log("Toggled drawer");
        setIsOpen(!isOpen);
    }

    const closeDrawer = () => {
        setIsOpen(false);
    }

    return (
        <div>
            <div>
                <IconButton className={classes.menuButton} edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
                    <MenuIcon />
                </IconButton>
            </div>
            <Drawer
                anchor="right"
                variant="temporary"
                open={isOpen}
                // onClick={toggleDrawer}
                onClose={closeDrawer}
            >
                <List className={classes.list}>
                    {pages.linkPaths.map((path, index) => {
                        return (
                            <PageLinkButton
                                key={index}
                                path={path.path}
                                name={path.name}
                                parentDrawerToggleState={toggleDrawer}
                            />

                        );
                    })}
                    <Divider />
                </List>

            </Drawer>
        </div>
    );
}

export default MenuDrawer;