import { useEffect, useState } from "react"
import NewsItem from "./NewsItem";

const NewsArea = () => {
    const [articles, setArticles] = useState([]);
    useEffect(()=>{
        let url = `https ://newsdata.io/api/1/news?apikey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(Response=> Response.json()).then(data=>setArticles(data.results ||[]));
    },[]);
  return (
    <div>
   <h2 className="text-center">
    <span className="badge bg-danger">Latest News</span>
   </h2>
   {articles.map((news,index)=>{
    return (
    <NewsItem 
    key={index} 
    title={news.title}
    description={news.description} 
    src={news.urlToImage}
    url={news.url}
    />
    )
   })}
   </div>
  )
}

export default NewsArea