export interface ICreateSubmissionDTO {
  status: string;
  problem_id: number;
  source_code: string;
  user_id: number;
  memory: number;
  message: string;
  time: number;
}
