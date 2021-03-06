import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Comment from "./comment";
import moment from "moment";
import Link from "next/link";

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

  const callAPI = async (a, b, c) => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Basic ZnN3ZDpmc3dkLWNtcw==",
    };

    await axios
      .post(
        "https://fswd-wp.devnss.com/wp-json/wp/v2/comments?posts",
        {
          content: b,
          author_name: a,
          post: c,
        },
        {
          headers: headers,
        }
      )
      .then((res) => {
        console.log(res);
      });
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
                <Link
                  href={fineAuthor(posts.author).link}
                  style={{ color: "black" }}
                >
                  <span> {fineAuthor(posts.author).name} </span>
                </Link>
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
                      <Link
                        key={id}
                        href={tmp.link}
                        className="mx-1"
                        style={{ color: "black" }}
                      >
                        {tmp.name}
                      </Link>
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
                    <Link
                      key={id}
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
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="card p-3 mb-3">
          <div>
            <h3>Write Comment</h3>
          </div>
          <form>
            <div class="form-group mb-2">
              <label for="name">Name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Enter name"
                required
              />
            </div>
            <div class="form-group mb-2">
              <label for="comment">Comment</label>
              <input
                type="text"
                class="form-control"
                id="comment"
                placeholder="Enter Message"
                required
              />
            </div>
          </form>
          <button
            class="btn btn-dark"
            onClick={() =>
              callAPI(
                document.getElementById("name").value,
                document.getElementById("comment").value,
                post_id
              )
            }
          >
            Submit
          </button>
        </div>
        <div className="card mb-1 p-3">
          <Comment />
        </div>
      </div>
    );
  }
}
