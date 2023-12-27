import axios, { AxiosResponse, AxiosError } from "axios";

interface ProgrammingLanguage {
  name: string;
}

interface Technology {
  name: string;
}

export interface Company {
  createdAt: string;
  name: string;
  avatar: string;
}

export interface Vacancy {
  createdAt: string;
  title: string;
  role: string;
  location: string;
  employment_type: string;
  level: string;
  company: Company;
  programmingLanguages: ProgrammingLanguage[];
  technologies: Technology[];
}

export interface ApiResponse {
  data: Vacancy[];
}

export interface ApiError {
  message: string;
}

export const fetchData = async (search?: string[]): Promise<Vacancy[]> => {
  const url = "http://localhost:5000/vacancies";

  try {
    const response: AxiosResponse<ApiResponse> = await axios.get(url, {
      params: {
        search,
      },
    });
    console.log("Server response:", response.data);
    if (Array.isArray(response.data)) {
      return response.data;
    } else {
      console.error("Invalid response structure. Expected an array.");
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    const axiosError = error as AxiosError<ApiError>;
    console.error("Request error:", axiosError.message);
    throw new Error("Failed to fetch data");
    return [];
  }
};
