import styles from "./Post.module.css";

import { useParams } from "react-router-dom";
import { useFetchDocument } from "../../hooks/useFetchDocument";

const Post = () => {
  const { id } = useParams();
  const { document: post, loading } = useFetchDocument("posts", id);

  return (
    <div className="container mainContainer">
      <div className={styles.post_container}>
        {loading && <p>Carregando post...</p>}
        {post && (
          <>
            <h2>{post.title}</h2>
            <img src={post.image} alt={post.title} />
            <p>{post.body}</p>
            <div className={styles.tags}>
              {post.tagsArray.map((tag) => (
                <p key={tag}>
                  <span>#</span>
                  {tag}
                </p>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Post;
