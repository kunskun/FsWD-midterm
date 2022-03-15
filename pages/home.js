import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`https://fswd-wp.devnss.com/wp-json/wp/v2/pages?`).then((res) => {
      setPosts(res.data);
    });
  }, []);

  return (
    <div className="styles.container progress-bar-striped bg-warning p-3">
        {console.log(posts)}
      {alert('asdasdasd')}
      {alert(posts)}
      {alert(axios)}
      {axios.get(`https://fswd-wp.devnss.com/wp-json/wp/v2/pages?`).then((res) => {
        alert(res.data);
      })}
      <div className="row my-4">
        <div className="col-12 d-flex justify-content-center">
          <h1>Full-stack Web Developer</h1>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <h3>Midterm Project</h3>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <h5>Develop By Thanayut Kunsun [62070084]</h5>
        </div>
      </div>
      {posts.map((post) => (
        <div className="card mb-3" key={post.id}>
          <div className="card-body">
            <h2 className="card-title">{post.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </div>
        </div>
      ))}
    </div>
  );
}
