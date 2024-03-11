export const SECS_PER_QUESTION = 30;
export const initialState = {
  questions: [],

  // status : 'loading', 'error', 'ready', 'active', 'finished'
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};
