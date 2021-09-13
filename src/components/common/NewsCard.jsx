import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


function NewsCard({newsData}) {
    return (
        <Card style={{marginTop: '30px'}}>
            <CardActionArea>
                {newsData.urlToImage && (
                    <CardMedia
                    component="img"
                    style={{height: 250}}
                    title="Contemplative Reptile"
                    src={newsData.urlToImage}
                    />
                )}
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {newsData.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">{newsData.content}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Learn More
                </Button>
            </CardActions>
        </Card>
    )
}

export default NewsCard
