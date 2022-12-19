export function PostsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log("handleSubmit", params);
    props.onCreatePost(params);
    // axios.post("http://localhost:3000/posts.json", params).then((response) => {
    //   console.log(response.data);
    event.target.reset();
    // });
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