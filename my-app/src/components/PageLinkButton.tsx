import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import services from '../misc/services';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
        nested: {
            paddingLeft: theme.spacing(4),
        },
    }),
);

interface Props {
    key?: number;
    path: string;
    name: string;
    parentDrawerToggleState: () => void;
}


//const PageLinkButton: React.FunctionComponent<Props & RouteComponentProps<any>> = ({ path, name, key }) => {
const PageLinkButton: React.FunctionComponent<Props> = ({ path, name, parentDrawerToggleState }) => {
    const [pagePath, setPagePath] = useState<string>(path);
    const [pageName, setPageName] = useState<string>(name);
    const [open, setOpen] = useState<boolean>(false);

    const toggleDrawer = parentDrawerToggleState;

    const classes = useStyles();
    //const [buttonKey, setButtonKey] = useState<number>(key);

    const handleClick = () => {
        // console.log(`Click to page ${pageName}`)
        // console.log("Clicked the expander");
        setOpen(!open);
    }

    const createListItem = () => {
        return (
            <ListItem
                button
                component={Link}
                to={pagePath}
                //onClick={() => console.log(`Clicked ${pageName}`)}
                onClick={toggleDrawer}
            >
                <ListItemText primary={pageName} />
            </ListItem>

        )

    }

    const createCollapseListItem = () => {
        return (
            <div>
                <ListItem button onClick={handleClick}>
                    <ListItemText primary={pageName} />
                    {(pageName === "Tjenester") &&
                        (open ? <ExpandLess /> : <ExpandMore />)}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {services.map((service, index) => {
                            return (
                                <ListItem
                                    key={index}
                                    className={classes.nested}
                                    button
                                    component={Link}
                                    to={service.path}
                                    onClick={toggleDrawer}
                                >
                                    <ListItemText primary={service.name} />
                                </ListItem>
                            );
                        })}
                    </List>
                </Collapse>
            </div>
        );
    }

    return (
        // <div>
        //     <Button
        //         component={Link}
        //         to={pagePath}
        //         // style={{ width: 200 }}
        //         variant="contained"
        //     >
        //         {displayPageName ? pageName : "Les meir"}
        //     </Button>
        // </div>
        <div>
            {(pageName === "Tjenester") ? createCollapseListItem() : createListItem()}
            <Divider component="li" />
        </div>
        // <div>

        //     }

        //     {/* {(pageName === "Tjenester") &&
        //     <Collapse in={open} timeout="auto" unmountOnExit>

        //     </Collapse>
        // } */}
        // </div >
    );
}

export default PageLinkButton;