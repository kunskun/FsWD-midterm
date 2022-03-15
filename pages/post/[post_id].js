import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Comment from "./comment";
import moment from "moment";

export default function Post_Detail() {
  const [posts, setPosts] = useState({});
  const [categories, setCategory] = useState([]);
  const [tags, setTags] = useState([]);
  const [authors, setArthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { post_id } = router.query;

  useEffect(async () => {
    await fetchData();
  }, []);

  const fetchData = async () => {
    const post = await axios.get(
      `https://fswd-wp.devnss.com/wp-json/wp/v2/posts/${post_id}`
    );
    const category = await axios.get(
      `https://fswd-wp.devnss.com/wp-json/wp/v2/categories?per_page=100`
    );
    const tag = await axios.get(
      `https://fswd-wp.devnss.com/wp-json/wp/v2/tags?per_page=100`
    );
    const author = await axios.get(
      `https://fswd-wp.devnss.com/wp-json/wp/v2/users?per_page=100`
    );

    await setPosts(post.data);
    await setCategory(category.data);
    await setTags(tag.data);
    await setArthors(author.data);
    await setLoading(false);
  };

  const fineAuthor = (id) => {
    let tmp = {};
    authors.forEach((author) => {
      if (id == author.id) {
        tmp = author;
      }
    });
    return tmp;
  };

  if (loading) {
    return (
      <div className="styles.container">
        <h2>loading</h2>
      </div>
    );
  } else {
    return (
      <div className="styles.container progress-bar-striped bg-warning p-3">
        <div className="card mb-3">
          <div className="card-title d-flex justify-content-start align-items-center align-self-center pt-4">
            <h1>{posts.title.rendered}</h1>
          </div>
          <div className="d-flex justify-content-start align-items-center align-self-center pb-3">
            <h5>
              Published by
              {
                <a
                  href={fineAuthor(posts.author).link}
                  style={{ color: "black" }}
                >
                  <span> {fineAuthor(posts.author).name} </span>
                </a>
              }
              on
              <span> {moment(posts.date).format("MMMM DD YYYY")}</span>
            </h5>
          </div>
          <div className="card-body">
            <div dangerouslySetInnerHTML={{ __html: posts.content.rendered }} />
            <hr />
            <div>
              <h5 className="my-4">
                Published in
                <span className="p-2">
                  {posts.categories.map((id) => {
                    let tmp = {};
                    categories.filter((item) => {
                      if (item.id === id) {
                        tmp = item;
                      }
                    });
                    return (
                      <a
                        href={tmp.link}
                        className="mx-1"
                        style={{ color: "black" }}
                      >
                        {tmp.name}
                      </a>
                    );
                  })}
                </span>
              </h5>
              <div className="my-4">
                {posts.tags.map((id) => {
                  let tmp = {};
                  tags.filter((item) => {
                    if (item.id === id) {
                      tmp = item;
                    }
                  });
                  return (
                    <a
                      href={tmp.link}
                      className="mx-1"
                      style={{ color: "black" }}
                    >
                      <button
                        className="btn btn-dark disable mx-1"
                        style={{ borderRadius: "13px", width: "10%" }}
                      >
                        {tmp.name}
                      </button>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-1 p-3">
          <Comment />
        </div>
      </div>
    );
  }
}
