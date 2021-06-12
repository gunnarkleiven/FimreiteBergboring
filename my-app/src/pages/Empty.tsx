import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


interface EmptyProps {

}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
    }),
);


const Empty: React.FC<EmptyProps> = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container maxWidth="md">
                <Typography variant="h6" align="center" paragraph>
                    Empty page ¯\_(ツ)_/¯
                </Typography>
            </Container>
        </div>
    );
}


export default Empty;