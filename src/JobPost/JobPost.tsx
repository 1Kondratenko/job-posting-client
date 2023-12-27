import { PostDetailsProps } from "../App";
import { PostDetails } from "./PostDetails/PostDetails";
import styles from "./styles.module.scss";

export const Post = ({ post, handleFilterClick }: PostDetailsProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.itemsContainer}>
        <PostDetails post={post} handleFilterClick={handleFilterClick} />
      </div>
    </div>
  );
};
