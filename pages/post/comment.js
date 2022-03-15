import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { useRouter } from "next/router";

export default function Comment() {
  const [comments, setComments] = useState([]);

  const router = useRouter();
  const { post_id } = router.query;

  useEffect(() => {
    axios.get(`https://fswd-wp.devnss.com/wp-json/wp/v2/comments?per_page=100`).then((res) => {
      setComments(res.data);
    });
  }, []);

  return (
    <>
      {comments.map((comment) => {
        if(comment.post == post_id)
        return(
        <div className="card mb-2 p-3" key={comment.id}>
          <div className="card-body">
            <div className="row d-flex justify-content-start align-items-center align-self-center">
              <div className="col-1 p-2">
                  <img className="rounded-circle" src={comment.author_avatar_urls["96"]} width="100%"/>
              </div>
              <div className="col-11">
                <h5 className="card-title"  dangerouslySetInnerHTML={{ __html: comment.author_name }} />
                <p dangerouslySetInnerHTML={{ __html: moment(comment.date).format('MMMM DD YYYY, hh:mm:ss a') }} />
              </div>
            </div>
            <div className="row pt-4">
                <p dangerouslySetInnerHTML={{ __html: comment.content.rendered }} />
            </div>
          </div>
          
        </div>
      )})}
    </>
  );
}
