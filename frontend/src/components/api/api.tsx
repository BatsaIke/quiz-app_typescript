// src/api/api.ts
import axios, { AxiosInstance, AxiosResponse } from 'axios';

// Define the type for a single quiz question
export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctOption: string;
}
interface UserProps {
  name?: string;
  email: string;
  password: string;
 
}

interface userToken { 
  token:string}


//get all quiz questions
const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api/v1/', // Adjust the URL if the backend is running on a different port
});

export const fetchQuizQuestions = async (): Promise<QuizQuestion[]> => {
  try {
    const response: AxiosResponse<QuizQuestion[]> = await api.get('quiz');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch quiz questions', error.message);
    throw error;
  }
};

//create new user
export const registerUser = async (userData: UserProps): Promise<UserProps> => {
  try {
    const response: AxiosResponse<UserProps> = await api.post('/users', userData);
    return response.data;
  } catch (error) {
    console.error('Failed to register user', error.message);
    throw error;
  }
}

//Login a user
export const loginUser = async (userData:UserProps):Promise<userToken> => {
  try {
    const response: AxiosResponse<userToken> = await api.post('/auth', userData)
    return response.data
  } catch (error) {
    console.error('Failed to login user', error.message);
    throw error;
  }
}


