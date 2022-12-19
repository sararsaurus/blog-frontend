import axios from "axios";

export function PostsNew(props) {
  const handleCreatePost = (params) => {
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      console.log(response, "Creating a post!");
      window.location.href = "/";
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log("handleSubmit new post");
    handleCreatePost(params);
    event.target.reset();
  };

  return (
    <div id="posts-new">
      <h1>New Post</h1>

      <form onSubmit={handleSubmit}>
        <div>
          Title:
          <br />
          <input name="title" type="text" />
        </div>
        <div>
          Body:
          <br />
          <input name="body" type="text" />
        </div>
        <div>
          Image:
          <br />
          <input name="image" type="text" />
        </div>
        <button type="submit">Create post</button>
      </form>
    </div>
  );
}
