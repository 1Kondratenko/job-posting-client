import styles from "./styles.module.scss";
import { useState } from "react";
import moment from "moment";
import { PostDetailsProps } from "../../App";
import { Filters } from "./Filters";

export const PostDetails = ({ post, handleFilterClick }: PostDetailsProps) => {
  return (
    <>
      <div className={styles.details}>
        <div className={styles.details__withImg}>
          <img src={post.company.avatar} alt="logo" />
          <div className={styles.details__info}>
            <div className={styles.details__company}>{post.company.name}</div>
            <div className={styles.details__title}>{post.title}</div>
            <div className={styles.details__attachments}>
              <div className={styles.details__attachmentsInfo}>
                {moment(new Date(post.createdAt), "x").fromNow()}
              </div>
              <div className={styles.details__attachmentsInfo}>
                {post.employment_type}
              </div>
              <div className={styles.details__attachmentsInfo}>
                {post.location}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.details__filters}>
          {[...post.programmingLanguages, ...post.technologies].map(
            (language, index) => (
              <div className={styles.filtersContainer} key={index}>
                <div
                  className={styles.filtersContainer__text}
                  onClick={() => handleFilterClick(language.name)}
                >
                  {language.name}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};
