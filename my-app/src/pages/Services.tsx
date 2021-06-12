import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


interface ServicesProps {

}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
    }),
);

const Services: React.FC<ServicesProps> = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container maxWidth="md">
                <Typography variant="h6" align="center" paragraph>
                    These are our services
                </Typography>
            </Container>
        </div>
    );
}


export default Services;