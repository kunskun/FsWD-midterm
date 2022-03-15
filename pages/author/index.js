import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fswd-wp.devnss.com/wp-json/wp/v2/users?per_page=100`)
      .then((res) => {
        setAuthors(res.data);
      });
  }, []);

  return (
    <div className="styles.container progress-bar-striped bg-warning p-3">
      <div className="d-flex justify-content-center justify-content-center my-3">
        <h1>Author List</h1>
      </div>
      <div className="row d-flex justify-content-center">
        {authors.map((item) => {
          return (
            <>
              <div className="col-4">
                <a
                  href={item.link}
                  className="mx-1"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <div className="card p-2">
                      <div className="card-img-top">
                        <img src={item.avatar_urls["96"]} style={{width: '100%'}}/>
                      </div>
                    <div className="card-title d-flex justify-content-center justify-content-center">
                      <h3>{item.name}</h3>
                    </div>
                    <div className="card-body">
                      <h6>Describtion:</h6>
                      <p>{item.description ? item.description : "-"}</p>
                    </div>
                  </div>
                </a>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
