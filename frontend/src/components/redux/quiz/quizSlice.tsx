// src/features/quiz/quizSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchQuizQuestions, QuizQuestion } from '../../api/api'; // Correct import for fetchQuizQuestions

interface QuizState {
  quizQuestions: QuizQuestion[]; // Use the QuizQuestion[] type from the API
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: QuizState = {
  quizQuestions: [],
  status: 'idle',
  error: null,
};

export const fetchQuizQuestionsAsync = createAsyncThunk(
  'quiz/fetchQuizQuestions',
  async () => {
    const response = await fetchQuizQuestions();
    return response;
  }
);

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuizQuestionsAsync.pending, (state: QuizState) => {
        state.status = 'loading';
      })
      .addCase(fetchQuizQuestionsAsync.fulfilled, (state: QuizState, action: PayloadAction<QuizQuestion[]>) => {
        state.status = 'succeeded';
        state.quizQuestions = action.payload;
      })
      .addCase(fetchQuizQuestionsAsync.rejected, (state: QuizState, action: PayloadAction<any>) => {
        state.status = 'failed';
        state.error = action.payload?.message;
      });
  },
});

export const selectQuizQuestions = (state: { quiz: QuizState }) => state.quiz.quizQuestions;
export const selectQuizStatus = (state: { quiz: QuizState }) => state.quiz.status;
export const selectQuizError = (state: { quiz: QuizState }) => state.quiz.error;

export default quizSlice.reducer;
