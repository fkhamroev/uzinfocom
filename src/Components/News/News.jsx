import React, { useEffect, useState } from "react";
import "./News.css";
import slider2 from "../../Assets/img/slider2.jpg";

const url =
  "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c2156c5ee6224a8c8d7cb95f72db4da3";

export const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(url);
        const json = await result.json();
        setArticles(json.articles.slice(0, 4));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("ru-RU", options);
  };

  return (
    <div className="news container">
      <div className="news-row1">
        <img src={slider2} className="news-img" alt="" />
        {articles.length > 0 &&
          articles[0].title &&
          articles[0].publishedAt &&
          articles[0].content && (
            <div className="news-card">
              <h2 className="news-date">
                {formatDate(articles[0].publishedAt)}
              </h2>
              <h1 className="news-title">{articles[0].title}</h1>
              <hr />
              <p className="news-desc">{articles[0].content}</p>
              <a
                href={articles[0].url}
                className="news-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Читать далее
              </a>
            </div>
          )}
      </div>
      <div className="news-row2">
        {articles.slice(1).map(
          (article, index) =>
            article.title &&
            article.publishedAt &&
            article.content && (
              <div className="news-card" key={index}>
                <h2 className="news-date">{formatDate(article.publishedAt)}</h2>
                <h1 className="news-title">{article.title}</h1>
                <hr />
                <p className="news-desc">{article.content}</p>
                <a
                  href={article.url}
                  className="news-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Читать далее
                </a>
              </div>
            )
        )}
      </div>
      <a href="#" className="news-href">
        Все новости
      </a>
    </div>
  );
};
