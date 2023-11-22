import React, { useEffect, useState } from "react";
import "./Events.css";
import img from "../../Assets/img/gallery1.jpg";

const url =
  "https://newsapi.org/v2/everything?q=tesla&from=2023-10-21&sortBy=publishedAt&apiKey=c2156c5ee6224a8c8d7cb95f72db4da3";

export const Events = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(url);
        const json = await result.json();
        setArticles(json.articles.slice(0, 3));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1 className="events-tit container">
        События <hr className="events-hr" />{" "}
      </h1>
      <div className="events container">
        {articles.slice().map(
          (article, index) =>
            article.title && (
              <div className="events-card" key={index}>
                <img src={article.urlToImage} alt="" className="events-img" />
                <h1 className="events-title">{article.title}</h1>
                <a
                  href={article.url}
                  className="events-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Читать далее
                </a>
              </div>
            )
        )}
      </div>
    </>
  );
};
