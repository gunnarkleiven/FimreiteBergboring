import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CategoryCard from '../components/CategoryCard';
import Grid from '@material-ui/core/Grid';

import categories from '../misc/categories';

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
                    <br />
                    Me tilbyr tenester til konkurransedyktige prisar innan:
                </Typography>
                <Grid container spacing={3}>
                    {categories.map((cat, idx) => {
                        return (
                            <CategoryCard key={idx} cat={cat} />
                        );
                    })}

                </Grid>
            </Container>
        </div>
    );
}


export default Services;