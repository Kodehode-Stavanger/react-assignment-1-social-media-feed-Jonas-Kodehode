import posts from "./assets/posts";
import Post from "./Post";

function Feed() {
  return (
    <div id="post-wrapper">
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
}

export default Feed;
