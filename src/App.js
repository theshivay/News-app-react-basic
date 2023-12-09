import { useEffect, useState } from 'react';
import './App.css';
import News from './News';

function App() {

  let [article,setArticle]=useState([]);
  let [category,setCategary]=useState("india")

  useEffect(()=>{
    fetch(`https://newsapi.org/v2/everything?q=${category}&from=2023-12-07&apiKey=fafd67e844b34a6698efd720bb6d847b`)
    .then((Response)=>Response.json())
    .then((news)=>{
      setArticle(news.articles);
      console.log(news.articles);
    })
    .catch((err)=>{
      setArticle(err);
    })
  },[category])



  return (
    <div className="App">
      <header className='header'>
        <h1>News App</h1>

        <input type='text' onChange={(event)=>{
          if(event.target.value!==""){
            setCategary(event.target.value);
          }
          else{
            setCategary("india");
          }
        }} placeholder='Search News'/>

      </header>
      <section className='news-article'>
        {
          article.length!==0?
          article.map((article)=>{
            return(
              <News article={article} />
            )
          })
          :<h3>No News Found On This Topic </h3>
        }

        
      </section>
    </div>
  );
}

export default App;
