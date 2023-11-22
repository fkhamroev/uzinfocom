import React, { useEffect, useState } from "react";
import "./Events.css";
// import img from "../../Assets/img/gallery1.jpg";
// import img2 from "../../Assets/img/gallery2.jpg";

const url =
  "https://newsapi.org/v2/everything?q=tesla&from=2023-10-22&sortBy=publishedAt&apiKey=c2156c5ee6224a8c8d7cb95f72db4da3";

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
      <section className="events">
        <div className="container">
          <h2 className="events-title">События</h2>
          <div className="events-cards">
            {articles.map(
              (article, index) =>
                article.title && (
                  <div className="events-card" key={index}>
                    <img
                      src={article.urlToImage}
                      alt=""
                      className="events-img"
                    />
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
        </div>
      </section>
    </>
  );
};
