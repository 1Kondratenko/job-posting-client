import "./App.css";
import { Header } from "./Header/Header";
import { Post } from "./JobPost/JobPost";
import { useEffect, useState } from "react";
import { fetchData, Vacancy, Company } from "./axios/Request";
import { Filters } from "./JobPost/PostDetails/Filters";

export interface PostDetailsProps {
  post: {
    company: Company;
    title: string;
    createdAt: string;
    employment_type: string;
    location: string;
    programmingLanguages: Array<{ name: string }>;
    technologies: Array<{ name: string }>;
  };
  handleFilterClick: (filter: string) => void;
}

export interface FiltersProps {
  selectedFilters: string[];
  handleRemoveFilter: (filter: string) => void;
  handleClearAllFilters: () => void;
}

export const App = () => {
  const [postDetails, setPostDetails] = useState<Vacancy[]>([]);
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

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const data = await fetchData(selectedFilters);
        console.log(data, "data");
        setPostDetails(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Error fetching data:", error.message);
        } else {
          console.error("Unknown error:", error);
        }
      }
    };

    fetchPostDetails();
  }, [selectedFilters]);
  return (
    <div>
      <Header />
      <Filters
        selectedFilters={selectedFilters}
        handleRemoveFilter={handleRemoveFilter}
        handleClearAllFilters={handleClearAllFilters}
      />
      {postDetails && postDetails.length > 0 ? (
        postDetails.map((post, index) => (
          <Post key={index} post={post} handleFilterClick={handleFilterClick} />
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
};
