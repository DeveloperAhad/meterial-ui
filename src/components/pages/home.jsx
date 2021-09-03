import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import NewsCard from '../common/NewsCard';
import CircularProgress from '@material-ui/core/CircularProgress'

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
    const [loader, setLoader] = useState(true);
    const [newes, setNewes] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=fdfcdcc975a14f61abd8a0e228f98d44`).then(res => res.json()).then(data => {
            setNewes(data.articles);
            setLoader(false);
            console.log(data);
        });
    }, []);

    useEffect(() => {
        if(newesCata !== "") {
            setNewes([]);
            setLoader(true);
            fetch(`https://newsapi.org/v2/everything?q=${newesCata}&apiKey=fdfcdcc975a14f61abd8a0e228f98d44`).then(res => res.json()).then(data => {
                setNewes(data.articles);
                setLoader(false);
                console.log(data);
            });
        }
    }, [newesCata]);




    return (
        <div>
            <Container maxWidth="lg" className={classes.container}>
                
                <Grid container direction="row" spacing={3}>
                    {newes.map((el, index) => <Grid key={index} item xs={3}>
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
