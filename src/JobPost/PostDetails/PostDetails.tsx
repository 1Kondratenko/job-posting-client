import styles from "./styles.module.scss";
import closeIcon from "../../assets/icons/closeIcon.svg";
import { useState } from "react";
import moment from "moment";
import { PostDetailsProps } from "../../App";

export const PostDetails = ({ post }: PostDetailsProps) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleFilterClick = (filter: string) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(
        selectedFilters.filter((selectedFilter) => selectedFilter !== filter)
      );
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  const handleRemoveFilter = (filter: string) => {
    setSelectedFilters(
      selectedFilters.filter((selectedFilter) => selectedFilter !== filter)
    );
  };

  const handleClearAllFilters = () => {
    setSelectedFilters([]);
  };

  return (
    <>
      <div>
        {selectedFilters.length > 0 && (
          <div className={styles.filtersWrapper}>
            <div className={styles.selectedFiltersContainer}>
              <div className={styles.selectedFiltersContainer__content}>
                {selectedFilters.map((filter) => (
                  <div className={styles.tagContainer__withIcon}>
                    <div className={styles.tagContainer}>
                      <div className={styles.tagContainer__text} key={filter}>
                        {filter}
                      </div>
                    </div>
                    <div
                      className={styles.tagContainer__icon}
                      onClick={() => handleRemoveFilter(filter)}
                    >
                      <img src={closeIcon} alt="close" />
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.clearAll} onClick={handleClearAllFilters}>
                Clear
              </div>
            </div>
          </div>
        )}
      </div>
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
