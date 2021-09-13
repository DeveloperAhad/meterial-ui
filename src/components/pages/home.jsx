import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import NewsCard from '../common/NewsCard';
import CircularProgress from '@material-ui/core/CircularProgress'
import NewsHook from '../../hooks/newsHook';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    container: {
      paddingTop: '50px',
    },
    loader: {
        textAlign: 'center',
        paddingTop: '50px',
    }
}));

function HomePage({newesCata}) {
    const classes = useStyles();
    const {loader, news} = NewsHook(newesCata);

    return (
        <div>
            <Container maxWidth="lg" className={classes.container}>
                
                <Grid container direction="row" spacing={3}>
                    {news.map((el, index) => <Grid key={index} item xs={3}>
                            <NewsCard newsData={el}/>
                        </Grid>)}
                </Grid>
                {loader && (
                    <div className={classes.loader}>
                        <CircularProgress />
                    </div>
                )}
            </Container>
        </div>
    )
}

export default HomePage;
