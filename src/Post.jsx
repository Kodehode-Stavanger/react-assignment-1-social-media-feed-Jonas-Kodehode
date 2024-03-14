import "./index.css";

function Post({ post }) {
  const { username, content, timestamp, likes } = post;
  return (
    <div className="post-container">
      <h2>{username}</h2>
      <p>{content}</p>
      <p>
        <img src="src\assets\licon.jpg" alt="Like icon" id="pic" />
        {likes}
      </p>
      <p>{timestamp}</p>
    </div>
  );
}

export default Post;
