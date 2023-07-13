import {
  loginPath,
  createUserPath,
  createProblemPath,
  listProblemsPath,
  getProblemPath,
  createSubmissionPath
} from './paths/';

export default {
  '/session': loginPath,
  '/users': createUserPath,
  '/problem': createProblemPath,
  '/problems': listProblemsPath,
  '/problem/{problemId}': getProblemPath,
  '/submission': createSubmissionPath
};
