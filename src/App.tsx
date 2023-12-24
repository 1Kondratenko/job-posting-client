import "./App.css";
import { Header } from "./Header/Header";
import { Post } from "./JobPost/JobPost";
import { useEffect, useState } from "react";
import { fetchData, Vacancy, Company } from "./axios/Request";

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
}

export const App = () => {
  const [postDetails, setPostDetails] = useState<Vacancy[]>([]);

  console.log("postDetails", postDetails);

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const data = await fetchData();
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
  }, []);
  return (
    <div>
      <Header />
      {postDetails && postDetails.length > 0 ? (
        postDetails.map((post, index) => <Post key={index} post={post} />)
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
};
