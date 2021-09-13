import React, {useState, useEffect} from 'react'

function NewsHook(newesCata = "") {
    const [loader, setLoader] = useState(false);
    const [news, setNews] = useState([]);
    useEffect(() => {
        setLoader(true);
        fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=fdfcdcc975a14f61abd8a0e228f98d44`).then(res => res.json()).then(data => {
            setNews(data.articles);
            setLoader(false);
            console.log(data);
        });
    }, [])


     useEffect(() => {
        if(newesCata !== "") {
            setNews([]);
            setLoader(true);
            fetch(`https://newsapi.org/v2/everything?q=${newesCata}&apiKey=fdfcdcc975a14f61abd8a0e228f98d44`).then(res => res.json()).then(data => {
                setNews(data.articles);
                setLoader(false);
                console.log(data);
            });
        }
    }, [newesCata]);
    return {
        loader,
        news
    }
}

export default NewsHook
