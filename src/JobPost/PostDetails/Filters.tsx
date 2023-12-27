import styles from "./styles.module.scss";
import closeIcon from "../../assets/icons/closeIcon.svg";
import { FiltersProps } from "../../App";

export const Filters = ({
  selectedFilters,
  handleRemoveFilter,
  handleClearAllFilters,
}: FiltersProps) => {
  console.log("selectedFilters", selectedFilters);
  return (
    <>
      {selectedFilters.length > 0 && (
        <div className={styles.filtersWrapper}>
          <div className={styles.selectedFiltersContainer}>
            <div className={styles.selectedFiltersContainer__content}>
              {selectedFilters.map((filter: string) => (
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
    </>
  );
};
