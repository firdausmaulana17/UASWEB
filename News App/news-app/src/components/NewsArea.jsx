import { useEffect, useState } from "react"
import NewsItem from "./NewsItem";

const NewsArea = ({category}) => {
    const [articles, setArticles] = useState([]);

    useEffect(()=> {
        let url = `https://newsdata.io/api/1/news?country=us&category=${category}&apikey=${import.meta.env.VITE_API_KEY}`;
        fetch(url)
        .then(Response=> Response.json())
        .then(data=>{
        console.log("API RESPONSE",data);
          setArticles(Array.isArray(data.results)? data.results: []);
        })
        .catch(err => console.error(err));
    }, [category]);
  return (
    <div className="text-center">
   <h2 className="text-center">
    <span className="badge bg-danger">Latest News</span>
   </h2>
   {articles.map((news,index)=>{
    return (
    <NewsItem 
    key={index} 
    title={news.title}
    description={news.description} 
    src={news.image_url}
    url={news.url}
    />
    )
   })}
   </div>
  )
}

export default NewsArea