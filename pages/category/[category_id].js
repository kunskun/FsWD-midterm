// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useRouter } from "next/router";
// import moment from "moment";

// export default function Post_Detail() {
//   const [posts, setPosts] = useState({});
//   const [postCate, setPostCate] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [authors, setArthors] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();
//   const { category_id } = router.query;

//   useEffect(async () => {
//     await fetchData();
//     await findPost(category_id);
//   }, []);

//   const fetchData = async () => {
//     const post = await axios.get(
//       `https://fswd-wp.devnss.com/wp-json/wp/v2/posts?per_page=100`
//     );
//     const category = await axios.get(
//         `https://fswd-wp.devnss.com/wp-json/wp/v2/categories?per_page=100`
//       );
//     const tag = await axios.get(
//       `https://fswd-wp.devnss.com/wp-json/wp/v2/tags?per_page=100`
//     );
//     const author = await axios.get(
//       `https://fswd-wp.devnss.com/wp-json/wp/v2/users?per_page=100`
//     );

//     await setPosts(post.data);
//     await setCategories(category.data);
//     await setArthors(author.data);
//     await setLoading(false);
//   };

//   const findPost = (category_id) => {
//     let tmp = [];
//     console.log(posts);
//     posts.forEach((post) => {
//       if (post.categories.includes(category_id)) {
//         tmp.push(post);
//       }
//     });
//     setPostCate(tmp)
//   };

//   const setCategoryName = () => {
//       return categories.filter((item) => {
//           if(item.id == 3){
//               console.log(item.name);
//             return item.name
//           }
//       })
//   }

//   if (loading) {
//     return (
//       <div className="styles.container">
//         <h2>loading</h2>
//       </div>
//     );
//   } else {
//     return (
//         <div className="styles.container progress-bar-striped bg-warning p-3">
//         <div className="d-flex justify-content-center justify-content-center my-3">
//           <h1><span>{ setCategoryName() }</span> Category</h1>
//         </div>
//         {postCate.map((post) => (
//           <div className="card mb-4" key={post.id}>
//             <div className="d-flex justify-content-start align-items-center align-self-center">
//                 <h2 className="card-title">{post.title.rendered}</h2>
//             </div>
//             <div className="d-flex justify-content-start align-items-center align-self-center">
//               <div className="pb-3">
//                 <h5>
//                   Published by
//                   {
//                     // <a
//                     //   href={fineAuthor(post.author).link}
//                     //   style={{ color: "black" }}
//                     // >
//                       <span> {fineAuthor(post.author).name} </span>
//                     // </a>
//                   }
//                   on
//                   <span> {moment(post.date).format("MMMM DD YYYY")}</span>
//                 </h5>
//               </div>
//             </div>
//             <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
//             <div className="card-body">
//               <div className="mx-auto">
//                 <Link href={`./post/${post.id}`} style={{ color: "black" }}>
//                   Continue reading
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }
