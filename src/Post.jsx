import posts from "./assets/posts";
import "./index.css";

function Post() {
  return (
    <div id="post-wrapper">
      {posts.map(({ username, content, timestamp, likes }, index) => (
        <div key={index} className="post-container">
          <h2>{username}</h2>
          <p>{content}</p>
          <p>
            <img src="src\assets\licon.jpg" alt="Like icon" id="pic" />
            {likes}
          </p>
          <p>{timestamp}</p>
        </div>
      ))}
    </div>
  );
}

export default Post;
