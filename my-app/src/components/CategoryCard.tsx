import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import PageLinkButton from './PageLinkButton';
import ICategory from "../interfaces/Category";



interface CategoryCardProps {
    cat: ICategory;
}

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
        minHeight: 500,
        maxHeight: 600,
    },
    media: {
        height: 300,
    },
    actions: {
        justifyContent: "center",
    }
});


const CategoryCard: React.FunctionComponent<CategoryCardProps> = ({ cat }) => {
    const [category, setCategory] = useState<ICategory>(cat);
    const classes = useStyles();



    return (
        <Grid item xs={12} sm={6}>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={category.image}
                    title={category.name}
                />
                <CardContent>
                    <Typography variant="h5" component="h2" gutterBottom>
                        {category.header}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {category.text}
                    </Typography>
                </CardContent>
                <CardActions className={classes.actions}>
                    <PageLinkButton
                        path={category.path}
                        name={category.name}
                        displayPageName={false}
                    />
                </CardActions>
            </Card>
        </Grid>
    );
}

export default CategoryCard;