import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


import ICategory from "../interfaces/Category";



interface CategoryCardProps {
    cat: ICategory;
}

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
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
            </Card>
        </Grid>
    );
}

export default CategoryCard;