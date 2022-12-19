import axios from "axios";
import { useState, useEffect } from "react";
// import { PostsNew } from "./PostsNew";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { PostsIndex } from "./PostsIndex";
import { Modal } from "./Modal";
import { PostsShow } from "./PostsShow";
import Snowfall from "react-snowfall";

export function Home() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  const handleIndexPosts = () => {
    console.log("gonna get all posts!");
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  const handleShowPost = (post) => {
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  };

  const handleHidePost = () => {
    setIsPostsShowVisible(false);
  };

  // const handleCreatePost = (params) => {
  //   axios.post("http://localhost:3000/posts.json", params).then((response) => {
  //     setPosts([...posts, response.data]);
  //   });
  // };

  const handleUpdatePost = (id, params) => {
    axios.patch(`http://localhost:3000/posts/${id}.json`, params).then((response) => {
      // console.log(response.data);
      setPosts(
        posts.map((post) => {
          if (post.id === response.data.id) {
            return response.data;
          } else {
            return post;
          }
        })
      );
      handleHidePost();
    });
  };

  const handleDestroyPost = (post) => {
    console.log(post);
    axios.delete(`http://localhost:3000/posts/${post.id}.json`).then((response) => {
      setPosts(posts.filter((p) => p.id !== post.id));
      handleHidePost();
    });
  };

  useEffect(handleIndexPosts, []);

  return (
    <div>
      <div className="container text-center">
        <div>
          <Snowfall
            color="gold"
            // style={{ background: "#fff" }}
            snowflakeCount={200}
          />
        </div>
        <div className="row">
          {/* <div className="col">
            <Signup />
          </div> */}
          <div className="col">
            {/* <Login /> */}
            <LogoutLink />
          </div>
          {/* <div className="col">
            <PostsNew onCreatePost={handleCreatePost} />
          </div> */}
        </div>
      </div>
      <div className="container">
        <Modal show={isPostsShowVisible} onClose={handleHidePost}>
          <PostsShow post={currentPost} onUpdatePost={handleUpdatePost} onDestroyPost={handleDestroyPost} />
        </Modal>
        <PostsIndex posts={posts} onSelectPost={handleShowPost} />
      </div>
    </div>
  );
}
