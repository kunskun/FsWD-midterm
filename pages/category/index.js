import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

export default function Home() {
  const [posts, setPosts] = useState({});
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async() => {
    await fetchData()
  }, []);

  const fetchData = async () => {
    const post = await axios.get(
      `https://fswd-wp.devnss.com/wp-json/wp/v2/posts?per_page=100`
    );
    const category = await axios.get(
      `https://fswd-wp.devnss.com/wp-json/wp/v2/categories?per_page=100`
    );
    const tag = await axios.get(
      `https://fswd-wp.devnss.com/wp-json/wp/v2/tags?per_page=100`
    );

    await setPosts(post.data);
    await setCategories(category.data);
    await setTags(tag.data);
    await setLoading(false);
  };

  return (
    <div className="styles.container progress-bar-striped bg-warning p-3">
      <div className="d-flex justify-content-center justify-content-center my-3">
        <h1>Category List</h1>
      </div>
      <div className="row d-flex justify-content-start m-3">
        {categories.map((item) => {
          return (
            <>
              <div className="col-3">
                {/* <Link href={`./category/${item.id}`} style={{ color: "black" }}> */}
                <Link href={item.link} style={{ color: "black" }}>
                  <div className="card p-2">
                    <div className="card-title d-flex justify-content-center justify-content-center">
                      <h3>{item.name}</h3>
                    </div>
                    <div className="card-body">
                      <h6>Describtion:</h6>
                      <p>{item.description ? item.description : "-"}</p>
                    </div>
                  </div>
                </Link>
              </div>
            </>
          );
        })}
      </div>
      <hr />
      <div className="d-flex justify-content-center justify-content-center my-3">
        <h1>Tag List</h1>
      </div>
      <div className="row d-flex justify-content-start">
        {tags.map((item) => {
          return (
            <>
              <div className="col-3">
                <Link
                  href={item.link}
                  className="mx-1"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <div className="card p-2">
                    <div className="card-title d-flex justify-content-center justify-content-center">
                      <h3>{item.name}</h3>
                    </div>
                    <div className="card-body">
                      <h6>Describtion:</h6>
                      <p>{item.description ? item.description : "-"}</p>
                    </div>
                  </div>
                </Link>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
