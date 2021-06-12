import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

interface FundamentPageProps {

}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
    }),
);

const FundamentPage: React.FC<FundamentPageProps> = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container maxWidth="md">
                <Typography variant="h6" align="center" paragraph>
                    This is the page for the Fundament
                </Typography>
            </Container>
        </div>
    );
}


export default FundamentPage;